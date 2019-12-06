// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Row, Col, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Button, CustomInput } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

import PageTitle from '../../components/PageTitle';
import Spinner from '../../components/Spinner';
import EditOfferCell from '../../components/editOfferCell';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: 'name',
        order: 'asc',
    },
];

const offer = function(data) {
    this.name = data.name;
    this.id = data.id;
    this.active = data.active === 1 ? true : false;
};

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

const selectRow = {
    mode: 'checkbox',
    clickToSelect: false,
    onSelect: (row, isSelect, rowIndex, e) => {
        console.log(row.id);
        console.log(isSelect);
        console.log(rowIndex);
        console.log(e);
    },
    onSelectAll: (isSelect, rows, e) => {
        console.log(isSelect);
        console.log(rows);
        console.log(e);
    }
};

class ViewOffers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offers: [],
            selectedOffers: [],
            loading: true,
        };
    }

    componentDidMount() {
        axios.get(`https://mailstats.bluemodoteam.com/offer`).then(res => {
            var offers = res.data;
            offers.forEach(function(offer) {
                offer.active = offer.active === 1 ? true : false;
                offer.updating = false;
            });
            this.setState({
                offers,
                loading: false
            });
        });
    }

    updateStatus = (offer, param, value) => {
        var data = offer;
        data[param] = value;
        axios.put(`https://mailstats.bluemodoteam.com/offer/${offer.id}`, data).then(res => {
            console.log(res);
        });
    }

    activeFormatter = (row, offer, rowIndex) => {
        console.log(offer);
        return (
            <CustomInput
                type="switch"
                id={"status-" + offer.id}
                name={"status-" + offer.id}
                label=""
                defaultChecked={offer.active}
                disabled={offer.updating}
                onChange={() => this.updateStatus(offer, 'active', !offer.active)}
            />
        );
    }

    editFormatter = (row, offer) => {
        const editMenus = [
            {
                label: 'Edit Name',
                icon: 'mdi mdi-pencil',
                onClick: () => this.toggleEditModal(offer),
                roles: 'restricted'
            },
            {
                label: 'View Creatives',
                icon: 'mdi mdi-laptop-mac',
                redirectTo: '/offers/' + offer.id + '/creatives/',
                roles: 'public'
            },
            {
                label: 'View Subjects',
                icon: 'mdi mdi-email-search',
                redirectTo: '/offers/' + offer.id + '/subjects/',
                roles: 'public'
            },
            {
                label: 'Duplicate Content',
                icon: 'mdi mdi-content-duplicate',
                redirectTo: '/offers/' + offer.id + '/duplicate/',
                roles: 'restricted'
            },
            {
                label: 'Delete',
                icon: 'mdi mdi-delete',
                redirectTo: '/offers/delete/' + offer.id,
                roles: 'restricted'
            },
        ];

        return  (
            <EditOfferCell 
                offer = { offer }
                EditMenus = { editMenus }
                user = {this.props.user}
            />
        );
    }

    toggleEditModal = (offer) => {
        console.log(offer);
    }

    render() {
        const columns = [
            {
                dataField: 'id',
                text: 'ID',
                sort: true,
            },
            {
                dataField: 'name',
                text: 'Name',
                sort: true,
            },
            {
                dataField: 'active',
                text: 'Active',
                formatter: this.activeFormatter,
                sort: true,
            },
            {
                formatter: this.editFormatter,
                dataField: 'edit',
                text: 'Edit',
                sort: false
            },
        ];

        const tableData = this.state.offers;

        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[{ label: 'Offers', path: '/offers/view' }, { label: 'View', active: true }]}
                    title={'Offers'}
                />
                <Card>
                    <CardBody>
                        <ToolkitProvider
                            bootstrap4
                            keyField="id"
                            data={tableData}
                            columns={columns}
                            search>
                            {props => (
                                <React.Fragment>
                                    <Row>
                                        <Col lg={4}>
                                            <SearchBar {...props.searchProps} />
                                        </Col>
                                        <Col lg={8} className="text-right">
                                            
                                        </Col>
                                    </Row>
                                    {this.state.loading ? (
                                        <div className="text-center">
                                            <h4 className="mt-4 header-title text-center">Loading Offers</h4>
                                            <Spinner className="m-2 text-center" color='primary' />
                                        </div>
                                    ) : (
                                        <Row>
                                            <Col>
                                                <BootstrapTable
                                                    {...props.baseProps}
                                                    bordered={false}
                                                    defaultSorted={defaultSorted}
                                                    pagination={paginationFactory(paginationOptions)}
                                                    wrapperClasses="table-responsive"
                                                    selectRow={ selectRow }
                                                />
                                                
                                            </Col>
                                        </Row>
                                    )}
                                </React.Fragment>
                            )}
                        </ToolkitProvider>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
};
const mapStateToProps = state => {
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
};

export default connect(
    mapStateToProps
)(ViewOffers);
