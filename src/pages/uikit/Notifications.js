// @flow
import React from 'react';
import { Row, Col, Card, CardBody, Toast, ToastBody, ToastHeader, Alert, UncontrolledAlert } from 'reactstrap';
import classNames from 'classnames';

import logo from '../../assets/images/logo_sm_dark.png';
import PageTitle from '../../components/PageTitle';

const Toasts = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Bootstrap Toasts</h4>
                <p className="text-muted font-14">
                    Push notifications to your visitors with a toast, a lightweight and easily customizable alert
                    message.
                </p>

                <Row>
                    <Col md={6}>
                        <h5 className="mb-2">Basic</h5>
                        <p className="text-muted font-14">
                            Toasts are as flexible as you need and have very little required markup. At a minimum, we
                            require a single element to contain your “toasted” content and strongly encourage a dismiss
                            button.
                        </p>
                        <div className="p-3">
                            <Toast>
                                <ToastHeader>
                                    <img src={logo} alt="brand-logo" height="12" className="mr-1" />
                                    <strong className="mr-auto">Hyper</strong>
                                    <small className="ml-5">11 mins ago</small>
                                </ToastHeader>
                                <ToastBody>Hello, world! This is a toast message.</ToastBody>
                            </Toast>
                        </div>
                    </Col>

                    <Col md={6}>
                        <h4 className="header-title">Translucent</h4>
                        <p className="text-muted font-14">
                            Toasts are slightly translucent, too, so they blend over whatever they might appear over.
                            For browsers that support the backdrop-filter CSS property, we’ll also attempt to blur the
                            elements under a toast.
                        </p>

                        <div className="p-3 bg-secondary">
                            <Toast>
                                <ToastHeader>
                                    <img src={logo} alt="brand-logo" height="12" className="mr-1" />
                                    <strong className="mr-auto">Hyper</strong>
                                    <small className="ml-5">11 mins ago</small>
                                </ToastHeader>
                                <ToastBody>Hello, world! This is a toast message.</ToastBody>
                            </Toast>
                        </div>
                    </Col>
                </Row>

                {/* stacked */}
                <Row>
                    <Col md={6}>
                        <h5 className="mb-2">Stacking</h5>
                        <p className="text-muted font-14">
                            When you have multiple toasts, we default to vertiaclly stacking them in a readable manner.
                        </p>
                        <div className="p-3">
                            <div
                                aria-live="polite"
                                aria-atomic="true"
                                style={{ position: 'relative', minHeight: '200px' }}>
                                <div style={{ position: 'absolute', top: 0, right: 0 }}>
                                    <Toast>
                                        <ToastHeader>
                                            <img src={logo} alt="brand-logo" height="12" className="mr-1" />
                                            <strong className="mr-auto">Hyper</strong>
                                            <small className="ml-5">11 mins ago</small>
                                        </ToastHeader>
                                        <ToastBody>See? Just like this.</ToastBody>
                                    </Toast>

                                    <Toast>
                                        <ToastHeader>
                                            <img src={logo} alt="brand-logo" height="12" className="mr-1" />
                                            <strong className="mr-auto">Hyper</strong>
                                            <small className="ml-5">1 mins ago</small>
                                        </ToastHeader>
                                        <ToastBody>Heads up, toasts will stack automatically</ToastBody>
                                    </Toast>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={6}>
                        <h5 className="mb-2">Placement</h5>
                        <p className="text-muted font-14">
                            Place toasts with custom CSS as you need them. The top right is often used for
                            notifications, as is the top middle. If you’re only ever going to show one toast at a time,
                            put the positioning styles right on the <code>.toast</code>.
                        </p>

                        <div className="p-3">
                            <div
                                aria-live="polite"
                                aria-atomic="true"
                                className="d-flex justify-content-center align-items-center"
                                style={{ minHeight: '200px' }}>
                                <Toast>
                                    <ToastHeader>
                                        <img src={logo} alt="brand-logo" height="12" className="mr-1" />
                                        <strong className="mr-auto">Hyper</strong>
                                        <small className="ml-5">1 mins ago</small>
                                    </ToastHeader>
                                    <ToastBody>Heads up, toasts will stack automatically</ToastBody>
                                </Toast>
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const DefaultAlerts = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Default Alert</h4>
                <p className="text-muted font-14">
                    Alerts are available for any length of text, as well as an optional dismiss button. Just use{' '}
                    <code>Alert</code>
                </p>

                {colors.map((color, index) => {
                    return (
                        <Alert color={color} key={index}>
                            <strong>{color} - </strong> A simple {color} alert—check it out!
                        </Alert>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const DismissibleAlerts = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Dismissing Alert</h4>
                <p className="text-muted font-14">
                    Alerts are available for any length of text, as well as an optional dismiss button. Just use{' '}
                    <code>UncontrolledAlert</code>
                </p>

                {colors.map((color, index) => {
                    return (
                        <UncontrolledAlert color={color} key={index}>
                            <strong>{color} - </strong> A simple {color} alert—check it out!
                        </UncontrolledAlert>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const AlertsWithIcon = () => {
    const icons = [
        'dripicons-checkmark',
        'dripicons-checkmark',
        'dripicons-checkmark',
        'dripicons-wrong',
        'dripicons-warning',
        'dripicons-information',
        'dripicons-checkmark',
        'dripicons-checkmark',
    ];

    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Alerts with Icon</h4>
                <p className="text-muted font-14">Display alert with icon on left.</p>

                {colors.map((color, index) => {
                    return (
                        <UncontrolledAlert color={color} key={index}>
                            <i className={classNames(icons[index], 'mr-2')}></i> <strong>{color} - </strong> A simple{' '}
                            {color} alert—check it out!
                        </UncontrolledAlert>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const AlertsWithRichContent = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Additional content</h4>
                <p className="text-muted font-14">
                    Alerts can also contain additional HTML elements like headings, paragraphs and dividers.
                </p>

                <Alert color="success">
                    <h4 className="alert-heading">Well done!</h4>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example text is going to run
                        a bit longer so that you can see how spacing within an alert works with this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                    </p>
                </Alert>
            </CardBody>
        </Card>
    );
};

const Notifications = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/notifications' },
                    { label: 'Notifications', path: '/ui/notifications', active: true },
                ]}
                title={'Notifications'}
            />

            {/* toast */}
            <Row>
                <Col>
                    <Toasts />
                </Col>
            </Row>

            {/* Alert */}
            <Row>
                <Col md={6}>
                    <DefaultAlerts />
                </Col>

                <Col md={6}>
                    <DismissibleAlerts />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <AlertsWithIcon />
                </Col>

                <Col md={6}>
                    <AlertsWithRichContent />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Notifications;
