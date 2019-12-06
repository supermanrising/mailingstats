// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { Row, Col, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import { ToastContainer, toast } from 'react-toastify';

import PageTitle from '../../components/PageTitle';
import Spinner from '../../components/Spinner';
import EditCell from '../../components/editCell';
import TableFooter from '../../components/TableFooter';
import HyperDatepicker from '../../components/Datepicker';

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

const defaultSorted = [
    {
        dataField: 'time_created',
        order: 'desc',
    },
];

class ViewCampaigns extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campaigns: [],
            selectedCampaigns: [],
            loading: true,
            sizePerPage: 50,
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
            end = moment(this.state.endDate).add(1,'days').format('MM/DD/YYYY');
            console.log(start,end);
        axios.get(`https://mailstats.bluemodoteam.com/v2/campaigns?mailerName=0&admin=true&limit=10000&offset=0&startDate=${start}&endDate=${end}`).then(res => {
            const campaigns = res.data.data;
            campaigns.forEach(function(campaign) {
                campaign.time_created = campaign.time_created.substring(0, campaign.time_created.indexOf(','));
            });
            this.setState({
                campaigns,
                loading: false
            })
        });
    }

    handleOnSelect = (row, isSelect) => {
        if (isSelect) {
            this.setState(() => ({
                selectedCampaigns: [...this.state.selectedCampaigns, row.id]
            }));
        } else {
            this.setState(() => ({
                selectedCampaigns: this.state.selectedCampaigns.filter(x => x !== row.id)
            }));
        }
    }

    handleOnSelectAll = (isSelect, rows) => {
        console.log(rows)
        const ids = rows.map(r => r.id);
        if (isSelect) {
            this.setState(() => ({
                selectedCampaigns: ids
            }));
        } else {
            this.setState(() => ({
                selectedCampaigns: []
            }));
        }
    }

    handleNextPage = ({ page, onPageChange }) => (e) => {
        e.preventDefault()
        onPageChange(page + 1);
    }

    handlePrevPage = ({ page, onPageChange }) => (e) => {
        e.preventDefault()
        onPageChange(page - 1);
    }

    goToPage = ({ onPageChange }, newPage) => (e) => {
        e.preventDefault()
        onPageChange(newPage);
    }

    handleSizePerPage = ({ page, onSizePerPageChange, onPageChange }, newSizePerPage) => {
        if (page * newSizePerPage > this.state.campaigns.length) {
            onPageChange(1);
            onSizePerPageChange(newSizePerPage, 1);
        } else {
            onSizePerPageChange(newSizePerPage, page);
        }
        this.setState(() => ({
            sizePerPage: newSizePerPage
        }));
            
    }

    editFormatter = (row, cell) => {
        const editMenus = [
            {
                label: 'Edit',
                icon: 'mdi mdi-pencil',
                redirectTo: '/campaigns/edit/' + cell.id,
            },
            {
                label: 'Delete',
                icon: 'mdi mdi-delete',
                onClick: () => this.toggleDeleteModal(cell),
            },
            // {
            //     label: 'Duplicate',
            //     icon: 'mdi mdi-content-duplicate',
            //     redirectTo: '/',
            // },
        ];

        return  (
            <EditCell 
                campaign = { cell }
                EditMenus = { editMenus }
            />
        );
    }

    handleDateChange = (target, value) => {
        this.setState({
            [target]: value,
            loading: true
        });
        var start = target === 'startDate' ? moment(value).format('MM/DD/YYYY') : moment(this.state.startDate).format('MM/DD/YYYY'),
            end = target === 'endDate' ? moment(value).add(1,'days').format('MM/DD/YYYY') : moment(this.state.endDate).add(1,'days').format('MM/DD/YYYY');
            console.log(start,end);
        axios.get(`https://mailstats.bluemodoteam.com/v2/campaigns?mailerName=0&admin=true&limit=10000&offset=0&startDate=${start}&endDate=${end}`).then(res => {
            const campaigns = res.data.data;
            this.setState({
                campaigns,
                loading: false
            })
        });
    }

    toggleDeleteModal = (campaign) => {
        console.log(campaign);
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
            toast.error("Whoa! Something went wrong. Hit up Ryan and tell him to fix this.")
        });
    }

    render() {
        // const selectRow = {
        //     mode: 'checkbox',
        //     clickToSelect: false,
        //     style: { backgroundColor: '#2c8ef8', color: '#fff' },
        //     selected: this.state.selectedCampaigns,
        //     onSelect: this.handleOnSelect,
        //     onSelectAll: this.handleOnSelectAll
        // };

        const columns = [
            {
                dataField: 'time_created',
                text: 'Date',
                sort: true,
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
                formatter: this.editFormatter,
                dataField: 'edit',
                text: 'Edit',
                sort: false
            }
        ];

        const paginationOptions = {
            custom: true,
            sizePerPage: this.state.sizePerPage,
            totalSize: this.state.campaigns.length
        };

        const totalPages = Math.ceil(paginationOptions.totalSize / paginationOptions.sizePerPage);

        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[{ label: 'Campaigns', path: '/campaigns/view' }, { label: 'View', active: true }]}
                    title={'View Campaigns'}
                />
                <Card>
                    <CardBody>
                        <ToolkitProvider
                            bootstrap4
                            keyField="id"
                            data={this.state.campaigns}
                            columns={columns}
                            search
                            exportCSV={{ onlyExportFiltered: true, exportAll: false }}>
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
                                            <Col>
                                                <PaginationProvider
                                                    pagination={ paginationFactory(paginationOptions) }
                                                >
                                                    {({ paginationProps, paginationTableProps }) => (
                                                        <div>
                                                            <BootstrapTable
                                                                {...props.baseProps}
                                                                bordered={false}
                                                                defaultSorted={defaultSorted}
                                                                wrapperClasses="table-responsive"
                                                                // selectRow={selectRow}
                                                                { ...paginationTableProps }
                                                            />
                                                            <TableFooter
                                                                totalPages={totalPages}
                                                                paginationProps={paginationProps}
                                                                handlePrevPage={ this.handlePrevPage }
                                                                handleNextPage={ this.handleNextPage }
                                                                goToPage={ this.goToPage }
                                                                handleSizePerPage={ this.handleSizePerPage }
                                                            />
                                                            
                                                        </div>
                                                    )}
                                                </PaginationProvider>
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
