// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { Row, Col, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, ColumnToggle } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select';

import PageTitle from '../../components/PageTitle';
import Spinner from '../../components/Spinner';
import EditCell from '../../components/editCell';
import HyperDatepicker from '../../components/Datepicker';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: 'time_created',
        order: 'desc',
    },
];

const paginationOptions = {
    sizePerPage: 25,
    sizePerPageList: [
        {text: '10', value: 10},
        {text: '25', value: 25},
        {text: '50', value: 50},
        {text: '100', value: 100},
        {text: '200', value: 200},
    ],
    showTotal: true,
};

const CustomToggleList = ({columns,onColumnToggle,toggles}) => {
    const options = [];
    const selected = [];
    columns.forEach(function(column) {
        options.push({label: column.text, value: column.dataField})
        if (toggles[column.dataField]) {
            selected.push({label: column.text, value: column.dataField})
        }
    })

    const testFunction = function(e, data) {
        if (data.action === "select-option") {
            onColumnToggle(data.option.value);
        } else {
            onColumnToggle(data.removedValue.value);
        }
    }

    return (
        <Select
            value={selected}
            onChange={testFunction.bind(this)}
            options={options}
            name="Columns"
            isMulti={true}
            className="mb-2 mt-2"
            backspaceRemovesValue={false}
            closeMenuOnSelect={false}
            isClearable={false}
        />
    )
}

class ViewCampaigns extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campaigns: [],
            selectedCampaigns: [],
            loading: true,
            startDate: moment().subtract(30,'days').toDate(),
            endDate: moment().toDate(),
            deleteModalOpen: false,
            currentCampaign: '',
            deleting: false,
            finishedDeleting: false,
        };
    }

    componentDidMount() {
        var start = moment(this.state.startDate).format('MM/DD/YYYY'),
            end = moment(this.state.endDate).add(1,'days').format('MM/DD/YYYY'),
            self = this;

        axios.all([
            axios.get(`https://mailstats.bluemodoteam.com/v2/campaigns?mailerName=0&admin=true&limit=10000&offset=0&startDate=${start}&endDate=${end}`),
            axios.get(`https://mailstats.bluemodoteam.com/revenue?groupby=campaign_id`) //TODO - This request needs to be restricted by date range
        ]).then(axios.spread(function (res, revenue) {
            // Both requests are now complete
            const campaigns = res.data.data;
            const revenueData = revenue.data.data;
            campaigns.forEach(function(campaign) {
                campaign.time_created = campaign.time_created.substring(0, campaign.time_created.indexOf(','));
                if (revenueData[campaign.id.toString()]) {
                    campaign.revenue = revenueData[campaign.id.toString()];
                } else {
                    campaign.revenue = 0;
                }
                campaign.ctr = 0;
                campaign.openRate = 0;
                campaign.complaintRate = 0;
                if (campaign.clicks) {
                    campaign.ctr = (campaign.clicks / campaign.send_size)*100;
                }
                if (campaign.opens) {
                    campaign.openRate = (campaign.opens / campaign.send_size)*100;
                }
                if (campaign.compaints) {
                    campaign.complaintRate = (campaign.complaints / campaign.send_size)*100;
                }
            });
            self.setState({
                campaigns,
                loading: false
            })
        }));
    }

    editFormatter = (row, cell) => {
        const editMenus = [
            {
                label: 'Edit',
                icon: 'mdi mdi-pencil',
                redirectTo: '/campaigns/edit/' + cell.id,
                roles: 'public'
            },
            {
                label: 'Delete',
                icon: 'mdi mdi-delete',
                onClick: () => this.toggleDeleteModal(cell),
                roles: 'restricted'
            },
        ];

        return  (
            <EditCell 
                campaign = { cell }
                EditMenus = { editMenus }
                user = {this.props.user}
            />
        );
    }

    percentageFormatter = (cell, row) => {
        return cell.toFixed(2).toString() + '%';
    }

    currencyFormatter = (cell, row) => {
        return '$' + cell.toFixed(2).toString();
    }

    handleDateChange = (target, value) => {
        this.setState({
            [target]: value,
            loading: true
        });
        var start = target === 'startDate' ? moment(value).format('MM/DD/YYYY') : moment(this.state.startDate).format('MM/DD/YYYY'),
            end = target === 'endDate' ? moment(value).add(1,'days').format('MM/DD/YYYY') : moment(this.state.endDate).add(1,'days').format('MM/DD/YYYY');
        axios.get(`https://mailstats.bluemodoteam.com/v2/campaigns?mailerName=0&admin=true&limit=10000&offset=0&startDate=${start}&endDate=${end}`).then(res => {
            const campaigns = res.data.data;
            this.setState({
                campaigns,
                loading: false
            })
        });
    }

    toggleDeleteModal = (campaign) => {
        var currentCampaign = '';
        if (campaign) {
            currentCampaign = campaign;
        }
        this.setState(prevState => ({
            deleteModalOpen: !prevState.deleteModalOpen,
            currentCampaign
        }));
    }

    deleteCampaign = () => {
        if (this.props.user.role === 'Admin' || this.props.user.firstName === this.state.currentCampaign.mailer) {
            this.setState({
                deleting: true
            });
            axios.delete(`https://mailstats.bluemodoteam.com/v2/campaigns`, {
                data: {
                    campaignid: this.state.currentCampaign.id,
                }
            }).then((response) => {
                console.log(response);
                var campaignsCopy = [...this.state.campaigns]; // make a separate copy of the array
                var index = campaignsCopy.indexOf(this.state.currentCampaign);
                if (index !== -1) {
                    campaignsCopy.splice(index, 1);
                }

                this.setState({
                    deleting: false,
                    finishedDeleting: true,
                    campaigns: campaignsCopy
                });
                
                setTimeout(() => {
                    this.setState({
                        deleteModalOpen: false,
                        finishedDeleting: false
                    });
                }, 2000);
            }).catch((error) => {
                toast.error("Whoa! Something went wrong. Hit up Ryan and tell him to fix this.");
            });
        } else {
            this.setState({
                deleteModalOpen: false,
                finishedDeleting: false
            });
            toast.error("Whoa! You don't have permission to delete this campaign. Contact Ryan if this is an error.");
        }
        
    }

    render() {

        const columns = [
            {
                dataField: 'id',
                text: 'ID',
                sort: true,
                hidden: true
            },
            {
                dataField: 'time_created',
                text: 'Date',
                sort: true,
            },
            {
                dataField: 'account_id',
                text: 'Account',
                sort: true,
                hidden: true
            },
            {
                dataField: 'mailer',
                text: 'Mailer',
                sort: true,
            },
            {
                dataField: 'esp',
                text: 'ESP',
                sort: true,
            },
            {
                dataField: 'offer',
                text: 'Offer',
                sort: true,
            },
            {
                dataField: 'send_size',
                text: 'Send Size',
                sort: true,
                hidden: true
            },
            {
                dataField: 'opens',
                text: 'Opens',
                sort: true,
                hidden: true
            },
            {
                dataField: 'openRate',
                text: 'Open Rate',
                sort: true,
                hidden: true,
                formatter: this.percentageFormatter
            },
            {
                dataField: 'clicks',
                text: 'Clicks',
                sort: true,
                hidden: true
            },
            {
                dataField: 'ctr',
                text: 'CTR',
                sort: true,
                hidden: true,
                formatter: this.percentageFormatter
            },
            {
                dataField: 'complaints',
                text: 'Complaints',
                sort: true,
                hidden: true
            },
            {
                dataField: 'complaintRate',
                text: 'Compaint Rate',
                sort: true,
                hidden: true,
                formatter: this.percentageFormatter
            },
            {
                dataField: 'revenue',
                text: 'Revenue',
                sort: true,
                hidden: true,
                formatter: this.currencyFormatter
            },
            {
                dataField: 'edit',
                text: 'Edit',
                sort: false,
                formatter: this.editFormatter,
            }
        ];

        const { ToggleList } = ColumnToggle;

        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[{ label: 'Campaigns', path: '/campaigns/view' }, { label: 'View', active: true }]}
                    title={'Campaigns'}
                />
                <Card>
                    <CardBody>
                        <ToolkitProvider
                            bootstrap4
                            keyField="id"
                            data={this.state.campaigns}
                            columns={columns}
                            search
                            columnToggle>
                            {props => (
                                <React.Fragment>
                                    <Row>
                                        <Col lg={4}>
                                            <SearchBar {...props.searchProps} />
                                        </Col>
                                        <Col lg={8} className="text-right date-pickers">
                                            <HyperDatepicker
                                                selected={this.state.endDate}
                                                onChange={ (value) => this.handleDateChange('endDate', value) }
                                            />
                                            <HyperDatepicker
                                                selected={this.state.startDate}
                                                onChange={ (value) => this.handleDateChange('startDate', value) }
                                            />
                                        </Col>
                                    </Row>
                                    {this.state.loading ? (
                                        <div className="text-center">
                                            <h4 className="mt-4 header-title text-center">Loading Campaigns</h4>
                                            <Spinner className="m-2 text-center" color='primary' />
                                        </div>
                                    ) : (
                                        <Row>
                                            <Col xs={12}>
                                                <CustomToggleList { ...props.columnToggleProps } />
                                            </Col>
                                            <Col>
                                                <BootstrapTable
                                                    {...props.baseProps}
                                                    bordered={false}
                                                    defaultSorted={defaultSorted}
                                                    pagination={paginationFactory(paginationOptions)}
                                                    wrapperClasses="table-responsive table-sm"
                                                />
                                                
                                            </Col>
                                        </Row>
                                    )}
                                </React.Fragment>
                            )}
                        </ToolkitProvider>
                    </CardBody>
                </Card>
                <Modal
                    isOpen={this.state.deleteModalOpen}
                    toggle={this.toggleDeleteModal}
                    className="modal-dialog modal-dialog-centered">
                    <ModalHeader toggle={this.toggleDeleteModal} className="">Delete Campaign</ModalHeader>
                    {this.state.deleting ? (
                        <div className="text-center">
                            <h4 className="mt-4 header-title text-center">Deleting Campaign</h4>
                            <Spinner className="m-2 text-center" color='primary' />;
                        </div>
                    ) : this.state.finishedDeleting ? (
                        <div className="text-center mt-4">
                            <svg className={this.state.finishedDeleting ? 'checkmark active' : 'checkmark'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className={this.state.finishedDeleting ? 'checkmark__circle active' : 'checkmark__circle'} cx="26" cy="26" r="25" fill="none"/><path className={this.state.finishedDeleting ? 'checkmark__check active' : 'checkmark__check'} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                            <h3 className="text-center mb-3">Campaign Deleted!</h3>
                        </div>
                    ) : (
                        <ModalBody>
                            <h3>Are you sure you want to delete this campaign?</h3>
                        </ModalBody>
                    )}
                    <ModalFooter>
                        <Button color="danger" onClick={this.deleteCampaign}>
                            Delete Campaign
                        </Button>
                        <Button color="secondary" onClick={this.toggleDeleteModal}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
                <ToastContainer
                    autoClose={3000}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
};

export default connect(
    mapStateToProps
)(ViewCampaigns);
