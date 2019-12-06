// @flow
import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Row, Col, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

type EditDropdownState = {
    dropdownOpen?: boolean,
};

class tableFooter extends Component<EditDropdownState> {
    constructor(props: EditDropdownProps) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    /*:: toggleDropdown: () => void */
    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    render() {
        const pageSizeOptions = [25, 50, 100, 200];
        return  (
            <Row>
                <Col xl={6}>
                    <Dropdown
                        isOpen={this.state.dropdownOpen}
                        toggle={this.toggleDropdown}
                        tag="span"
                        className="react-bs-table-sizePerPage-dropdown">
                        <DropdownToggle
                            caret
                            data-toggle="dropdown"
                            aria-expanded={this.state.dropdownOpen}
                        >
                            {this.props.paginationProps.sizePerPage}
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu">
                            {pageSizeOptions.map((item, i) => {
                                return (
                                    <DropdownItem
                                        key={i}
                                        onClick={ () => this.props.handleSizePerPage(this.props.paginationProps, item) }
                                    >
                                        {item}
                                    </DropdownItem>
                                );
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col xl={6} className="pull-right">
                    <div className="react-bootstrap-table-pagination-list">
                        <ul className="pagination react-bootstrap-table-page-btns-ul">
                            { this.props.paginationProps.page !== 1 &&
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous" onClick={ this.props.handlePrevPage(this.props.paginationProps) }>
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                            }
                            { [...Array(this.props.totalPages)].map((e, page) => {
                                page = page+1;
                                return (
                                    <li className={ "page-item " + (this.props.paginationProps.page === page ? 'active' : '') }
                                        key={page}>
                                        <a className="page-link"
                                            href="#"
                                            onClick={ this.props.goToPage(this.props.paginationProps, page) }>
                                            {page}
                                        </a>
                                    </li>
                                )
                            }) }
                            { this.props.paginationProps.page !== this.props.totalPages &&
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next" onClick={ this.props.handleNextPage(this.props.paginationProps) }>
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            }
                        </ul>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default tableFooter;