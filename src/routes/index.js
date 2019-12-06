import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { isUserAuthenticated, getLoggedInUser } from '../helpers/authUtils';

// lazy load all the views

// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));

// campaigns
const CreateCampaign = React.lazy(() => import('../pages/campaigns/Create'));
const ViewCampaigns = React.lazy(() => import('../pages/campaigns/View'));
const EditCampaign = React.lazy(() => import('../pages/campaigns/Edit'));

// offers
const ViewOffers = React.lazy(() => import('../pages/offers/ViewOffers'));

// errors
const ErrorPageNotFound = React.lazy(() => import('../pages/error/PageNotFound'));
const ServerError = React.lazy(() => import('../pages/error/ServerError'));

// handle auth and authorization

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!isUserAuthenticated()) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />;
            }

            const loggedInUser = getLoggedInUser();
            // check if route is restricted by role
            if (roles && roles.indexOf(loggedInUser.role) === -1) {
                // role not authorised so redirect to home page
                return <Redirect to={{ pathname: '/' }} />;
            }

            // authorised so return component
            return <Component {...props} />;
        }}
    />
);

// root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/campaigns/view" />,
    route: PrivateRoute,
};

// campaigns
const campaignRoutes = {
    path: '/campaigns',
    name: 'Campaigns',
    icon: 'dripicons-rocket',
    header: 'Navigation',
    children: [
        {
            path: '/campaigns/view',
            name: 'View Campaigns',
            component: ViewCampaigns,
            route: PrivateRoute,
        },
        {
            path: '/campaigns/create',
            name: 'Create Campaign',
            component: CreateCampaign,
            route: PrivateRoute,
        },
        {
            path: '/campaigns/edit/:campaignID',
            name: 'Edit Campaign',
            component: EditCampaign,
            route: PrivateRoute,
            hiddenInNav: true
        },
    ],
};

// offers
const offerRoutes = {
    path: '/offers',
    name: 'Offers',
    icon: 'dripicons-cart',
    children: [
        {
            path: '/offers/view',
            name: 'View Offers',
            component: ViewOffers,
            route: PrivateRoute,
        },
    ],
};

// auth
const authRoutes = {
    path: '/account',
    name: 'Auth',
    children: [
        {
            path: '/account/login',
            name: 'Login',
            component: Login,
            route: Route,
        },
        {
            path: '/account/logout',
            name: 'Logout',
            component: Logout,
            route: Route,
        },
        {
            path: '/account/register',
            name: 'Register',
            component: Register,
            route: Route,
        },
        {
            path: '/account/confirm',
            name: 'Confirm',
            component: Confirm,
            route: Route,
        },
        {
            path: '/account/forget-password',
            name: 'Forget Password',
            component: ForgetPassword,
            route: Route,
        },
    ],
};

// flatten the list of all nested routes
const flattenRoutes = routes => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach(item => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes
const allRoutes = [
    rootRoute,
    campaignRoutes,
    offerRoutes,
    authRoutes,
];

const authProtectedRoutes = [campaignRoutes, offerRoutes];

const allFlattenRoutes = flattenRoutes(allRoutes);

export { allRoutes, authProtectedRoutes, allFlattenRoutes };
