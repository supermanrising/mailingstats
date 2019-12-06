// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

type EditDropdownState = {
    dropdownOpen?: boolean,
};

class editCell extends Component<EditDropdownState> {
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
        return  (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} className="cellEdit">
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="a"
                    className=""
                    onClick={this.toggleDropdown}
                    aria-expanded={this.state.dropdownOpen}>
                	<i className="mdi mdi-dots-horizontal widget-icon table-edit-icon"></i>
                </DropdownToggle>
                <DropdownMenu right className="dropdown-menu topbar-dropdown-menu profile-dropdown">
                    <div onClick={this.toggleDropdown}>
                        {this.props.EditMenus.map((item, i) => {
                            if (item.roles === 'restricted' && this.props.user.role !== 'Admin' && this.props.user.firstName !== this.props.campaign.mailer) {
                                return
                            } else {
                                return (
                                    <Link
                                        to={item.redirectTo ? item.redirectTo : '#'}
                                        onClick={item.onClick}
                                        className="dropdown-item notify-item"
                                        key={i + '-profile-menu'}>
                                        <i className={`${item.icon} mr-1`}></i>
                                        <span>{item.label}</span>
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default editCell;