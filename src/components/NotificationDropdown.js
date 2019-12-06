// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const notificationContainerStyle = {
    maxHeight: '230px',
};

type NotificationItem = {
    id: number,
    text: string,
    subText: string,
    icon: string,
    bgColor: string,
};

type NotificationDropdownProps = {
    notifications: Array<NotificationItem>,
};

type NotificationDropdownState = {
    dropdownOpen?: boolean,
};

class NotificationDropdown extends Component<NotificationDropdownProps, NotificationDropdownState> {
    static defaultProps = {
        notifications: [],
    };

    constructor(props: NotificationDropdownProps) {
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

    getRedirectUrl = (item: NotificationItem) => {
        return `/notification/${item.id}`;
    };

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="button"
                    className="nav-link dropdown-toggle arrow-none btn btn-link"
                    onClick={this.toggleDropdown}
                    aria-expanded={this.state.dropdownOpen}>
                    <i className="dripicons-bell noti-icon"></i>
                    <span className="noti-icon-badge"></span>
                </DropdownToggle>
                <DropdownMenu right className="dropdown-menu-animated dropdown-lg">
                    <div onClick={this.toggleDropdown}>
                        <div className="dropdown-item noti-title">
                            <h5 className="m-0">
                                <span className="float-right">
                                    <Link to="/notifications" className="text-dark">
                                        <small>Clear All</small>
                                    </Link>
                                </span>
                                Notification
                            </h5>
                        </div>
                        <PerfectScrollbar style={notificationContainerStyle}>
                            {this.props.notifications.map((item, i) => {
                                return (
                                    <Link
                                        to={this.getRedirectUrl(item)}
                                        className="dropdown-item notify-item"
                                        key={i + '-noti'}>
                                        <div className={`notify-icon bg-${item.bgColor}`}>
                                            <i className={item.icon}></i>
                                        </div>
                                        <p className="notify-details">
                                            {item.text}
                                            <small className="text-muted">{item.subText}</small>
                                        </p>
                                    </Link>
                                );
                            })}
                        </PerfectScrollbar>

                        <Link to="/" className="dropdown-item text-center text-primary notify-item notify-all">
                            View All
                        </Link>
                    </div>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default NotificationDropdown;
