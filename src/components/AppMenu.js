// @flow
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MetisMenu from 'metismenujs/dist/metismenujs';

import { initMenu, changeActiveMenuFromLocation } from '../redux/actions';

const MenuItemWithChildren = ({ item, linkClassNames, subMenuClassNames, activatedMenuItemIds }) => {
    return (
        <li className={classNames('side-nav-item', { 'active mm-active': activatedMenuItemIds.indexOf(item.id) >= 0 })}>
            <Link
                to="/"
                className={classNames('has-arrow', 'side-sub-nav-link', linkClassNames)}
                aria-expanded={activatedMenuItemIds.indexOf(item.id) >= 0}>
                {item.icon && <i className={item.icon}></i>}
                {item.badge && (
                    <span className={`badge badge-${item.badge.variant} float-right`}>{item.badge.text}</span>
                )}
                <span> {item.name} </span>
            </Link>

            <ul
                className={classNames(subMenuClassNames, {
                    'mm-collapse mm-show': activatedMenuItemIds.indexOf(item.id) >= 0,
                })}
                aria-expanded={activatedMenuItemIds.indexOf(item.id) >= 0}>
                {item.children.map((child, i) => {
                    if (!child.hiddenInNav) {
                        return (
                            <React.Fragment key={i}>
                                {child.children ? (
                                    <MenuItemWithChildren
                                        item={child}
                                        linkClassNames=""
                                        activatedMenuItemIds={activatedMenuItemIds}
                                        subMenuClassNames="side-nav-third-level"
                                    />
                                ) : (
                                    <MenuItem
                                        item={child}
                                        className={classNames({ active: activatedMenuItemIds.indexOf(child.id) >= 0 })}
                                        linkClassName=""
                                    />
                                )}
                            </React.Fragment>
                        );
                    }
                })}
            </ul>
        </li>
    );
};

const MenuItem = ({ item, className, linkClassName }) => {
    return (
        <li className={classNames('side-nav-item', className)}>
            <MenuItemLink item={item} className={linkClassName} />
        </li>
    );
};

const MenuItemLink = ({ item, className }) => {
    return (
        <Link to={item.path} className={classNames('side-nav-link-ref', 'side-sub-nav-link', className)}>
            {item.icon && <i className={item.icon}></i>}
            {item.badge && <span className={`badge badge-${item.badge.variant} float-right`}>{item.badge.text}</span>}
            <span> {item.name} </span>
        </Link>
    );
};

/**
 * Renders the application menu
 */
type Props = {
    initMenu: PropTypes.func,
    changeActiveMenuFromLocation: PropTypes.func,
    menu: PropTypes.object,
    mode: string,
    history: PropTypes.object,
};
class AppMenu extends Component<Props> {
    static defaultProps = {
        mode: 'vertical',
    };

    componentDidMount = () => {
        if (!this.props.menu.menuItems) this.props.initMenu();
        else this.initMenu();

        this.props.history.listen((location, action) => {
            this.props.changeActiveMenuFromLocation();
        });
    };

    componentDidUpdate = prevProps => {
        if (
            !prevProps.menu.menuItems ||
            (prevProps.menu.menuItems && prevProps.menu.menuItems !== this.props.menu.menuItems)
        ) {
            this.initMenu();
        }
    };

    initMenu() {
        if (this.props.mode === 'horizontal') {
            const menuRef = new MetisMenu('#menu-bar').on('shown.metisMenu', function(event) {
                window.addEventListener('click', function menuClick(e) {
                    if (!event.target.contains(e.target)) {
                        menuRef.hide(event.detail.shownElement);
                        window.removeEventListener('click', menuClick);
                    }
                });
            });
        } else {
            new MetisMenu('#menu-bar');
        }
    }

    render() {
        const isHorizontal = this.props.mode === 'horizontal';
        const activatedKeys = isHorizontal ? [] : this.props.menu ? this.props.menu.activatedMenuItemIds : [] || [];

        return (
            <React.Fragment>
                <div className={classNames({ 'topbar-nav': isHorizontal })}>
                    {this.props.menu && this.props.menu.menuItems && (
                        <ul className="metismenu side-nav" id="menu-bar">
                            {this.props.menu.menuItems.map((item, i) => {
                                return (
                                    <React.Fragment key={item.id}>
                                        {item.header && !isHorizontal && (
                                            <li className="side-nav-title side-nav-item" key={i + '-el'}>
                                                {item.header}
                                            </li>
                                        )}

                                        {item.children ? (
                                            <MenuItemWithChildren
                                                item={item}
                                                subMenuClassNames="side-nav-second-level"
                                                activatedMenuItemIds={activatedKeys}
                                                linkClassNames="side-nav-link"
                                            />
                                        ) : (
                                            <MenuItem
                                                item={item}
                                                className={classNames({ active: activatedKeys.indexOf(item.id) >= 0 })}
                                                linkClassName="side-nav-link"
                                            />
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        menu: state.AppMenu,
    };
};
export default withRouter(
    connect(
        mapStateToProps,
        { initMenu, changeActiveMenuFromLocation }
    )(AppMenu)
);
