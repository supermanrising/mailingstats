// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import logoSm from '../assets/images/bmlogo_sm.png';
import logoDark from '../assets/images/logo-dark.png';
import logo from '../assets/images/bmlogo.png';
import profileImg from '../assets/images/users/avatar-1.jpg';

import AppMenu from './AppMenu';

type SideBarContentProps = {
    menuClickHandler?: {},
    hideLogo: boolean,
    isLight: boolean,
    hideUserProfile: boolean,
};

const SideBarContent = ({ hideLogo, hideUserProfile, isLight, menuClickHandler }: SideBarContentProps) => {
    return (
        <React.Fragment>
            {!hideLogo && (
                <Link to="/" className="logo text-center">
                    <span className="logo-lg">
                        <img src={isLight ? logoDark : logo} alt="logo" height="28" />
                    </span>
                    <span className="logo-sm">
                        <img src={logoSm} alt="logo" height="16" />
                    </span>
                </Link>
            )}

            {!hideUserProfile && (
                <div className="leftbar-user">
                    <Link to="/">
                        <img src={profileImg} alt="" height="42" className="rounded-circle shadow-sm" />
                        <span className="leftbar-user-name">Dominic Keller</span>
                    </Link>
                </div>
            )}

            <AppMenu menuClickHandler={menuClickHandler} />

            <div className="clearfix" />
        </React.Fragment>
    );
};

type LeftSidebarProps = {
    menuClickHandler?: {},
    hideLogo?: boolean,
    hideUserProfile?: boolean,
    isLight?: boolean,
    isCondensed: boolean,
};

class LeftSidebar extends Component<LeftSidebarProps> {
    menuNodeRef: any;

    constructor(props: LeftSidebarProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleOtherClick = this.handleOtherClick.bind(this);
    }

    /**
     * Bind event
     */
    componentWillMount = () => {
        document.addEventListener('mousedown', this.handleOtherClick, false);
    };

    /**
     * Bind event
     */
    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleOtherClick, false);
    };

    /**
     * Handle the click anywhere in doc
     */
    handleOtherClick = (e: any) => {
        if (this.menuNodeRef.contains(e.target)) return;
        // else hide the menubar
        if (document.body) {
            document.body.classList.remove('sidebar-enable');
        }
    };

    /**
     * Handle click
     * @param {*} e
     * @param {*} item
     */
    /*:: handleClick: () => void */
    handleClick(e: {}) {
        console.log(e);
    }

    render() {
        const isCondensed = this.props.isCondensed || false;
        const isLight = this.props.isLight || false;
        const hideLogo = this.props.hideLogo || false;
        const hideUserProfile = this.props.hideUserProfile || false;

        return (
            <React.Fragment>
                <div className="left-side-menu" ref={node => (this.menuNodeRef = node)}>
                    {!isCondensed && (
                        <PerfectScrollbar>
                            <SideBarContent
                                menuClickHandler={this.handleClick}
                                hideLogo={hideLogo}
                                isLight={isLight}
                                hideUserProfile={hideUserProfile}
                            />
                        </PerfectScrollbar>
                    )}
                    {isCondensed && (
                        <SideBarContent hideLogo={hideLogo} isLight={isLight} hideUserProfile={hideUserProfile} />
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default LeftSidebar;
