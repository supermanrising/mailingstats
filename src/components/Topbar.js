// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProfileDropdown from './ProfileDropdown';
import { showRightSidebar } from '../redux/actions';

import profilePic from '../assets/images/users/avatar-1.jpg';

const ProfileMenus = [
    {
        label: 'My Account',
        icon: 'mdi mdi-account-circle',
        redirectTo: '/',
    },
    {
        label: 'Logout',
        icon: 'mdi mdi-logout',
        redirectTo: '/account/logout',
    },
];

type TopbarProps = {
    showRightSidebar: PropTypes.func,
    navCssClasses?: string,
    openLeftMenuCallBack?: PropTypes.func,
};

class Topbar extends Component<TopbarProps> {
    constructor(props) {
        super(props);

        this.handleRightSideBar = this.handleRightSideBar.bind(this);
    }

    /**
     * Toggles the right sidebar
     */
    handleRightSideBar = () => {
        this.props.showRightSidebar();
    };

    render() {
        const navCssClasses = this.props.navCssClasses || '';
        const containerCssClasses = 'container-fluid';
        return (
            <React.Fragment>
                <div className={`navbar-custom ${navCssClasses}`}>
                    <div className={containerCssClasses}>
                        <ul className="list-unstyled topbar-right-menu float-right mb-0">
                            <li className="notification-list">
                                <ProfileDropdown
                                    profilePic={profilePic}
                                    menuItems={ProfileMenus}
                                    username={this.props.user.firstName}
                                    userTitle={this.props.user.role}
                                />
                            </li>
                        </ul>
                        <button
                            className="button-menu-mobile open-left disable-btn"
                            onClick={this.props.openLeftMenuCallBack}>
                            <i className="mdi mdi-menu"></i>
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { user } = state.Auth;
    return { user };
};

export default connect(
    mapStateToProps,
    { showRightSidebar }
)(Topbar);
