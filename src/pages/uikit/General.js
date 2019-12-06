// @flow
import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    Badge,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledButtonDropdown,
    Pagination,
    PaginationItem,
    PaginationLink,
    UncontrolledPopover,
    PopoverBody,
    UncontrolledTooltip,
    Progress,
} from 'reactstrap';

import PageTitle from '../../components/PageTitle';

const colors = [
    {
        name: 'Primary',
        color: 'primary',
    },
    {
        name: 'Secondary',
        color: 'secondary',
    },
    {
        name: 'Success',
        color: 'success',
    },
    {
        name: 'Danger',
        color: 'danger',
    },
    {
        name: 'Warning',
        color: 'warning',
    },
    {
        name: 'Info',
        color: 'info',
    },
    {
        name: 'Dark',
        color: 'dark',
    },
    {
        name: 'Light',
        color: 'light',
    },
];

const Badges = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Badges</h4>
                <p className="text-muted font-14 mb-3">
                    Badges scale to match the size of the immediate parent element by using relative font sizing and{' '}
                    <code>em</code> units.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge color={color.color} className="mr-1" key={index}>
                            {color.name}
                        </Badge>
                    );
                })}

                <h6 className="mt-4">Lighten Badges</h6>
                <p className="text-muted font-14 mb-3">
                    Use the <code>*-lighten</code> as value to color attribute to make badges lighten.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge color={color.color + '-lighten'} className="mr-1" key={index}>
                            {color.name}
                        </Badge>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const PillBadges = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Pill Badges</h4>
                <p className="text-muted font-14 mb-2">
                    Use the <code>pill</code> modifier attribute to make badges more rounded.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge color={color.color} pill className="mr-1" key={index}>
                            {color.name}
                        </Badge>
                    );
                })}

                <h6 className="mt-4">Lighten Badges with Pill</h6>
                <p className="text-muted font-14 mb-2">
                    Use the <code>*-lighten</code> as value to color attribute to make badges lighten and{' '}
                    <code>pill</code> modifier attribute to make badges more rounded.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge color={color.color + '-lighten'} pill className="mr-1" key={index}>
                            {color.name}
                        </Badge>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const SingleButtonDropdown = () => {
    return (
        <React.Fragment>
            <p className="mb-1 font-weight-bold">Single button dropdowns</p>

            {/* simple */}
            <UncontrolledButtonDropdown>
                <DropdownToggle color="light" caret>
                    Dropdown
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>

            {/* animated */}
            <UncontrolledButtonDropdown className="ml-5">
                <DropdownToggle color="light" caret>
                    Animated Dropdown
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-animated">
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        </React.Fragment>
    );
};

const ColorVariantButtonDropdown = () => {
    return (
        <React.Fragment>
            <p className="mb-1 mt-3 font-weight-bold">Variant</p>
            <p className="text-muted font-14 mb-3">The best part is you can do this with any button variant, too:</p>

            {colors.map((color, index) => {
                return (
                    <UncontrolledButtonDropdown key={index} className="mr-1">
                        <DropdownToggle caret color={color.color}>
                            {color.name}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                );
            })}

            <p className="mb-1 mt-4 font-weight-bold">Split button dropdowns</p>
            <p className="text-muted font-14 mb-3"></p>

            {colors.map((color, index) => {
                return (
                    <UncontrolledButtonDropdown direction="down" key={index} className="mr-1 mb-1">
                        <Button color={color.color}>{color.name}</Button>
                        <DropdownToggle caret color={color.color}></DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                );
            })}
        </React.Fragment>
    );
};

const VariantButtonDropdowns = () => {
    return (
        <React.Fragment>
            <p className="mb-1 font-weight-bold">Sizing</p>
            <p className="text-muted font-14">
                Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.
            </p>

            <UncontrolledButtonDropdown size="lg" className="mr-2">
                <DropdownToggle color="light" caret>
                    Large
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>

            <UncontrolledButtonDropdown size="sm">
                <DropdownToggle color="light" caret>
                    Small
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            {/* Drop variations */}
            <p className="mb-1 mt-4 font-weight-bold">Drop direction variations</p>
            <UncontrolledButtonDropdown direction="left">
                <DropdownToggle caret>Drop left</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            {'  '}

            <UncontrolledButtonDropdown direction="up">
                <DropdownToggle caret>Dropup</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            {'  '}

            <UncontrolledButtonDropdown direction="right">
                <DropdownToggle caret>Drop right</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>

            {/* Menu alignment */}
            <p className="mb-1 font-weight-bold mt-4">Menu alignment</p>
            <p className="text-muted font-14">
                Add <code>right</code> attribute to a <code>DropdownMenu</code>&nbsp; to right align the dropdown menu.
            </p>

            <UncontrolledButtonDropdown direction="up">
                <DropdownToggle color="light" caret>
                    This dropdown's menu is right-aligned
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        </React.Fragment>
    );
};

const DefaultPagination = () => {
    return (
        <React.Fragment>
            <p className="mb-1 font-weight-bold">Default Pagination</p>
            <p className="text-muted font-14">Simple pagination inspired by Rdio, great for apps and search results.</p>

            <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#" />
                </PaginationItem>
            </Pagination>
        </React.Fragment>
    );
};

const RoundedPagination = () => {
    return (
        <React.Fragment>
            <p className="mb-1 font-weight-bold">Rounded Pagination</p>
            <p className="text-muted font-14">
                Add <code> .pagination-rounded</code> for rounded pagination.
            </p>

            <Pagination aria-label="Page navigation example" className="pagination-rounded">
                <PaginationItem>
                    <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#" />
                </PaginationItem>
            </Pagination>
        </React.Fragment>
    );
};

const Popovers = () => {
    const placements = [
        {
            placement: 'top',
            text: 'Top',
            trigger: 'click',
            color: 'primary',
        },
        {
            placement: 'bottom',
            text: 'Bottom',
            trigger: 'click',
            color: 'primary',
        },
        {
            placement: 'left',
            text: 'Left',
            trigger: 'click',
            color: 'primary',
        },
        {
            placement: 'right',
            text: 'Right',
            trigger: 'click',
            color: 'primary',
        },
        {
            placement: 'right',
            text: 'Dismissible',
            trigger: 'focus',
            color: 'success',
        },
    ];

    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Popovers</h4>
                <p className="text-muted  font-14 mb-3">
                    Add small overlays of content, like those on the iPad, to any element for housing secondary
                    information.
                </p>

                <div className="button-list">
                    {placements.map((popover, i) => {
                        return (
                            <React.Fragment key={i}>
                                <Button className="mr-1" color={popover.color} type="button" id={'btn-' + i}>
                                    {popover.text}
                                </Button>
                                <UncontrolledPopover
                                    placement={popover.placement}
                                    id={i}
                                    target={'btn-' + i}
                                    trigger={popover.trigger}>
                                    <PopoverBody>
                                        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare
                                        sem lacinia quam venenatis vestibulum.
                                    </PopoverBody>
                                </UncontrolledPopover>
                            </React.Fragment>
                        );
                    })}
                </div>
            </CardBody>
        </Card>
    );
};

const Tooltips = () => {
    const placements = [
        {
            placement: 'top',
            text: 'Top',
        },
        {
            placement: 'bottom',
            text: 'Bottom',
        },
        {
            placement: 'left',
            text: 'Left',
        },
        {
            placement: 'right',
            text: 'Right',
        },
    ];

    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Tooltips</h4>
                <p className="text-muted  font-14 mb-3">
                    Four options are available: top, right, bottom, and left aligned.
                </p>

                <div className="button-list">
                    {placements.map((tooltip, i) => {
                        return (
                            <React.Fragment key={i}>
                                <Button className="mr-1" color="info" type="button" id={'tbtn-' + i}>
                                    {tooltip.text}
                                </Button>
                                <UncontrolledTooltip
                                    placement={tooltip.placement}
                                    id={'tooltip-' + i}
                                    target={'tbtn-' + i}>
                                    Tooltip Content!
                                </UncontrolledTooltip>
                            </React.Fragment>
                        );
                    })}
                </div>
            </CardBody>
        </Card>
    );
};

const DefaultProgressbars = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Progress Example</h4>
                <p className="text-muted font-14 mb-3">
                    Progress bars use some of the same button and alert classes for consistent styles.
                </p>

                <Progress value={2 * 5} className="mb-2" />
                <Progress color="success" value="25" className="mb-2" />
                <Progress color="info" value={50} className="mb-2" />
                <Progress color="warning" value={75} className="mb-2" />
                <Progress color="danger" value="100" className="mb-2" />

                <Progress multi className="mb-2">
                    <Progress bar value="15" />
                    <Progress bar color="success" value="30" />
                    <Progress bar color="info" value="25" />
                    <Progress bar color="warning" value="20" />
                    <Progress bar color="danger" value="5" />
                </Progress>

                <Progress striped color="success" value="25" className="mb-2" />
                <Progress animated striped color="danger" value="90" className="mb-2" />

                <Progress value={75} className="mb-2">
                    You're almost there!
                </Progress>
                <Progress color="success" value="100" className="mb-2">
                    You did it!
                </Progress>
            </CardBody>
        </Card>
    );
};

const ProgressbarsSizes = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Progress Example</h4>
                <p className="text-muted font-14 mb-3">
                    Progress bars use some of the same button and alert classes for consistent styles.
                </p>

                <Progress value={2 * 5} className="mb-2 progress-sm" />
                <Progress color="success" value="25" className="mb-2 progress-md" />
                <Progress color="info" value={50} className="mb-2 progress-lg" />
                <Progress color="warning" value={75} className="mb-2 progress-xl" />
            </CardBody>
        </Card>
    );
};

const General = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/general' },
                    { label: 'General', path: '/ui/general', active: true },
                ]}
                title={'General'}
            />

            <Row>
                <Col md={6}>
                    {/* Badges */}
                    <Badges />
                </Col>
                <Col md={6}>
                    <PillBadges />
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Dropdowns</h4>
                            <p className="text-muted font-14 mb-3">
                                Toggle contextual overlays for displaying lists of links and more with the Bootstrap
                                dropdown plugin.
                            </p>

                            <Row>
                                <Col md={6}>
                                    <SingleButtonDropdown />
                                    <ColorVariantButtonDropdown />
                                </Col>
                                <Col md={6}>
                                    <VariantButtonDropdowns />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Pagination</h4>
                            <p className="text-muted font-14 mb-3">
                                Provide pagination links for your site or app with the multi-page pagination component.
                            </p>

                            <Row>
                                <Col md={6}>
                                    <DefaultPagination />
                                </Col>
                                <Col md={6}>
                                    <RoundedPagination />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            {/* pophover and alerts */}
            <Row>
                <Col md={6}>
                    <Popovers />
                </Col>

                {/* tooltip */}
                <Col md={6}>
                    <Tooltips />
                </Col>
            </Row>

            {/* progressbar */}
            <Row>
                <Col md={6}>
                    <DefaultProgressbars />
                </Col>
                <Col md={6}>
                    <ProgressbarsSizes />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default General;
