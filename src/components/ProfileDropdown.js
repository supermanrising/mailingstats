// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

type ProfileMenuItem = {
    label: string,
    icon: string,
    redirectTo: string,
};

type ProfileDropdownProps = {
    menuItems: Array<ProfileMenuItem>,
    profilePic?: any,
    username: string,
    userTitle?: string,
};

type ProfileDropdownState = {
    dropdownOpen?: boolean,
};

class ProfileDropdown extends Component<ProfileDropdownProps, ProfileDropdownState> {
    constructor(props: ProfileDropdownProps) {
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
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="button"
                    className="btn btn-link nav-link dropdown-toggle nav-user arrow-none mr-0"
                    onClick={this.toggleDropdown}
                    aria-expanded={this.state.dropdownOpen}>
                    <span className="account-user-avatar">
                        <i className="mdi mdi-account widget-icon profile-widget-icon bg-primary rounded-circle text-white"></i>
                    </span>
                    <span>
                        <span className="account-user-name">{this.props.username}</span>
                        <span className="account-position">{this.props.userTitle}</span>
                    </span>
                </DropdownToggle>
                <DropdownMenu right className="dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                    <div onClick={this.toggleDropdown}>
                        <div className="dropdown-header noti-title">
                            <h6 className="text-overflow m-0">Welcome !</h6>
                        </div>
                        {this.props.menuItems.map((item, i) => {
                            return (
                                <Link
                                    to={item.redirectTo}
                                    className="dropdown-item notify-item"
                                    key={i + '-profile-menu'}>
                                    <i className={`${item.icon} mr-1`}></i>
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default ProfileDropdown;
