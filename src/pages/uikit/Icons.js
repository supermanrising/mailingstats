import React, { Component } from 'react';
import { Row, Col, Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import PageTitle from '../../components/PageTitle';

class Icons extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
        };
    }

    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    };

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: 'UI', path: '/ui/icons' },
                        { label: 'Grid', path: '/ui/icons', active: true },
                    ]}
                    title={'Icons'}
                />

                <Row>
                    <Col>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    href="#"
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => {
                                        this.toggle('1');
                                    }}>
                                    <h5 className="pl-2 pr-2">Material Design</h5>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="#"
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => {
                                        this.toggle('2');
                                    }}>
                                    <h5 className="pl-2 pr-2">Dripicons</h5>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Card>
                                    <CardBody>
                                        <Row className="icons-list-demo">
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eye-check"></i> mdi mdi-eye-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eye-check-outline"></i> mdi mdi-eye-check-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-list-numbered-rtl"></i> mdi
                                                mdi-format-list-numbered-rtl
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tortoise "></i> mdi mdi-tortoise
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bread-slice"></i> mdi mdi-bread-slice
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bread-slice-outline"></i> mdi
                                                mdi-bread-slice-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fountain-pen"></i> mdi mdi-fountain-pen
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fountain-pen-tip"></i> mdi mdi-fountain-pen-tip
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-up-circle"></i> mdi mdi-arrow-up-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-up-circle-outline"></i> mdi
                                                mdi-arrow-up-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-right-circle"></i> mdi
                                                mdi-arrow-right-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-right-circle-outline"></i> mdi
                                                mdi-arrow-right-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-down-circle"></i> mdi mdi-arrow-down-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-down-circle-outline"></i> mdi
                                                mdi-arrow-down-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left-circle"></i> mdi mdi-arrow-left-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left-circle-outline"></i> mdi
                                                mdi-arrow-left-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-quora"></i> mdi mdi-quora
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-text-wrapping-clip"></i> mdi
                                                mdi-format-text-wrapping-clip
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-text-wrapping-overflow"></i> mdi
                                                mdi-format-text-wrapping-overflow
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-text-wrapping-wrap"></i> mdi
                                                mdi-format-text-wrapping-wrap
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-textbox"></i> mdi mdi-format-textbox
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-merge-cells"></i> mdi mdi-table-merge-cells
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart-broken-outline"></i> mdi
                                                mdi-heart-broken-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dishwasher"></i> mdi mdi-dishwasher
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-r-box-outline"></i> mdi
                                                mdi-alpha-r-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-artist-outline"></i> mdi mdi-artist-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-artist"></i> mdi mdi-artist
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flower-poppy"></i> mdi mdi-flower-poppy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flickr "></i> mdi mdi-flickr
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fedora "></i> mdi mdi-fedora
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-sync"></i> mdi mdi-folder-sync
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-sync-outline"></i> mdi
                                                mdi-folder-sync-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tank"></i> mdi mdi-tank
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bullet "></i> mdi mdi-bullet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ammunition "></i> mdi mdi-ammunition
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-safety-goggles"></i> mdi mdi-safety-goggles
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-account"></i> mdi mdi-briefcase-account
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-account-outline"></i> mdi
                                                mdi-briefcase-account-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-transit-connection"></i> mdi
                                                mdi-transit-connection
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-transit-connection-variant"></i> mdi
                                                mdi-transit-connection-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-stamper "></i> mdi mdi-stamper
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sack "></i> mdi mdi-sack
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sack-percent"></i> mdi mdi-sack-percent
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-blood-bag"></i> mdi mdi-blood-bag
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-clock"></i> mdi mdi-map-clock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-clock-outline"></i> mdi mdi-map-clock-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email-box"></i> mdi mdi-email-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-link-box-variant"></i> mdi mdi-link-box-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-link-box"></i> mdi mdi-link-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-link-box-variant-outline"></i> mdi
                                                mdi-link-box-variant-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-link-box-outline"></i> mdi mdi-link-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-podium"></i> mdi mdi-podium
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-podium-bronze"></i> mdi mdi-podium-bronze
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-podium-gold"></i> mdi mdi-podium-gold
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-podium-silver"></i> mdi mdi-podium-silver
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weight-gram"></i> mdi mdi-weight-gram
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-drama-masks"></i> mdi mdi-drama-masks
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-skew-less"></i> mdi mdi-skew-less
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-skew-more"></i> mdi mdi-skew-more
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-perspective-less"></i> mdi mdi-perspective-less
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-perspective-more"></i> mdi mdi-perspective-more
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-select-color"></i> mdi mdi-select-color
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-selection-ellipse"></i> mdi mdi-selection-ellipse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-speaker-multiple"></i> mdi mdi-speaker-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hubspot"></i> mdi mdi-hubspot
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-library-movie"></i> mdi mdi-library-movie
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-library-video"></i> mdi mdi-library-video
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-youtube-subscription"></i> mdi
                                                mdi-youtube-subscription
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-database-refresh"></i> mdi mdi-database-refresh
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-database-settings"></i> mdi mdi-database-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-database-remove"></i> mdi mdi-database-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-brightness-percent"></i> mdi
                                                mdi-brightness-percent
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zigbee"></i> mdi mdi-zigbee
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-city"></i> mdi mdi-home-city
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-city-outline"></i> mdi mdi-home-city-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cursor-default-click"></i> mdi
                                                mdi-cursor-default-click
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cursor-default-click-outline"></i> mdi
                                                mdi-cursor-default-click-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fast-forward-30"></i> mdi mdi-fast-forward-30
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rewind-10"></i> mdi mdi-rewind-10
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-link-variant"></i> mdi
                                                mdi-shield-link-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-link-variant-outline"></i> mdi
                                                mdi-shield-link-variant-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cash-register"></i> mdi mdi-cash-register
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-outlook "></i> mdi mdi-outlook
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ruby "></i> mdi mdi-ruby
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-arrow-left-outline"></i> mdi
                                                mdi-clipboard-arrow-left-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-arrow-right-outline"></i> mdi
                                                mdi-clipboard-arrow-right-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-arrow-right"></i> mdi
                                                mdi-clipboard-arrow-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-alert-outline"></i> mdi
                                                mdi-clipboard-alert-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-skate "></i> mdi mdi-skate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-roller-skate"></i> mdi mdi-roller-skate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rollerblade"></i> mdi mdi-rollerblade
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-transmission-tower"></i> mdi
                                                mdi-transmission-tower
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mother-nurse"></i> mdi mdi-mother-nurse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alert-decagram-outline"></i> mdi
                                                mdi-alert-decagram-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alert-box-outline"></i> mdi mdi-alert-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alert-octagon-outline"></i> mdi
                                                mdi-alert-octagon-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alert-octagram-outline"></i> mdi
                                                mdi-alert-octagram-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-pound"></i> mdi mdi-folder-pound
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-pound-outline"></i> mdi
                                                mdi-folder-pound-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-christianity-outline"></i> mdi
                                                mdi-christianity-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-celtic-cross"></i> mdi mdi-celtic-cross
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bolnisi-cross"></i> mdi mdi-bolnisi-cross
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-marker-path"></i> mdi mdi-map-marker-path
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-content-save-edit"></i> mdi mdi-content-save-edit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-content-save-edit-outline"></i> mdi
                                                mdi-content-save-edit-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-go-kart"></i> mdi mdi-go-kart
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-go-kart-track"></i> mdi mdi-go-kart-track
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flare"></i> mdi mdi-flare
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-grain"></i> mdi mdi-grain
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture-tap-hold"></i> mdi mdi-gesture-tap-hold
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hdr"></i> mdi mdi-hdr
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hdr-off"></i> mdi mdi-hdr-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trophy-broken"></i> mdi mdi-trophy-broken
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-goodreads"></i> mdi mdi-goodreads
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-brake-alert"></i> mdi mdi-car-brake-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wiper-wash"></i> mdi mdi-wiper-wash
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-brake-hold"></i> mdi mdi-car-brake-hold
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-traction-control"></i> mdi
                                                mdi-car-traction-control
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-parking-lights"></i> mdi
                                                mdi-car-parking-lights
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-defrost-front"></i> mdi mdi-car-defrost-front
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-defrost-rear"></i> mdi mdi-car-defrost-rear
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-cruise-control"></i> mdi
                                                mdi-car-cruise-control
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-contactless-payment"></i> mdi
                                                mdi-contactless-payment
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-credit-card-wireless"></i> mdi
                                                mdi-credit-card-wireless
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rewind-30"></i> mdi mdi-rewind-30
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fast-forward-10"></i> mdi mdi-fast-forward-10
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-racquetball"></i> mdi mdi-racquetball
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tea "></i> mdi mdi-tea
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tea-outline"></i> mdi mdi-tea-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-forwardburger"></i> mdi mdi-forwardburger
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-restart-off"></i> mdi mdi-restart-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis"></i> mdi mdi-axis
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-arrow"></i> mdi mdi-axis-arrow
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-x-arrow"></i> mdi mdi-axis-x-arrow
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-y-arrow"></i> mdi mdi-axis-y-arrow
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-z-arrow"></i> mdi mdi-axis-z-arrow
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-z-arrow-lock"></i> mdi mdi-axis-z-arrow-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-lock"></i> mdi mdi-axis-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-arrow-lock"></i> mdi mdi-axis-arrow-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-x-y-arrow-lock"></i> mdi
                                                mdi-axis-x-y-arrow-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-x-arrow-lock"></i> mdi mdi-axis-x-arrow-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-y-arrow-lock"></i> mdi mdi-axis-y-arrow-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rotate-orbit"></i> mdi mdi-rotate-orbit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-z-rotate-counterclockwise"></i> mdi
                                                mdi-axis-z-rotate-counterclockwise
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-z-rotate-clockwise"></i> mdi
                                                mdi-axis-z-rotate-clockwise
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-room-service-outline"></i> mdi
                                                mdi-room-service-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-x-rotate-clockwise"></i> mdi
                                                mdi-axis-x-rotate-clockwise
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-x-rotate-counterclockwise"></i> mdi
                                                mdi-axis-x-rotate-counterclockwise
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-y-rotate-clockwise"></i> mdi
                                                mdi-axis-y-rotate-clockwise
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axis-y-rotate-counterclockwise"></i> mdi
                                                mdi-axis-y-rotate-counterclockwise
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-face-agent"></i> mdi mdi-face-agent
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mailbox-open"></i> mdi mdi-mailbox-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mailbox-open-outline"></i> mdi
                                                mdi-mailbox-open-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mailbox-open-up"></i> mdi mdi-mailbox-open-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mailbox-outline"></i> mdi mdi-mailbox-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mailbox-up-outline"></i> mdi
                                                mdi-mailbox-up-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mailbox-open-up-outline"></i> mdi
                                                mdi-mailbox-open-up-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mailbox-up "></i> mdi mdi-mailbox-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-outline"></i> mdi mdi-camera-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-classroom"></i> mdi mdi-google-classroom
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-android-messages"></i> mdi mdi-android-messages
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-minus"></i> mdi mdi-calendar-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cart-arrow-down"></i> mdi mdi-cart-arrow-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cart-arrow-up"></i> mdi mdi-cart-arrow-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cart-minus"></i> mdi mdi-cart-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cart-remove"></i> mdi mdi-cart-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-solar-panel"></i> mdi mdi-solar-panel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-solar-panel-large"></i> mdi mdi-solar-panel-large
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-air-filter"></i> mdi mdi-air-filter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-motion-sensor"></i> mdi mdi-motion-sensor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-air-purifier"></i> mdi mdi-air-purifier
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wind-turbine"></i> mdi mdi-wind-turbine
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-creative-commons"></i> mdi mdi-creative-commons
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-adchoices"></i> mdi mdi-adchoices
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-apps-box"></i> mdi mdi-apps-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-transfer-right"></i> mdi mdi-transfertennis-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-transfer-down"></i> mdi mdi-transfer-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-transfer-left"></i> mdi mdi-transfer-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-transfer-up"></i> mdi mdi-transfer-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-atm "></i> mdi mdi-atm
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-point-of-sale"></i> mdi mdi-point-of-sale
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-racing-helmet"></i> mdi mdi-racing-helmet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gif "></i> mdi mdi-gif
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hiking "></i> mdi mdi-hiking
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-carry-on-bag-check"></i> mdi
                                                mdi-carry-on-bag-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-search"></i> mdi mdi-shield-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-subway-alert-variant"></i> mdi
                                                mdi-subway-alert-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rugby "></i> mdi mdi-rugby
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mixed-martial-arts"></i> mdi
                                                mdi-mixed-martial-arts
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cricket "></i> mdi mdi-cricket
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-monitor-off"></i> mdi mdi-monitor-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-kabaddi "></i> mdi mdi-kabaddi
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-domain-off"></i> mdi mdi-domain-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bell-alert"></i> mdi mdi-bell-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bell-circle"></i> mdi mdi-bell-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bell-circle-outline"></i> mdi
                                                mdi-bell-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dev-to"></i> mdi mdi-dev-to
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-text-rotation-none"></i> mdi
                                                mdi-format-text-rotation-none
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-text-rotation-down"></i> mdi
                                                mdi-format-text-rotation-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture-swipe"></i> mdi mdi-gesture-swipe
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-floor-1"></i> mdi mdi-home-floor-1
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-floor-2"></i> mdi mdi-home-floor-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-floor-a"></i> mdi mdi-home-floor-a
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-floor-b"></i> mdi mdi-home-floor-b
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-floor-a"></i> mdi mdi-home-floor-a
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-floor-b"></i> mdi mdi-home-floor-b
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-floor-g"></i> mdi mdi-home-floor-g
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-floor-l"></i> mdi mdi-home-floor-l
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-floor-3"></i> mdi mdi-home-floor-3
                                            </div>

                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-turtle"></i> mdi mdi-turtle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-face-recognition"></i> mdi mdi-face-recognition
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-postage-stamp"></i> mdi mdi-postage-stamp
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-adwords"></i> mdi mdi-google-adwords
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-street-view"></i> mdi
                                                mdi-google-street-view
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sort-variant-lock-open"></i> mdi
                                                mdi-sort-variant-lock-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sort-variant-lock"></i> mdi mdi-sort-variant-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-devil"></i> mdi mdi-emoticon-devil
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-dead"></i> mdi mdi-emoticon-dead
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon"></i> mdi mdi-emoticon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-excited"></i> mdi mdi-emoticon-excited
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-cool"></i> mdi mdi-emoticon-cool
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-neutral"></i> mdi mdi-emoticon-neutral
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-poop-outline"></i> mdi
                                                mdi-emoticon-poop-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-sad"></i> mdi mdi-emoticon-sad
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-happy"></i> mdi mdi-emoticon-happy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-tongue"></i> mdi mdi-emoticon-tongue
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-tongue-outline"></i> mdi
                                                mdi-emoticon-tongue-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-cry-outline"></i> mdi
                                                mdi-emoticon-cry-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-cry"></i> mdi mdi-emoticon-cry
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-kiss-outline"></i> mdi
                                                mdi-emoticon-kiss-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-kiss"></i> mdi mdi-emoticon-kiss
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-wink-outline"></i> mdi
                                                mdi-emoticon-wink-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-wink"></i> mdi mdi-emoticon-wink
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-angry-outline"></i> mdi
                                                mdi-emoticon-angry-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-angry"></i> mdi mdi-emoticon-angry
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sheep"></i> mdi mdi-sheep
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-source-repository-multiple"></i> mdi
                                                mdi-source-repository-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-source-repository"></i> mdi mdi-source-repository
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cart-arrow-right"></i> mdi mdi-cart-arrow-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-radio-am"></i> mdi mdi-radio-am
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-radio-fm"></i> mdi mdi-radio-fm
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dump-truck"></i> mdi mdi-dump-truck
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-airbag"></i> mdi mdi-airbag
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-seatbelt"></i> mdi mdi-seatbelt
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-account-outline"></i> mdi
                                                mdi-clipboard-account-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-arrow-down-outline"></i> mdi
                                                mdi-clipboard-arrow-down-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-arrow-up-outline"></i> mdi
                                                mdi-clipboard-arrow-up-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-arrow-up"></i> mdi
                                                mdi-clipboard-arrow-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hazard-lights"></i> mdi mdi-hazard-lights
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-esp"></i> mdi mdi-car-esp
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-brake-parking"></i> mdi mdi-car-brake-parking
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-brake-abs"></i> mdi mdi-car-brake-abs
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-tire-alert"></i> mdi mdi-car-tire-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-search-outline"></i> mdi
                                                mdi-file-search-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-search"></i> mdi mdi-file-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-light-high"></i> mdi mdi-car-light-high
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-light-fog"></i> mdi mdi-car-light-fog
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-light-dimmed"></i> mdi mdi-car-light-dimmed
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-close-box-multiple-outline"></i> mdi
                                                mdi-close-box-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-close-box-multiple"></i> mdi
                                                mdi-close-box-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-cross-outline"></i> mdi
                                                mdi-shield-cross-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-cross"></i> mdi mdi-shield-cross
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-link-off"></i> mdi mdi-link-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-link"></i> mdi mdi-link
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-search-outline"></i> mdi
                                                mdi-briefcase-search-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-download-outline"></i> mdi
                                                mdi-briefcase-download-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-upload-outline"></i> mdi
                                                mdi-briefcase-upload-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-edit-outline"></i> mdi
                                                mdi-briefcase-edit-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-remove-outline"></i> mdi
                                                mdi-briefcase-remove-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-plus-outline"></i> mdi
                                                mdi-briefcase-plus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-minus-outline"></i> mdi
                                                mdi-briefcase-minus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-link-plus"></i> mdi mdi-link-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-food-apple-outline"></i> mdi
                                                mdi-food-apple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-spa-outline"></i> mdi mdi-spa-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-spa"></i> mdi mdi-spa
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-size-select-small"></i> mdi
                                                mdi-image-size-select-small
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-size-select-large"></i> mdi
                                                mdi-image-size-select-large
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-size-select-actual"></i> mdi
                                                mdi-image-size-select-actual
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-9-plus-circle-outline"></i> mdi
                                                mdi-numeric-9-plus-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-9-plus-circle"></i> mdi
                                                mdi-numeric-9-plus-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-9-circle-outline"></i> mdi
                                                mdi-numeric-9-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-9-circle"></i> mdi mdi-numeric-9-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-8-circle-outline"></i> mdi
                                                mdi-numeric-8-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-8-circle"></i> mdi mdi-numeric-8-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-7-circle-outline"></i> mdi
                                                mdi-numeric-7-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-7-circle"></i> mdi mdi-numeric-7-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-6-circle-outline"></i> mdi
                                                mdi-numeric-6-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-6-circle"></i> mdi mdi-numeric-6-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-5-circle-outline"></i> mdi
                                                mdi-numeric-5-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-5-circle"></i> mdi mdi-numeric-5-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-4-circle-outline"></i> mdi
                                                mdi-numeric-4-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-4-circle"></i> mdi mdi-numeric-4-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-3-circle-outline"></i> mdi
                                                mdi-numeric-3-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-3-circle"></i> mdi mdi-numeric-3-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-2-circle-outline"></i> mdi
                                                mdi-numeric-2-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-2-circle"></i> mdi mdi-numeric-2-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-1-circle-outline"></i> mdi
                                                mdi-numeric-1-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-1-circle"></i> mdi mdi-numeric-1-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-0-circle-outline"></i> mdi
                                                mdi-numeric-0-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-0-circle"></i> mdi mdi-numeric-0-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-z-circle-outline"></i> mdi
                                                mdi-alpha-z-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-z-circle"></i> mdi mdi-alpha-z-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-z-box-outline"></i> mdi
                                                mdi-alpha-z-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-y-circle-outline"></i> mdi
                                                mdi-alpha-y-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-y-circle"></i> mdi mdi-alpha-y-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-y-box-outline"></i> mdi
                                                mdi-alpha-y-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-x-circle-outline"></i> mdi
                                                mdi-alpha-x-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-x-circle"></i> mdi mdi-alpha-x-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-x-box-outline"></i> mdi
                                                mdi-alpha-x-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-w-circle-outline"></i> mdi
                                                mdi-alpha-w-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-w-circle"></i> mdi mdi-alpha-w-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-w-box-outline"></i> mdi
                                                mdi-alpha-w-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-v-circle-outline"></i> mdi
                                                mdi-alpha-v-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-v-circle"></i> mdi mdi-alpha-v-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-v-box-outline"></i> mdi
                                                mdi-alpha-v-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-u-circle-outline"></i> mdi
                                                mdi-alpha-u-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-u-circle"></i> mdi mdi-alpha-u-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-u-box-outline"></i> mdi
                                                mdi-alpha-u-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-t-circle-outline"></i> mdi
                                                mdi-alpha-t-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-t-circle"></i> mdi mdi-alpha-t-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-t-box-outline"></i> mdi
                                                mdi-alpha-t-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-s-circle-outline"></i> mdi
                                                mdi-alpha-s-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-s-circle"></i> mdi mdi-alpha-s-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-s-box-outline"></i> mdi
                                                mdi-alpha-s-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-r-circle-outline"></i> mdi
                                                mdi-alpha-r-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-r-circle"></i> mdi mdi-alpha-r-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-r-box-outline"></i> mdi
                                                mdi-alpha-r-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-q-circle-outline"></i> mdi
                                                mdi-alpha-q-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-q-circle"></i> mdi mdi-alpha-q-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-q-box-outline"></i> mdi
                                                mdi-alpha-q-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-p-circle-outline"></i> mdi
                                                mdi-alpha-p-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-p-circle"></i> mdi mdi-alpha-p-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-p-box-outline"></i> mdi
                                                mdi-alpha-p-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-o-circle-outline"></i> mdi
                                                mdi-alpha-o-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-o-circle"></i> mdi mdi-alpha-o-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-o-box-outline"></i> mdi
                                                mdi-alpha-o-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-n-circle-outline"></i> mdi
                                                mdi-alpha-n-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-n-circle"></i> mdi mdi-alpha-n-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-n-box-outline"></i> mdi
                                                mdi-alpha-n-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-m-circle-outline"></i> mdi
                                                mdi-alpha-m-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-m-circle"></i> mdi mdi-alpha-m-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-m-box-outline"></i> mdi
                                                mdi-alpha-m-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-l-circle-outline"></i> mdi
                                                mdi-alpha-l-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-l-circle"></i> mdi mdi-alpha-l-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-l-box-outline"></i> mdi
                                                mdi-alpha-l-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-k-circle-outline"></i> mdi
                                                mdi-alpha-k-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-k-circle"></i> mdi mdi-alpha-k-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-k-box-outline"></i> mdi
                                                mdi-alpha-k-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-j-circle-outline"></i> mdi
                                                mdi-alpha-j-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-j-circle"></i> mdi mdi-alpha-j-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-j-box-outline"></i> mdi
                                                mdi-alpha-j-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-i-circle-outline"></i> mdi
                                                mdi-alpha-i-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-i-circle"></i> mdi mdi-alpha-i-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-i-box-outline"></i> mdi
                                                mdi-alpha-i-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-h-circle-outline"></i> mdi
                                                mdi-alpha-h-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-h-circle"></i> mdi mdi-alpha-h-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-h-box-outline"></i> mdi
                                                mdi-alpha-h-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-g-circle-outline"></i> mdi
                                                mdi-alpha-g-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-g-circle"></i> mdi mdi-alpha-g-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-g-box-outline"></i> mdi
                                                mdi-alpha-g-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-f-circle-outline"></i> mdi
                                                mdi-alpha-f-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-f-circle"></i> mdi mdi-alpha-f-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-f-box-outline"></i> mdi
                                                mdi-alpha-f-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-e-circle-outline"></i> mdi
                                                mdi-alpha-e-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-e-circle"></i> mdi mdi-alpha-e-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-e-box-outline"></i> mdi
                                                mdi-alpha-e-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-d-circle-outline"></i> mdi
                                                mdi-alpha-d-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-d-circle"></i> mdi mdi-alpha-d-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-d-box-outline"></i> mdi
                                                mdi-alpha-d-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-c-circle-outline"></i> mdi
                                                mdi-alpha-c-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-c-circle"></i> mdi mdi-alpha-c-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-c-box-outline"></i> mdi
                                                mdi-alpha-c-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-b-circle-outline"></i> mdi
                                                mdi-alpha-b-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-b-circle"></i> mdi mdi-alpha-b-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-b-box-outline"></i> mdi
                                                mdi-alpha-b-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-a-circle-outline"></i> mdi
                                                mdi-alpha-a-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-a-circle"></i> mdi mdi-alpha-a-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-a-box-outline"></i> mdi
                                                mdi-alpha-a-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-logout"></i> mdi mdi-logout
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-login"></i> mdi mdi-login
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-progress-wrench"></i> mdi mdi-progress-wrench
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-truck-check"></i> mdi mdi-truck-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-multiple-plus-outline"></i> mdi
                                                mdi-account-multiple-plus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-multiple-outline"></i> mdi
                                                mdi-account-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-check-box-outline"></i> mdi mdi-check-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-check-box-multiple-outline"></i> mdi
                                                mdi-check-box-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fuse-blade"></i> mdi mdi-fuse-blade
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fuse"></i> mdi mdi-fuse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alarm-light-outline"></i> mdi
                                                mdi-alarm-light-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pencil-outline"></i> mdi mdi-pencil-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-check-network-outline"></i> mdi
                                                mdi-check-network-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network-off-outline"></i> mdi
                                                mdi-network-off-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network-off"></i> mdi mdi-network-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-check-network"></i> mdi mdi-check-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-basketball-hoop-outline"></i> mdi
                                                mdi-basketball-hoop-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-basketball-hoop"></i> mdi mdi-basketball-hoop
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-close-network-outline"></i> mdi
                                                mdi-close-network-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-heart-outline"></i> mdi
                                                mdi-account-heart-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-key-outline"></i> mdi
                                                mdi-account-key-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-star-outline"></i> mdi
                                                mdi-account-star-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tooltip-account"></i> mdi mdi-tooltip-account
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-server-network-off"></i> mdi
                                                mdi-server-network-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-server-network"></i> mdi mdi-server-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-security-network"></i> mdi mdi-security-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ip-network"></i> mdi mdi-ip-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-network"></i> mdi mdi-folder-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-key-network"></i> mdi
                                                mdi-folder-key-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-console-network"></i> mdi mdi-console-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-network"></i> mdi mdi-account-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-access-point-network"></i> mdi
                                                mdi-access-point-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-iframe-outline"></i> mdi mdi-iframe-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-iframe"></i> mdi mdi-iframe
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ruler-square"></i> mdi mdi-ruler-square
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-text-outline"></i> mdi
                                                mdi-folder-text-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-text"></i> mdi mdi-folder-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ballot-recount"></i> mdi mdi-ballot-recount
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ballot-recount-outline"></i> mdi
                                                mdi-ballot-recount-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-home-outline"></i> mdi
                                                mdi-shield-home-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-lock-outline"></i> mdi
                                                mdi-shield-lock-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-airplane-outline"></i> mdi
                                                mdi-shield-airplane-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-check-outline"></i> mdi
                                                mdi-shield-check-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-off-outline"></i> mdi
                                                mdi-shield-off-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-parachute-outline"></i> mdi mdi-parachute-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-parachute"></i> mdi mdi-parachute
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-turnstile-outline"></i> mdi mdi-turnstile-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-turnstile"></i> mdi mdi-turnstile
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-delete-sweep-outline"></i> mdi
                                                mdi-delete-sweep-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-bell-curve"></i> mdi mdi-chart-bell-curve
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-math-tan"></i> mdi mdi-math-tan
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-math-sin"></i> mdi mdi-math-sin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-math-cos"></i> mdi mdi-math-cos
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-toaster-oven"></i> mdi mdi-toaster-oven
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-microwave"></i> mdi mdi-microwave
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ipod"></i> mdi mdi-ipod
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-table-outline"></i> mdi
                                                mdi-file-table-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-table"></i> mdi mdi-file-table
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-network-outline"></i> mdi
                                                mdi-account-network-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-upload-network-outline"></i> mdi
                                                mdi-upload-network-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-access-point-network-off"></i> mdi
                                                mdi-access-point-network-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-console-network-outline"></i> mdi
                                                mdi-console-network-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-download-network-outline"></i> mdi
                                                mdi-download-network-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-key-network-outline"></i> mdi
                                                mdi-folder-key-network-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-network-outline"></i> mdi
                                                mdi-folder-network-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-help-network-outline"></i> mdi
                                                mdi-help-network-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ip-network-outline"></i> mdi
                                                mdi-ip-network-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-minus-network-outline"></i> mdi
                                                mdi-minus-network-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network-outline"></i> mdi mdi-network-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-plus-network-outline"></i> mdi
                                                mdi-plus-network-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-play-network-outline"></i> mdi
                                                mdi-play-network-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-progress-alert"></i> mdi mdi-progress-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eslint"></i> mdi mdi-eslint
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-leaf-maple"></i> mdi mdi-leaf-maple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-play-outline"></i> mdi
                                                mdi-clipboard-play-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-play"></i> mdi mdi-clipboard-play
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-text-play-outline"></i> mdi
                                                mdi-clipboard-text-play-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-text-play"></i> mdi
                                                mdi-clipboard-text-play
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-check-outline"></i> mdi
                                                mdi-account-check-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-check"></i> mdi mdi-account-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-marker-check"></i> mdi mdi-map-marker-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-radius-outline"></i> mdi mdi-radius-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-radius"></i> mdi mdi-radius
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-diameter-variant"></i> mdi mdi-diameter-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-diameter-outline"></i> mdi mdi-diameter-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-diameter"></i> mdi mdi-diameter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-outline"></i> mdi mdi-account-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-off-outline"></i> mdi
                                                mdi-account-off-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-multiple-minus-outline"></i> mdi
                                                mdi-account-multiple-minus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-playlist-music-outline"></i> mdi
                                                mdi-playlist-music-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-playlist-music"></i> mdi mdi-playlist-music
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-seat-outline"></i> mdi mdi-seat-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-seat"></i> mdi mdi-seat
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-check-outline"></i> mdi
                                                mdi-calendar-check-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-remove-outline"></i> mdi
                                                mdi-calendar-remove-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-text-outline"></i> mdi
                                                mdi-calendar-text-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-charity"></i> mdi mdi-charity
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-ils"></i> mdi mdi-currency-ils
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-watch-vibrate-off"></i> mdi mdi-watch-vibrate-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vibrate-off"></i> mdi mdi-vibrate-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-haskell"></i> mdi mdi-language-haskell
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-inbox-multiple-outline"></i> mdi
                                                mdi-inbox-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-circle-outline"></i> mdi
                                                mdi-account-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wallet-outline"></i> mdi mdi-wallet-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-download-outline"></i> mdi
                                                mdi-cloud-download-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-arrow-right-outline"></i> mdi
                                                mdi-account-arrow-right-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-arrow-right"></i> mdi
                                                mdi-account-arrow-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-motorbike"></i> mdi mdi-motorbike
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-outline"></i> mdi mdi-book-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-database-edit"></i> mdi mdi-database-edit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eye-circle-outline"></i> mdi
                                                mdi-eye-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eye-circle"></i> mdi mdi-eye-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-clock-outline"></i> mdi
                                                mdi-account-clock-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-clock"></i> mdi mdi-account-clock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-help-rhombus-outline"></i> mdi
                                                mdi-help-rhombus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-help-rhombus"></i> mdi mdi-help-rhombus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-train-car"></i> mdi mdi-train-car
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-multiple"></i> mdi mdi-car-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mapbox"></i> mdi mdi-mapbox
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hat-fedora"></i> mdi mdi-hat-fedora
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-target-account"></i> mdi mdi-target-account
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-backspace-outline"></i> mdi mdi-backspace-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pan-top-right"></i> mdi mdi-pan-top-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pan-top-left"></i> mdi mdi-pan-top-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pan-bottom-left"></i> mdi mdi-pan-bottom-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pan-bottom-right"></i> mdi mdi-pan-bottom-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pan-left"></i> mdi mdi-pan-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pan-down"></i> mdi mdi-pan-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pan-right"></i> mdi mdi-pan-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pan-up"></i> mdi mdi-pan-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-delete-circle-outline"></i> mdi
                                                mdi-delete-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-remove"></i> mdi mdi-file-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email-mark-as-unread"></i> mdi
                                                mdi-email-mark-as-unread
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-artstation"></i> mdi mdi-artstation
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-control"></i> mdi mdi-camera-control
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pan-horizontal"></i> mdi mdi-pan-horizontal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pan-vertical"></i> mdi mdi-pan-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pan"></i> mdi mdi-pan
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-barley-off"></i> mdi mdi-barley-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-barn"></i> mdi mdi-barn
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-drag-variant"></i> mdi mdi-drag-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-library-shelves"></i> mdi mdi-library-shelves
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ubisoft"></i> mdi mdi-ubisoft
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gog"></i> mdi mdi-gog
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-menu-open"></i> mdi mdi-menu-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-key-outline"></i> mdi
                                                mdi-shield-key-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-key"></i> mdi mdi-shield-key
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wrap-disabled"></i> mdi mdi-wrap-disabled
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-door"></i> mdi mdi-car-door
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chat-alert"></i> mdi mdi-chat-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chat-processing"></i> mdi mdi-chat-processing
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chat"></i> mdi mdi-chat
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rollupjs"></i> mdi mdi-rollupjs
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-brl"></i> mdi mdi-currency-brl
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battlenet"></i> mdi mdi-battlenet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-access-point"></i> mdi mdi-access-point
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account"></i> mdi mdi-account
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-alert"></i> mdi mdi-account-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-box"></i> mdi mdi-account-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-box-multiple"></i> mdi
                                                mdi-account-box-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-box-outline"></i> mdi
                                                mdi-account-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-card-details"></i> mdi
                                                mdi-account-card-details
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-child"></i> mdi mdi-account-child
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-child-circle"></i> mdi
                                                mdi-account-child-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-circle"></i> mdi mdi-account-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-convert"></i> mdi mdi-account-convert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-details"></i> mdi mdi-account-details
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-edit"></i> mdi mdi-account-edit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-group"></i> mdi mdi-account-group
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-heart"></i> mdi mdi-account-heart
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-key"></i> mdi mdi-account-key
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-minus"></i> mdi mdi-account-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-minus-outline"></i> mdi
                                                mdi-account-minus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-multiple"></i> mdi mdi-account-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-multiple-check"></i> mdi
                                                mdi-account-multiple-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-multiple-minus"></i> mdi
                                                mdi-account-multiple-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-multiple-plus"></i> mdi
                                                mdi-account-multiple-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-off"></i> mdi mdi-account-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-plus"></i> mdi mdi-account-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-plus-outline"></i> mdi
                                                mdi-account-plus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-remove"></i> mdi mdi-account-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-remove-outline"></i> mdi
                                                mdi-account-remove-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-search"></i> mdi mdi-account-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-search-outline"></i> mdi
                                                mdi-account-search-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-settings"></i> mdi mdi-account-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-star"></i> mdi mdi-account-star
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-supervisor"></i> mdi
                                                mdi-account-supervisor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-supervisor-circle"></i> mdi
                                                mdi-account-supervisor-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-account-switch"></i> mdi mdi-account-switch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-accusoft"></i> mdi mdi-accusoft
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-adjust"></i> mdi mdi-adjust
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-adobe"></i> mdi mdi-adobe
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-air-conditioner"></i> mdi mdi-air-conditioner
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-airballoon"></i> mdi mdi-airballoon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-airplane"></i> mdi mdi-airplane
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-airplane-landing"></i> mdi mdi-airplane-landing
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-airplane-off"></i> mdi mdi-airplane-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-airplane-takeoff"></i> mdi mdi-airplane-takeoff
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-airplay"></i> mdi mdi-airplay
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-airport"></i> mdi mdi-airport
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alarm"></i> mdi mdi-alarm
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alarm-bell"></i> mdi mdi-alarm-bell
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alarm-check"></i> mdi mdi-alarm-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alarm-light"></i> mdi mdi-alarm-light
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alarm-multiple"></i> mdi mdi-alarm-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alarm-off"></i> mdi mdi-alarm-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alarm-plus"></i> mdi mdi-alarm-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alarm-snooze"></i> mdi mdi-alarm-snooze
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-album"></i> mdi mdi-album
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alert"></i> mdi mdi-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alert-box"></i> mdi mdi-alert-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alert-circle"></i> mdi mdi-alert-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alert-circle-outline"></i> mdi
                                                mdi-alert-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alert-decagram"></i> mdi mdi-alert-decagram
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alert-octagon"></i> mdi mdi-alert-octagon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alert-octagram"></i> mdi mdi-alert-octagram
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alert-outline"></i> mdi mdi-alert-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alien"></i> mdi mdi-alien
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-all-inclusive"></i> mdi mdi-all-inclusive
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha"></i> mdi mdi-alpha
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-a"></i> mdi mdi-alpha-a
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-a-box"></i> mdi mdi-alpha-a-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-b"></i> mdi mdi-alpha-b
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-b-box"></i> mdi mdi-alpha-b-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-c"></i> mdi mdi-alpha-c
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-c-box"></i> mdi mdi-alpha-c-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-d"></i> mdi mdi-alpha-d
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-d-box"></i> mdi mdi-alpha-d-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-e"></i> mdi mdi-alpha-e
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-e-box"></i> mdi mdi-alpha-e-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-f"></i> mdi mdi-alpha-f
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-f-box"></i> mdi mdi-alpha-f-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-g"></i> mdi mdi-alpha-g
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-g-box"></i> mdi mdi-alpha-g-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-h"></i> mdi mdi-alpha-h
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-h-box"></i> mdi mdi-alpha-h-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-i"></i> mdi mdi-alpha-i
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-i-box"></i> mdi mdi-alpha-i-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-j"></i> mdi mdi-alpha-j
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-j-box"></i> mdi mdi-alpha-j-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-k"></i> mdi mdi-alpha-k
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-k-box"></i> mdi mdi-alpha-k-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-l"></i> mdi mdi-alpha-l
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-l-box"></i> mdi mdi-alpha-l-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-m"></i> mdi mdi-alpha-m
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-m-box"></i> mdi mdi-alpha-m-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-n"></i> mdi mdi-alpha-n
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-n-box"></i> mdi mdi-alpha-n-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-o"></i> mdi mdi-alpha-o
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-o-box"></i> mdi mdi-alpha-o-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-p"></i> mdi mdi-alpha-p
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-p-box"></i> mdi mdi-alpha-p-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-q"></i> mdi mdi-alpha-q
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-q-box"></i> mdi mdi-alpha-q-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-r"></i> mdi mdi-alpha-r
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-r-box"></i> mdi mdi-alpha-r-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-s"></i> mdi mdi-alpha-s
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-s-box"></i> mdi mdi-alpha-s-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-t"></i> mdi mdi-alpha-t
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-t-box"></i> mdi mdi-alpha-t-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-u"></i> mdi mdi-alpha-u
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-u-box"></i> mdi mdi-alpha-u-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-v"></i> mdi mdi-alpha-v
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-v-box"></i> mdi mdi-alpha-v-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-w"></i> mdi mdi-alpha-w
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-w-box"></i> mdi mdi-alpha-w-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-x"></i> mdi mdi-alpha-x
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-x-box"></i> mdi mdi-alpha-x-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-y"></i> mdi mdi-alpha-y
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-y-box"></i> mdi mdi-alpha-y-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-z"></i> mdi mdi-alpha-z
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alpha-z-box"></i> mdi mdi-alpha-z-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-alphabetical"></i> mdi mdi-alphabetical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-altimeter"></i> mdi mdi-altimeter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-amazon"></i> mdi mdi-amazon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-amazon-alexa"></i> mdi mdi-amazon-alexa
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-amazon-drive"></i> mdi mdi-amazon-drive
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ambulance"></i> mdi mdi-ambulance
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ampersand"></i> mdi mdi-ampersand
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-amplifier"></i> mdi mdi-amplifier
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-anchor"></i> mdi mdi-anchor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-android"></i> mdi mdi-android
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-android-auto"></i> mdi mdi-android-auto
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-android-debug-bridge"></i> mdi
                                                mdi-android-debug-bridge
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-android-head"></i> mdi mdi-android-head
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-android-head"></i> mdi mdi-android-head
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-android-studio"></i> mdi mdi-android-studio
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-angle-acute"></i> mdi mdi-angle-acute
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-angle-obtuse"></i> mdi mdi-angle-obtuse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-angle-right"></i> mdi mdi-angle-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-angular"></i> mdi mdi-angular
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-angularjs"></i> mdi mdi-angularjs
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-animation"></i> mdi mdi-animation
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-animation-outline"></i> mdi mdi-animation-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-animation-play"></i> mdi mdi-animation-play
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-animation-play-outline"></i> mdi
                                                mdi-animation-play-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-anvil"></i> mdi mdi-anvil
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-apple"></i> mdi mdi-apple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-apple-finder"></i> mdi mdi-apple-finder
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-apple-icloud"></i> mdi mdi-apple-icloud
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-apple-ios"></i> mdi mdi-apple-ios
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-apple-keyboard-caps"></i> mdi
                                                mdi-apple-keyboard-caps
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-apple-keyboard-command"></i> mdi
                                                mdi-apple-keyboard-command
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-apple-keyboard-control"></i> mdi
                                                mdi-apple-keyboard-control
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-apple-keyboard-option"></i> mdi
                                                mdi-apple-keyboard-option
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-apple-keyboard-shift"></i> mdi
                                                mdi-apple-keyboard-shift
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-apple-safari"></i> mdi mdi-apple-safari
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-application"></i> mdi mdi-application
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-apps"></i> mdi mdi-apps
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arch"></i> mdi mdi-arch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-archive"></i> mdi mdi-archive
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrange-bring-forward"></i> mdi
                                                mdi-arrange-bring-forward
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrange-bring-to-front"></i> mdi
                                                mdi-arrange-bring-to-front
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrange-send-backward"></i> mdi
                                                mdi-arrange-send-backward
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrange-send-to-back"></i> mdi
                                                mdi-arrange-send-to-back
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-all"></i> mdi mdi-arrow-all
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-bottom-left"></i> mdi mdi-arrow-bottom-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-bottom-left-bold-outline"></i> mdi
                                                mdi-arrow-bottom-left-bold-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-bottom-left-thick"></i> mdi
                                                mdi-arrow-bottom-left-thick
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-bottom-right"></i> mdi
                                                mdi-arrow-bottom-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-bottom-right-bold-outline"></i> mdi
                                                mdi-arrow-bottom-right-bold-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-bottom-right-thick"></i> mdi
                                                mdi-arrow-bottom-right-thick
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-collapse"></i> mdi mdi-arrow-collapse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-collapse-all"></i> mdi
                                                mdi-arrow-collapse-all
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-collapse-down"></i> mdi
                                                mdi-arrow-collapse-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-collapse-horizontal"></i> mdi
                                                mdi-arrow-collapse-horizontal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-collapse-left"></i> mdi
                                                mdi-arrow-collapse-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-collapse-right"></i> mdi
                                                mdi-arrow-collapse-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-collapse-up"></i> mdi mdi-arrow-collapse-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-collapse-vertical"></i> mdi
                                                mdi-arrow-collapse-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-decision"></i> mdi mdi-arrow-decision
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-decision-auto"></i> mdi
                                                mdi-arrow-decision-auto
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-decision-auto-outline"></i> mdi
                                                mdi-arrow-decision-auto-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-decision-outline"></i> mdi
                                                mdi-arrow-decision-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-down"></i> mdi mdi-arrow-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-down-bold"></i> mdi mdi-arrow-down-bold
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-down-bold-box"></i> mdi
                                                mdi-arrow-down-bold-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-down-bold-box-outline"></i> mdi
                                                mdi-arrow-down-bold-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-down-bold-circle"></i> mdi
                                                mdi-arrow-down-bold-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-down-bold-circle-outline"></i> mdi
                                                mdi-arrow-down-bold-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-down-bold-hexagon-outline"></i> mdi
                                                mdi-arrow-down-bold-hexagon-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-down-bold-outline"></i> mdi
                                                mdi-arrow-down-bold-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-down-box"></i> mdi mdi-arrow-down-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-down-drop-circle"></i> mdi
                                                mdi-arrow-down-drop-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-down-drop-circle-outline"></i> mdi
                                                mdi-arrow-down-drop-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-down-thick"></i> mdi mdi-arrow-down-thick
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-expand"></i> mdi mdi-arrow-expand
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-expand-all"></i> mdi mdi-arrow-expand-all
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-expand-down"></i> mdi mdi-arrow-expand-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-expand-horizontal"></i> mdi
                                                mdi-arrow-expand-horizontal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-expand-left"></i> mdi mdi-arrow-expand-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-expand-right"></i> mdi
                                                mdi-arrow-expand-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-expand-up"></i> mdi mdi-arrow-expand-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-expand-vertical"></i> mdi
                                                mdi-arrow-expand-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left"></i> mdi mdi-arrow-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left-bold"></i> mdi mdi-arrow-left-bold
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left-bold-box"></i> mdi
                                                mdi-arrow-left-bold-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left-bold-box-outline"></i> mdi
                                                mdi-arrow-left-bold-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left-bold-circle"></i> mdi
                                                mdi-arrow-left-bold-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left-bold-circle-outline"></i> mdi
                                                mdi-arrow-left-bold-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left-bold-hexagon-outline"></i> mdi
                                                mdi-arrow-left-bold-hexagon-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left-bold-outline"></i> mdi
                                                mdi-arrow-left-bold-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left-box"></i> mdi mdi-arrow-left-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left-drop-circle"></i> mdi
                                                mdi-arrow-left-drop-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left-drop-circle-outline"></i> mdi
                                                mdi-arrow-left-drop-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left-right-bold-outline"></i> mdi
                                                mdi-arrow-left-right-bold-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-left-thick"></i> mdi mdi-arrow-left-thick
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-right"></i> mdi mdi-arrow-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-right-bold"></i> mdi mdi-arrow-right-bold
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-right-bold-box"></i> mdi
                                                mdi-arrow-right-bold-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-right-bold-box-outline"></i> mdi
                                                mdi-arrow-right-bold-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-right-bold-circle"></i> mdi
                                                mdi-arrow-right-bold-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-right-bold-circle-outline"></i> mdi
                                                mdi-arrow-right-bold-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-right-bold-hexagon-outline"></i> mdi
                                                mdi-arrow-right-bold-hexagon-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-right-bold-outline"></i> mdi
                                                mdi-arrow-right-bold-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-right-box"></i> mdi mdi-arrow-right-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-right-drop-circle"></i> mdi
                                                mdi-arrow-right-drop-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-right-drop-circle-outline"></i> mdi
                                                mdi-arrow-right-drop-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-right-thick"></i> mdi mdi-arrow-right-thick
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-split-horizontal"></i> mdi
                                                mdi-arrow-split-horizontal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-split-vertical"></i> mdi
                                                mdi-arrow-split-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-top-left"></i> mdi mdi-arrow-top-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-top-left-bold-outline"></i> mdi
                                                mdi-arrow-top-left-bold-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-top-left-thick"></i> mdi
                                                mdi-arrow-top-left-thick
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-top-right"></i> mdi mdi-arrow-top-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-top-right-bold-outline"></i> mdi
                                                mdi-arrow-top-right-bold-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-top-right-thick"></i> mdi
                                                mdi-arrow-top-right-thick
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-expand-up"></i> mdi mdi-arrow-expand-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-up-bold"></i> mdi mdi-arrow-up-bold
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-up-bold-box"></i> mdi mdi-arrow-up-bold-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-up-bold-box-outline"></i> mdi
                                                mdi-arrow-up-bold-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-up-bold-circle"></i> mdi
                                                mdi-arrow-up-bold-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-up-bold-circle-outline"></i> mdi
                                                mdi-arrow-up-bold-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-up-bold-hexagon-outline"></i> mdi
                                                mdi-arrow-up-bold-hexagon-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-up-bold-outline"></i> mdi
                                                mdi-arrow-up-bold-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-up-box"></i> mdi mdi-arrow-up-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-up-down-bold-outline"></i> mdi
                                                mdi-arrow-up-down-bold-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-up-drop-circle"></i> mdi
                                                mdi-arrow-up-drop-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-up-drop-circle-outline"></i> mdi
                                                mdi-arrow-up-drop-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-arrow-up-thick"></i> mdi mdi-arrow-up-thick
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-artist"></i> mdi mdi-artist
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-aspect-ratio"></i> mdi mdi-aspect-ratio
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-assistant"></i> mdi mdi-assistant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-asterisk"></i> mdi mdi-asterisk
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-at"></i> mdi mdi-at
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-atlassian"></i> mdi mdi-atlassian
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-atom"></i> mdi mdi-atom
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-attachment"></i> mdi mdi-attachment
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-audio-video"></i> mdi mdi-audio-video
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-audiobook"></i> mdi mdi-audiobook
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-augmented-reality"></i> mdi mdi-augmented-reality
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-auto-fix"></i> mdi mdi-auto-fix
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-auto-upload"></i> mdi mdi-auto-upload
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-autorenew"></i> mdi mdi-autorenew
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-av-timer"></i> mdi mdi-av-timer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-axe"></i> mdi mdi-axe
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-azure"></i> mdi mdi-azure
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-babel"></i> mdi mdi-babel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-baby"></i> mdi mdi-baby
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-baby-buggy"></i> mdi mdi-baby-buggy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-backburger"></i> mdi mdi-backburger
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-backspace"></i> mdi mdi-backspace
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-backup-restore"></i> mdi mdi-backup-restore
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-badminton"></i> mdi mdi-badminton
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-balloon"></i> mdi mdi-balloon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ballot"></i> mdi mdi-ballot
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ballot-outline"></i> mdi mdi-ballot-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bandcamp"></i> mdi mdi-bandcamp
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bank"></i> mdi mdi-bank
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bank-transfer"></i> mdi mdi-bank-transfer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bank-transfer-in"></i> mdi mdi-bank-transfer-in
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bank-transfer-out"></i> mdi mdi-bank-transfer-out
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-barcode"></i> mdi mdi-barcode
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-barcode-scan"></i> mdi mdi-barcode-scan
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-barley"></i> mdi mdi-barley
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-barrel"></i> mdi mdi-barrel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-baseball"></i> mdi mdi-baseball
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-baseball-bat"></i> mdi mdi-baseball-bat
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-basecamp"></i> mdi mdi-basecamp
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-basket"></i> mdi mdi-basket
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-basket-fill"></i> mdi mdi-basket-fill
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-basket-unfill"></i> mdi mdi-basket-unfill
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-basketball"></i> mdi mdi-basketball
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery"></i> mdi mdi-battery
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-10"></i> mdi mdi-battery-10
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-10-bluetooth"></i> mdi
                                                mdi-battery-10-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-20"></i> mdi mdi-battery-20
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-20-bluetooth"></i> mdi
                                                mdi-battery-20-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-30"></i> mdi mdi-battery-30
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-30-bluetooth"></i> mdi
                                                mdi-battery-30-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-40"></i> mdi mdi-battery-40
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-40-bluetooth"></i> mdi
                                                mdi-battery-40-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-50"></i> mdi mdi-battery-50
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-50-bluetooth"></i> mdi
                                                mdi-battery-50-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-60"></i> mdi mdi-battery-60
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-60-bluetooth"></i> mdi
                                                mdi-battery-60-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-70"></i> mdi mdi-battery-70
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-70-bluetooth"></i> mdi
                                                mdi-battery-70-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-80"></i> mdi mdi-battery-80
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-80-bluetooth"></i> mdi
                                                mdi-battery-80-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-90"></i> mdi mdi-battery-90
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-90-bluetooth"></i> mdi
                                                mdi-battery-90-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-alert"></i> mdi mdi-battery-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-alert-bluetooth"></i> mdi
                                                mdi-battery-alert-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-bluetooth"></i> mdi mdi-battery-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-bluetooth-variant"></i> mdi
                                                mdi-battery-bluetooth-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-charging"></i> mdi mdi-battery-charging
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-charging-10"></i> mdi
                                                mdi-battery-charging-10
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-charging-100"></i> mdi
                                                mdi-battery-charging-100
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-charging-20"></i> mdi
                                                mdi-battery-charging-20
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-charging-30"></i> mdi
                                                mdi-battery-charging-30
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-charging-40"></i> mdi
                                                mdi-battery-charging-40
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-charging-50"></i> mdi
                                                mdi-battery-charging-50
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-charging-60"></i> mdi
                                                mdi-battery-charging-60
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-charging-70"></i> mdi
                                                mdi-battery-charging-70
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-charging-80"></i> mdi
                                                mdi-battery-charging-80
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-charging-90"></i> mdi
                                                mdi-battery-charging-90
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-charging-wireless-alert"></i> mdi
                                                mdi-battery-charging-wireless-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-charging-wireless-outline"></i> mdi
                                                mdi-battery-charging-wireless-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-minus"></i> mdi mdi-battery-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-negative"></i> mdi mdi-battery-negative
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-outline"></i> mdi mdi-battery-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-plus"></i> mdi mdi-battery-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-positive"></i> mdi mdi-battery-positive
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-unknown"></i> mdi mdi-battery-unknown
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-battery-unknown-bluetooth"></i> mdi
                                                mdi-battery-unknown-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-beach"></i> mdi mdi-beach
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-beaker"></i> mdi mdi-beaker
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-beats"></i> mdi mdi-beats
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bed-empty"></i> mdi mdi-bed-empty
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-beer"></i> mdi mdi-beer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-behance"></i> mdi mdi-behance
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bell"></i> mdi mdi-bell
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bell-off"></i> mdi mdi-bell-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bell-off-outline"></i> mdi mdi-bell-off-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bell-outline"></i> mdi mdi-bell-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bell-plus"></i> mdi mdi-bell-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bell-plus-outline"></i> mdi mdi-bell-plus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bell-ring"></i> mdi mdi-bell-ring
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bell-ring-outline"></i> mdi mdi-bell-ring-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bell-sleep"></i> mdi mdi-bell-sleep
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bell-sleep-outline"></i> mdi
                                                mdi-bell-sleep-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-beta"></i> mdi mdi-beta
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-betamax"></i> mdi mdi-betamax
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bible"></i> mdi mdi-bible
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bike"></i> mdi mdi-bike
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bing"></i> mdi mdi-bing
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-binoculars"></i> mdi mdi-binoculars
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bio"></i> mdi mdi-bio
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-biohazard"></i> mdi mdi-biohazard
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bitbucket"></i> mdi mdi-bitbucket
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bitcoin"></i> mdi mdi-bitcoin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-black-mesa"></i> mdi mdi-black-mesa
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-blackberry"></i> mdi mdi-blackberry
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-blender"></i> mdi mdi-blender
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-blinds"></i> mdi mdi-blinds
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-block-helper"></i> mdi mdi-block-helper
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-blogger"></i> mdi mdi-blogger
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bluetooth"></i> mdi mdi-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bluetooth-audio"></i> mdi mdi-bluetooth-audio
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bluetooth-connect"></i> mdi mdi-bluetooth-connect
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bluetooth-off"></i> mdi mdi-bluetooth-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bluetooth-settings"></i> mdi
                                                mdi-bluetooth-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bluetooth-transfer"></i> mdi
                                                mdi-bluetooth-transfer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-blur"></i> mdi mdi-blur
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-blur-linear"></i> mdi mdi-blur-linear
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-blur-off"></i> mdi mdi-blur-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-blur-radial"></i> mdi mdi-blur-radial
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bomb"></i> mdi mdi-bomb
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bomb-off"></i> mdi mdi-bomb-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bone"></i> mdi mdi-bone
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book"></i> mdi mdi-book
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-lock"></i> mdi mdi-book-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-lock-open"></i> mdi mdi-book-lock-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-minus"></i> mdi mdi-book-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-multiple"></i> mdi mdi-book-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-multiple-minus"></i> mdi
                                                mdi-book-multiple-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-multiple-plus"></i> mdi
                                                mdi-book-multiple-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-multiple-remove"></i> mdi
                                                mdi-book-multiple-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-multiple-variant"></i> mdi
                                                mdi-book-multiple-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-open"></i> mdi mdi-book-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-open-page-variant"></i> mdi
                                                mdi-book-open-page-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-open-variant"></i> mdi mdi-book-open-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-plus"></i> mdi mdi-book-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-remove"></i> mdi mdi-book-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-book-variant"></i> mdi mdi-book-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bookmark"></i> mdi mdi-bookmark
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bookmark-check"></i> mdi mdi-bookmark-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bookmark-minus"></i> mdi mdi-bookmark-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bookmark-minus-outline"></i> mdi
                                                mdi-bookmark-minus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bookmark-music"></i> mdi mdi-bookmark-music
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bookmark-off"></i> mdi mdi-bookmark-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bookmark-off-outline"></i> mdi
                                                mdi-bookmark-off-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bookmark-outline"></i> mdi mdi-bookmark-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bookmark-plus"></i> mdi mdi-bookmark-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bookmark-plus-outline"></i> mdi
                                                mdi-bookmark-plus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bookmark-remove"></i> mdi mdi-bookmark-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-boombox"></i> mdi mdi-boombox
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bootstrap"></i> mdi mdi-bootstrap
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-all"></i> mdi mdi-border-all
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-all-variant"></i> mdi
                                                mdi-border-all-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-bottom"></i> mdi mdi-border-bottom
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-bottom-variant"></i> mdi
                                                mdi-border-bottom-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-color"></i> mdi mdi-border-color
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-horizontal"></i> mdi mdi-border-horizontal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-inside"></i> mdi mdi-border-inside
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-left"></i> mdi mdi-border-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-left-variant"></i> mdi
                                                mdi-border-left-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-none"></i> mdi mdi-border-none
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-none-variant"></i> mdi
                                                mdi-border-none-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-outside"></i> mdi mdi-border-outside
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-right"></i> mdi mdi-border-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-right-variant"></i> mdi
                                                mdi-border-right-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-style"></i> mdi mdi-border-style
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-top"></i> mdi mdi-border-top
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-top-variant"></i> mdi
                                                mdi-border-top-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-border-vertical"></i> mdi mdi-border-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bottle-wine"></i> mdi mdi-bottle-wine
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bow-tie"></i> mdi mdi-bow-tie
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bowl"></i> mdi mdi-bowl
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bowling"></i> mdi mdi-bowling
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-box"></i> mdi mdi-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-box-cutter"></i> mdi mdi-box-cutter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-box-shadow"></i> mdi mdi-box-shadow
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-braille"></i> mdi mdi-braille
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-brain"></i> mdi mdi-brain
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bridge"></i> mdi mdi-bridge
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase"></i> mdi mdi-briefcase
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-check"></i> mdi mdi-briefcase-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-download"></i> mdi
                                                mdi-briefcase-download
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-edit"></i> mdi mdi-briefcase-edit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-minus"></i> mdi mdi-briefcase-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-outline"></i> mdi mdi-briefcase-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-plus"></i> mdi mdi-briefcase-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-remove"></i> mdi mdi-briefcase-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-search"></i> mdi mdi-briefcase-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-briefcase-upload"></i> mdi mdi-briefcase-upload
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-brightness-1"></i> mdi mdi-brightness-1
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-brightness-2"></i> mdi mdi-brightness-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-brightness-3"></i> mdi mdi-brightness-3
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-brightness-4"></i> mdi mdi-brightness-4
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-brightness-5"></i> mdi mdi-brightness-5
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-brightness-6"></i> mdi mdi-brightness-6
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-brightness-7"></i> mdi mdi-brightness-7
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-brightness-auto"></i> mdi mdi-brightness-auto
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-broom"></i> mdi mdi-broom
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-brush"></i> mdi mdi-brush
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-buddhism"></i> mdi mdi-buddhism
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-buffer"></i> mdi mdi-buffer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bug"></i> mdi mdi-bug
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bug-check"></i> mdi mdi-bug-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bug-check-outline"></i> mdi mdi-bug-check-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bug-outline"></i> mdi mdi-bug-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bulldozer"></i> mdi mdi-bulldozer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bulletin-board"></i> mdi mdi-bulletin-board
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bullhorn"></i> mdi mdi-bullhorn
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bullhorn-outline"></i> mdi mdi-bullhorn-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bullseye-arrow"></i> mdi mdi-bullseye-arrow
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bus"></i> mdi mdi-bus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bus-alert"></i> mdi mdi-bus-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bus-articulated-end"></i> mdi
                                                mdi-bus-articulated-end
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bus-articulated-front"></i> mdi
                                                mdi-bus-articulated-front
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bus-clock"></i> mdi mdi-bus-clock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bus-double-decker"></i> mdi mdi-bus-double-decker
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bus-school"></i> mdi mdi-bus-school
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-bus-side"></i> mdi mdi-bus-side
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cached"></i> mdi mdi-cached
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cake"></i> mdi mdi-cake
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cake-layered"></i> mdi mdi-cake-layered
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cake-variant"></i> mdi mdi-cake-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calculator"></i> mdi mdi-calculator
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calculator-variant"></i> mdi
                                                mdi-calculator-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar"></i> mdi mdi-calendar
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-alert"></i> mdi mdi-calendar-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-blank"></i> mdi mdi-calendar-blank
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-check"></i> mdi mdi-calendar-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-clock"></i> mdi mdi-calendar-clock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-edit"></i> mdi mdi-calendar-edit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-export"></i> mdi mdi-calendar-export
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-heart"></i> mdi mdi-calendar-heart
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-import"></i> mdi mdi-calendar-import
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-multiple"></i> mdi mdi-calendar-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-multiple-check"></i> mdi
                                                mdi-calendar-multiple-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-multiselect"></i> mdi
                                                mdi-calendar-multiselect
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-plus"></i> mdi mdi-calendar-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-question"></i> mdi mdi-calendar-question
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-range"></i> mdi mdi-calendar-range
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-remove"></i> mdi mdi-calendar-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-search"></i> mdi mdi-calendar-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-star"></i> mdi mdi-calendar-star
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-text"></i> mdi mdi-calendar-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-today"></i> mdi mdi-calendar-today
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-week"></i> mdi mdi-calendar-week
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-calendar-week-begin"></i> mdi
                                                mdi-calendar-week-begin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-call-made"></i> mdi mdi-call-made
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-call-merge"></i> mdi mdi-call-merge
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-call-missed"></i> mdi mdi-call-missed
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-call-received"></i> mdi mdi-call-received
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-call-split"></i> mdi mdi-call-split
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camcorder"></i> mdi mdi-camcorder
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camcorder-box"></i> mdi mdi-camcorder-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camcorder-box-off"></i> mdi mdi-camcorder-box-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camcorder-off"></i> mdi mdi-camcorder-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera"></i> mdi mdi-camera
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-account"></i> mdi mdi-camera-account
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-burst"></i> mdi mdi-camera-burst
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-enhance"></i> mdi mdi-camera-enhance
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-front"></i> mdi mdi-camera-front
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-front-variant"></i> mdi
                                                mdi-camera-front-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-gopro"></i> mdi mdi-camera-gopro
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-image"></i> mdi mdi-camera-image
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-iris"></i> mdi mdi-camera-iris
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-metering-center"></i> mdi
                                                mdi-camera-metering-center
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-metering-matrix"></i> mdi
                                                mdi-camera-metering-matrix
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-metering-partial"></i> mdi
                                                mdi-camera-metering-partial
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-metering-spot"></i> mdi
                                                mdi-camera-metering-spot
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-off"></i> mdi mdi-camera-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-party-mode"></i> mdi mdi-camera-party-mode
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-rear"></i> mdi mdi-camera-rear
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-rear-variant"></i> mdi
                                                mdi-camera-rear-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-switch"></i> mdi mdi-camera-switch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-camera-timer"></i> mdi mdi-camera-timer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cancel"></i> mdi mdi-cancel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-candle"></i> mdi mdi-candle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-candycane"></i> mdi mdi-candycane
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cannabis"></i> mdi mdi-cannabis
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-caps-lock"></i> mdi mdi-caps-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car"></i> mdi mdi-car
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-battery"></i> mdi mdi-car-battery
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-connected"></i> mdi mdi-car-connected
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-convertible"></i> mdi mdi-car-convertible
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-estate"></i> mdi mdi-car-estate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-hatchback"></i> mdi mdi-car-hatchback
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-limousine"></i> mdi mdi-car-limousine
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-pickup"></i> mdi mdi-car-pickup
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-side"></i> mdi mdi-car-side
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-sports"></i> mdi mdi-car-sports
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-car-wash"></i> mdi mdi-car-wash
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-caravan"></i> mdi mdi-caravan
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cards"></i> mdi mdi-cards
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cards-club"></i> mdi mdi-cards-club
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cards-diamond"></i> mdi mdi-cards-diamond
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cards-heart"></i> mdi mdi-cards-heart
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cards-outline"></i> mdi mdi-cards-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cards-playing-outline"></i> mdi
                                                mdi-cards-playing-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cards-spade"></i> mdi mdi-cards-spade
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cards-variant"></i> mdi mdi-cards-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-carrot"></i> mdi mdi-carrot
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cart"></i> mdi mdi-cart
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cart-off"></i> mdi mdi-cart-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cart-outline"></i> mdi mdi-cart-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cart-plus"></i> mdi mdi-cart-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-case-sensitive-alt"></i> mdi
                                                mdi-case-sensitive-alt
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cash"></i> mdi mdi-cash
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cash-100"></i> mdi mdi-cash-100
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cash-multiple"></i> mdi mdi-cash-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cash-refund"></i> mdi mdi-cash-refund
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cash-usd"></i> mdi mdi-cash-usd
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cassette"></i> mdi mdi-cassette
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cast"></i> mdi mdi-cast
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cast-connected"></i> mdi mdi-cast-connected
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cast-off"></i> mdi mdi-cast-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-castle"></i> mdi mdi-castle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cat"></i> mdi mdi-cat
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cctv"></i> mdi mdi-cctv
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ceiling-light"></i> mdi mdi-ceiling-light
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone"></i> mdi mdi-cellphone
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-android"></i> mdi mdi-cellphone-android
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-arrow-down"></i> mdi
                                                mdi-cellphone-arrow-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-basic"></i> mdi mdi-cellphone-basic
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-dock"></i> mdi mdi-cellphone-dock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-erase"></i> mdi mdi-cellphone-erase
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-iphone"></i> mdi mdi-cellphone-iphone
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-key"></i> mdi mdi-cellphone-key
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-link"></i> mdi mdi-cellphone-link
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-link-off"></i> mdi
                                                mdi-cellphone-link-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-lock"></i> mdi mdi-cellphone-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-message"></i> mdi mdi-cellphone-message
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-off"></i> mdi mdi-cellphone-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-screenshot"></i> mdi
                                                mdi-cellphone-screenshot
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-settings"></i> mdi
                                                mdi-cellphone-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-settings-variant"></i> mdi
                                                mdi-cellphone-settings-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-sound"></i> mdi mdi-cellphone-sound
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-text"></i> mdi mdi-cellphone-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cellphone-wireless"></i> mdi
                                                mdi-cellphone-wireless
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-certificate"></i> mdi mdi-certificate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chair-school"></i> mdi mdi-chair-school
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-arc"></i> mdi mdi-chart-arc
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-areaspline"></i> mdi mdi-chart-areaspline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-bar"></i> mdi mdi-chart-bar
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-bar-stacked"></i> mdi mdi-chart-bar-stacked
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-bubble"></i> mdi mdi-chart-bubble
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-donut"></i> mdi mdi-chart-donut
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-donut-variant"></i> mdi
                                                mdi-chart-donut-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-gantt"></i> mdi mdi-chart-gantt
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-histogram"></i> mdi mdi-chart-histogram
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-line"></i> mdi mdi-chart-line
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-line-stacked"></i> mdi
                                                mdi-chart-line-stacked
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-line-variant"></i> mdi
                                                mdi-chart-line-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-multiline"></i> mdi mdi-chart-multiline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-pie"></i> mdi mdi-chart-pie
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-scatterplot-hexbin"></i> mdi
                                                mdi-chart-scatterplot-hexbin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chart-timeline"></i> mdi mdi-chart-timeline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-check"></i> mdi mdi-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-check-all"></i> mdi mdi-check-all
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-check-circle"></i> mdi mdi-check-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-check-circle-outline"></i> mdi
                                                mdi-check-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-check-decagram"></i> mdi mdi-check-decagram
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-check-outline"></i> mdi mdi-check-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbook"></i> mdi mdi-checkbook
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-blank"></i> mdi mdi-checkbox-blank
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-blank-circle"></i> mdi
                                                mdi-checkbox-blank-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-blank-circle-outline"></i> mdi
                                                mdi-checkbox-blank-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-blank-outline"></i> mdi
                                                mdi-checkbox-blank-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-intermediate"></i> mdi
                                                mdi-checkbox-intermediate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-marked"></i> mdi mdi-checkbox-marked
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-marked-circle"></i> mdi
                                                mdi-checkbox-marked-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-marked-circle-outline"></i> mdi
                                                mdi-checkbox-marked-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-marked-outline"></i> mdi
                                                mdi-checkbox-marked-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-multiple-blank"></i> mdi
                                                mdi-checkbox-multiple-blank
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-multiple-blank-circle"></i> mdi
                                                mdi-checkbox-multiple-blank-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-multiple-blank-circle-outline"></i> mdi
                                                mdi-checkbox-multiple-blank-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-multiple-blank-outline"></i> mdi
                                                mdi-checkbox-multiple-blank-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-multiple-marked"></i> mdi
                                                mdi-checkbox-multiple-marked
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-multiple-marked-circle"></i> mdi
                                                mdi-checkbox-multiple-marked-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-multiple-marked-circle-outline"></i> mdi
                                                mdi-checkbox-multiple-marked-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkbox-multiple-marked-outline"></i> mdi
                                                mdi-checkbox-multiple-marked-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-checkerboard"></i> mdi mdi-checkerboard
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chemical-weapon"></i> mdi mdi-chemical-weapon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chess-bishop"></i> mdi mdi-chess-bishop
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chess-king"></i> mdi mdi-chess-king
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chess-knight"></i> mdi mdi-chess-knight
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chess-pawn"></i> mdi mdi-chess-pawn
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chess-queen   "></i> mdi mdi-chess-queen
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chess-rook"></i> mdi mdi-chess-rook
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-double-down"></i> mdi
                                                mdi-chevron-double-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-double-left"></i> mdi
                                                mdi-chevron-double-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-double-right"></i> mdi
                                                mdi-chevron-double-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-double-up"></i> mdi mdi-chevron-double-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-down"></i> mdi mdi-chevron-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-down-box"></i> mdi mdi-chevron-down-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-down-box-outline"></i> mdi
                                                mdi-chevron-down-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-down-circle"></i> mdi
                                                mdi-chevron-down-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-down-circle-outline"></i> mdi
                                                mdi-chevron-down-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-left"></i> mdi mdi-chevron-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-left-box"></i> mdi mdi-chevron-left-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-left-box-outline"></i> mdi
                                                mdi-chevron-left-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-left-circle"></i> mdi
                                                mdi-chevron-left-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-left-circle-outline"></i> mdi
                                                mdi-chevron-left-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-right"></i> mdi mdi-chevron-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-right-box"></i> mdi mdi-chevron-right-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-right-box-outline"></i> mdi
                                                mdi-chevron-right-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-right-circle"></i> mdi
                                                mdi-chevron-right-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-right-circle-outline"></i> mdi
                                                mdi-chevron-right-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-up"></i> mdi mdi-chevron-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-up-box"></i> mdi mdi-chevron-up-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-up-box-outline"></i> mdi
                                                mdi-chevron-up-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-up-circle"></i> mdi mdi-chevron-up-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chevron-up-circle-outline"></i> mdi
                                                mdi-chevron-up-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chili-hot"></i> mdi mdi-chili-hot
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chili-medium"></i> mdi mdi-chili-medium
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chili-mild"></i> mdi mdi-chili-mild
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-chip"></i> mdi mdi-chip
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-christianity"></i> mdi mdi-christianity
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-church"></i> mdi mdi-church
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-circle"></i> mdi mdi-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-circle-edit-outline"></i> mdi
                                                mdi-circle-edit-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-circle-medium"></i> mdi mdi-circle-medium
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-circle-outline"></i> mdi mdi-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-circle-slice-1"></i> mdi mdi-circle-slice-1
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-circle-slice-2"></i> mdi mdi-circle-slice-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-circle-slice-3"></i> mdi mdi-circle-slice-3
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-circle-slice-4"></i> mdi mdi-circle-slice-4
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-circle-slice-5"></i> mdi mdi-circle-slice-5
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-circle-slice-6"></i> mdi mdi-circle-slice-6
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-circle-slice-7"></i> mdi mdi-circle-slice-7
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-circle-slice-8"></i> mdi mdi-circle-slice-8
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-circle-small"></i> mdi mdi-circle-small
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cisco-webex"></i> mdi mdi-cisco-webex
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-city"></i> mdi mdi-city
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-city-variant"></i> mdi mdi-city-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-city-variant-outline"></i> mdi
                                                mdi-city-variant-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard"></i> mdi mdi-clipboard
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-account"></i> mdi mdi-clipboard-account
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-alert"></i> mdi mdi-clipboard-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-arrow-down"></i> mdi
                                                mdi-clipboard-arrow-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-arrow-left"></i> mdi
                                                mdi-clipboard-arrow-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-check"></i> mdi mdi-clipboard-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-check-outline"></i> mdi
                                                mdi-clipboard-check-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-flow"></i> mdi mdi-clipboard-flow
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-outline"></i> mdi mdi-clipboard-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-plus"></i> mdi mdi-clipboard-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-pulse"></i> mdi mdi-clipboard-pulse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-pulse-outline"></i> mdi
                                                mdi-clipboard-pulse-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-text"></i> mdi mdi-clipboard-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clipboard-text-outline"></i> mdi
                                                mdi-clipboard-text-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clippy"></i> mdi mdi-clippy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clock"></i> mdi mdi-clock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clock-alert"></i> mdi mdi-clock-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clock-alert-outline"></i> mdi
                                                mdi-clock-alert-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clock-end"></i> mdi mdi-clock-end
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clock-fast"></i> mdi mdi-clock-fast
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clock-in"></i> mdi mdi-clock-in
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clock-out"></i> mdi mdi-clock-out
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clock-outline"></i> mdi mdi-clock-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clock-start"></i> mdi mdi-clock-start
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-close"></i> mdi mdi-close
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-close-box"></i> mdi mdi-close-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-close-box-outline"></i> mdi mdi-close-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-close-circle"></i> mdi mdi-close-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-close-circle-outline"></i> mdi
                                                mdi-close-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-close-network"></i> mdi mdi-close-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-close-octagon"></i> mdi mdi-close-octagon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-close-octagon-outline"></i> mdi
                                                mdi-close-octagon-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-close-outline"></i> mdi mdi-close-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-closed-caption"></i> mdi mdi-closed-caption
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud"></i> mdi mdi-cloud
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-alert"></i> mdi mdi-cloud-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-braces"></i> mdi mdi-cloud-braces
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-check"></i> mdi mdi-cloud-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-circle"></i> mdi mdi-cloud-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-download"></i> mdi mdi-cloud-download
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-off-outline"></i> mdi mdi-cloud-off-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-outline"></i> mdi mdi-cloud-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-print"></i> mdi mdi-cloud-print
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-print-outline"></i> mdi
                                                mdi-cloud-print-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-question"></i> mdi mdi-cloud-question
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-search"></i> mdi mdi-cloud-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-search-outline"></i> mdi
                                                mdi-cloud-search-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-sync"></i> mdi mdi-cloud-sync
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-tags"></i> mdi mdi-cloud-tags
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cloud-upload"></i> mdi mdi-cloud-upload
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-clover"></i> mdi mdi-clover
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-code-array"></i> mdi mdi-code-array
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-code-braces"></i> mdi mdi-code-braces
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-code-brackets"></i> mdi mdi-code-brackets
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-code-equal"></i> mdi mdi-code-equal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-code-greater-than"></i> mdi mdi-code-greater-than
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-code-greater-than-or-equal"></i> mdi
                                                mdi-code-greater-than-or-equal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-code-less-than"></i> mdi mdi-code-less-than
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-code-less-than-or-equal"></i> mdi
                                                mdi-code-less-than-or-equal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-code-not-equal"></i> mdi mdi-code-not-equal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-code-not-equal-variant"></i> mdi
                                                mdi-code-not-equal-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-code-parentheses"></i> mdi mdi-code-parentheses
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-code-string"></i> mdi mdi-code-string
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-code-tags"></i> mdi mdi-code-tags
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-code-tags-check"></i> mdi mdi-code-tags-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-codepen"></i> mdi mdi-codepen
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-coffee"></i> mdi mdi-coffee
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-coffee-outline"></i> mdi mdi-coffee-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-coffee-to-go"></i> mdi mdi-coffee-to-go
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cogs"></i> mdi mdi-cogs
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-coin"></i> mdi mdi-coin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-coins"></i> mdi mdi-coins
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-collage"></i> mdi mdi-collage
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-collapse-all"></i> mdi mdi-collapse-all
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-collapse-all-outline"></i> mdi
                                                mdi-collapse-all-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-color-helper"></i> mdi mdi-color-helper
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment"></i> mdi mdi-comment
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-account"></i> mdi mdi-comment-account
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-account-outline"></i> mdi
                                                mdi-comment-account-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-alert"></i> mdi mdi-comment-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-alert-outline"></i> mdi
                                                mdi-comment-alert-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-arrow-left"></i> mdi
                                                mdi-comment-arrow-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-arrow-left-outline"></i> mdi
                                                mdi-comment-arrow-left-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-arrow-right"></i> mdi
                                                mdi-comment-arrow-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-arrow-right-outline"></i> mdi
                                                mdi-comment-arrow-right-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-check"></i> mdi mdi-comment-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-check-outline"></i> mdi
                                                mdi-comment-check-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-eye"></i> mdi mdi-comment-eye
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-eye-outline"></i> mdi
                                                mdi-comment-eye-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-multiple"></i> mdi mdi-comment-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-multiple-outline"></i> mdi
                                                mdi-comment-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-outline"></i> mdi mdi-comment-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-plus"></i> mdi mdi-comment-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-plus-outline"></i> mdi
                                                mdi-comment-plus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-processing"></i> mdi
                                                mdi-comment-processing
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-processing-outline"></i> mdi
                                                mdi-comment-processing-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-question"></i> mdi mdi-comment-question
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-question-outline"></i> mdi
                                                mdi-comment-question-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-remove"></i> mdi mdi-comment-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-remove-outline"></i> mdi
                                                mdi-comment-remove-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-search"></i> mdi mdi-comment-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-search-outline"></i> mdi
                                                mdi-comment-search-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-text"></i> mdi mdi-comment-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-text-multiple"></i> mdi
                                                mdi-comment-text-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-text-multiple-outline"></i> mdi
                                                mdi-comment-text-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-comment-text-outline"></i> mdi
                                                mdi-comment-text-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-compare"></i> mdi mdi-compare
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-compass"></i> mdi mdi-compass
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-compass-outline"></i> mdi mdi-compass-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-console"></i> mdi mdi-console
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-console-line"></i> mdi mdi-console-line
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-contact-mail"></i> mdi mdi-contact-mail
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-contacts"></i> mdi mdi-contacts
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-contain"></i> mdi mdi-contain
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-contain-end"></i> mdi mdi-contain-end
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-contain-start"></i> mdi mdi-contain-start
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-content-copy"></i> mdi mdi-content-copy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-content-cut"></i> mdi mdi-content-cut
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-content-duplicate"></i> mdi mdi-content-duplicate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-content-paste"></i> mdi mdi-content-paste
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-content-save"></i> mdi mdi-content-save
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-content-save-all"></i> mdi mdi-content-save-all
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-content-save-outline"></i> mdi
                                                mdi-content-save-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-content-save-settings"></i> mdi
                                                mdi-content-save-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-content-save-settings-outline"></i> mdi
                                                mdi-content-save-settings-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-contrast"></i> mdi mdi-contrast
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-contrast-box"></i> mdi mdi-contrast-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-contrast-circle"></i> mdi mdi-contrast-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cookie"></i> mdi mdi-cookie
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-copyright"></i> mdi mdi-copyright
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cordova"></i> mdi mdi-cordova
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-corn"></i> mdi mdi-corn
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-counter"></i> mdi mdi-counter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cow"></i> mdi mdi-cow
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-crane"></i> mdi mdi-crane
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-creation"></i> mdi mdi-creation
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-credit-card"></i> mdi mdi-credit-card
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-credit-card-multiple"></i> mdi
                                                mdi-credit-card-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-credit-card-off"></i> mdi mdi-credit-card-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-credit-card-plus"></i> mdi mdi-credit-card-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-credit-card-refund"></i> mdi
                                                mdi-credit-card-refund
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-credit-card-scan"></i> mdi mdi-credit-card-scan
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-credit-card-settings"></i> mdi
                                                mdi-credit-card-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-crop"></i> mdi mdi-crop
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-crop-free"></i> mdi mdi-crop-free
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-crop-landscape"></i> mdi mdi-crop-landscape
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-crop-portrait"></i> mdi mdi-crop-portrait
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-crop-rotate"></i> mdi mdi-crop-rotate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-crop-square"></i> mdi mdi-crop-square
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-crosshairs"></i> mdi mdi-crosshairs
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-crosshairs-gps"></i> mdi mdi-crosshairs-gps
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-crown"></i> mdi mdi-crown
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cryengine"></i> mdi mdi-cryengine
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-crystal-ball"></i> mdi mdi-crystal-ball
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cube"></i> mdi mdi-cube
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cube-outline"></i> mdi mdi-cube-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cube-send"></i> mdi mdi-cube-send
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cube-unfolded"></i> mdi mdi-cube-unfolded
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cup"></i> mdi mdi-cup
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cup-off"></i> mdi mdi-cup-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cup-water"></i> mdi mdi-cup-water
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cupcake"></i> mdi mdi-cupcake
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-curling"></i> mdi mdi-curling
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-bdt"></i> mdi mdi-currency-bdt
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-btc"></i> mdi mdi-currency-btc
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-chf"></i> mdi mdi-currency-chf
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-cny"></i> mdi mdi-currency-cny
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-eth"></i> mdi mdi-currency-eth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-eur"></i> mdi mdi-currency-eur
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-gbp"></i> mdi mdi-currency-gbp
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-inr"></i> mdi mdi-currency-inr
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-jpy"></i> mdi mdi-currency-jpy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-krw"></i> mdi mdi-currency-krw
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-kzt"></i> mdi mdi-currency-kzt
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-ngn"></i> mdi mdi-currency-ngn
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-php"></i> mdi mdi-currency-php
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-rub"></i> mdi mdi-currency-rub
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-sign"></i> mdi mdi-currency-sign
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-try"></i> mdi mdi-currency-try
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-twd"></i> mdi mdi-currency-twd
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-usd"></i> mdi mdi-currency-usd
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-currency-usd-off"></i> mdi mdi-currency-usd-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-current-ac"></i> mdi mdi-current-ac
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-current-dc"></i> mdi mdi-current-dc
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cursor-default"></i> mdi mdi-cursor-default
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cursor-default-outline"></i> mdi
                                                mdi-cursor-default-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cursor-move"></i> mdi mdi-cursor-move
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cursor-pointer"></i> mdi mdi-cursor-pointer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-cursor-text"></i> mdi mdi-cursor-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-database"></i> mdi mdi-database
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-database-check"></i> mdi mdi-database-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-database-export"></i> mdi mdi-database-export
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-database-import"></i> mdi mdi-database-import
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-database-lock"></i> mdi mdi-database-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-database-minus"></i> mdi mdi-database-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-database-plus"></i> mdi mdi-database-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-database-search"></i> mdi mdi-database-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-death-star"></i> mdi mdi-death-star
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-death-star-variant"></i> mdi
                                                mdi-death-star-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-debian"></i> mdi mdi-debian
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-debug-step-into"></i> mdi mdi-debug-step-into
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-debug-step-into"></i> mdi mdi-debug-step-into
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-debug-step-out"></i> mdi mdi-debug-step-out
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-debug-step-over"></i> mdi mdi-debug-step-over
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-decagram"></i> mdi mdi-decagram
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-decagram-outline"></i> mdi mdi-decagram-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-decimal-decrease"></i> mdi mdi-decimal-decrease
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-decimal-increase"></i> mdi mdi-decimal-increase
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-delete"></i> mdi mdi-delete
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-delete-circle"></i> mdi mdi-delete-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-delete-empty"></i> mdi mdi-delete-empty
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-delete-forever"></i> mdi mdi-delete-forever
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-delete-outline"></i> mdi mdi-delete-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-delete-restore"></i> mdi mdi-delete-restore
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-delete-sweep"></i> mdi mdi-delete-sweep
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-delete-variant"></i> mdi mdi-delete-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-delta"></i> mdi mdi-delta
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-desk-lamp"></i> mdi mdi-desk-lamp
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-deskphone"></i> mdi mdi-deskphone
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-desktop-classic"></i> mdi mdi-desktop-classic
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-desktop-mac"></i> mdi mdi-desktop-mac
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-desktop-mac-dashboard"></i> mdi
                                                mdi-desktop-mac-dashboard
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-desktop-tower"></i> mdi mdi-desktop-tower
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-desktop-tower-monitor"></i> mdi
                                                mdi-desktop-tower-monitor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-details"></i> mdi mdi-details
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-developer-board"></i> mdi mdi-developer-board
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-deviantart"></i> mdi mdi-deviantart
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dialpad"></i> mdi mdi-dialpad
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-diamond"></i> mdi mdi-diamond
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dice-1"></i> mdi mdi-dice-1
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dice-2"></i> mdi mdi-dice-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dice-3"></i> mdi mdi-dice-3
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dice-4"></i> mdi mdi-dice-4
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dice-5"></i> mdi mdi-dice-5
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dice-6"></i> mdi mdi-dice-6
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dice-d10"></i> mdi mdi-dice-d10
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dice-d12"></i> mdi mdi-dice-d12
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dice-d20"></i> mdi mdi-dice-d20
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dice-d4"></i> mdi mdi-dice-d4
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dice-d6"></i> mdi mdi-dice-d6
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dice-d8"></i> mdi mdi-dice-d8
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dice-multiple"></i> mdi mdi-dice-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dictionary"></i> mdi mdi-dictionary
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dip-switch"></i> mdi mdi-dip-switch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-directions"></i> mdi mdi-directions
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-directions-fork"></i> mdi mdi-directions-fork
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-disc"></i> mdi mdi-disc
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-disc-alert"></i> mdi mdi-disc-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-disc-player"></i> mdi mdi-disc-player
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-discord"></i> mdi mdi-discord
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dishwasher"></i> mdi mdi-dishwasher
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-disqus"></i> mdi mdi-disqus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-disqus-outline"></i> mdi mdi-disqus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-division"></i> mdi mdi-division
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-division-box"></i> mdi mdi-division-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dlna"></i> mdi mdi-dlna
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dna"></i> mdi mdi-dna
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dns"></i> mdi mdi-dns
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-do-not-disturb"></i> mdi mdi-do-not-disturb
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-do-not-disturb-off"></i> mdi
                                                mdi-do-not-disturb-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-docker"></i> mdi mdi-docker
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-doctor"></i> mdi mdi-doctor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dog"></i> mdi mdi-dog
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dog-service"></i> mdi mdi-dog-service
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dog-side"></i> mdi mdi-dog-side
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dolby"></i> mdi mdi-dolby
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-domain"></i> mdi mdi-domain
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-donkey"></i> mdi mdi-donkey
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-door"></i> mdi mdi-door
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-door-closed"></i> mdi mdi-door-closed
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-door-open"></i> mdi mdi-door-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-doorbell-video"></i> mdi mdi-doorbell-video
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dot-net"></i> mdi mdi-dot-net
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dots-horizontal"></i> mdi mdi-dots-horizontal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dots-horizontal-circle"></i> mdi
                                                mdi-dots-horizontal-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dots-vertical"></i> mdi mdi-dots-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dots-vertical-circle"></i> mdi
                                                mdi-dots-vertical-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-douban"></i> mdi mdi-douban
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-download"></i> mdi mdi-download
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-download-multiple"></i> mdi mdi-download-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-download-network"></i> mdi mdi-download-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-drag"></i> mdi mdi-drag
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-drag-horizontal"></i> mdi mdi-drag-horizontal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-drag-vertical"></i> mdi mdi-drag-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-drawing"></i> mdi mdi-drawing
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-drawing-box"></i> mdi mdi-drawing-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dribbble"></i> mdi mdi-dribbble
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dribbble-box"></i> mdi mdi-dribbble-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-drone"></i> mdi mdi-drone
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dropbox"></i> mdi mdi-dropbox
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-drupal"></i> mdi mdi-drupal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-duck"></i> mdi mdi-duck
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-dumbbell"></i> mdi mdi-dumbbell
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ear-hearing"></i> mdi mdi-ear-hearing
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ear-hearing-off"></i> mdi mdi-ear-hearing-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-earth"></i> mdi mdi-earth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-earth-box"></i> mdi mdi-earth-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-earth-box-off"></i> mdi mdi-earth-box-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-earth-off"></i> mdi mdi-earth-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-edge"></i> mdi mdi-edge
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-egg"></i> mdi mdi-egg
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-egg-easter"></i> mdi mdi-egg-easter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eight-track"></i> mdi mdi-eight-track
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eject"></i> mdi mdi-eject
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-elephant"></i> mdi mdi-elephant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-elevation-decline"></i> mdi mdi-elevation-decline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-elevation-rise"></i> mdi mdi-elevation-rise
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-elevator"></i> mdi mdi-elevator
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email"></i> mdi mdi-email
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email-alert"></i> mdi mdi-email-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email-check"></i> mdi mdi-email-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email-check-outline"></i> mdi
                                                mdi-email-check-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email-lock"></i> mdi mdi-email-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email-open"></i> mdi mdi-email-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email-open-outline"></i> mdi
                                                mdi-email-open-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email-outline"></i> mdi mdi-email-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email-plus"></i> mdi mdi-email-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email-plus-outline"></i> mdi
                                                mdi-email-plus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email-search"></i> mdi mdi-email-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email-search-outline"></i> mdi
                                                mdi-email-search-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-email-variant"></i> mdi mdi-email-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ember"></i> mdi mdi-ember
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emby"></i> mdi mdi-emby
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-outline"></i> mdi mdi-emoticon-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-cool-outline"></i> mdi
                                                mdi-emoticon-cool-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-dead-outline"></i> mdi
                                                mdi-emoticon-dead-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-devil-outline"></i> mdi
                                                mdi-emoticon-devil-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-excited-outline"></i> mdi
                                                mdi-emoticon-excited-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-happy-outline"></i> mdi
                                                mdi-emoticon-happy-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-neutral-outline"></i> mdi
                                                mdi-emoticon-neutral-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-poop"></i> mdi mdi-emoticon-poop
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-sad-outline"></i> mdi
                                                mdi-emoticon-sad-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-emoticon-tongue"></i> mdi mdi-emoticon-tongue
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-engine"></i> mdi mdi-engine
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-engine-off"></i> mdi mdi-engine-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-engine-off-outline"></i> mdi
                                                mdi-engine-off-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-engine-outline"></i> mdi mdi-engine-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-equal"></i> mdi mdi-equal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-equal-box"></i> mdi mdi-equal-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eraser"></i> mdi mdi-eraser
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eraser-variant"></i> mdi mdi-eraser-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-escalator"></i> mdi mdi-escalator
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-et"></i> mdi mdi-et
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ethereum"></i> mdi mdi-ethereum
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ethernet"></i> mdi mdi-ethernet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ethernet-cable"></i> mdi mdi-ethernet-cable
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ethernet-cable-off"></i> mdi
                                                mdi-ethernet-cable-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-etsy"></i> mdi mdi-etsy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ev-station"></i> mdi mdi-ev-station
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eventbrite"></i> mdi mdi-eventbrite
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-evernote"></i> mdi mdi-evernote
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-exclamation"></i> mdi mdi-exclamation
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-exit-run"></i> mdi mdi-exit-run
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-exit-to-app"></i> mdi mdi-exit-to-app
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-expand-all"></i> mdi mdi-expand-all
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-expand-all-outline"></i> mdi
                                                mdi-expand-all-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-exponent"></i> mdi mdi-exponent
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-exponent-box"></i> mdi mdi-exponent-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-export"></i> mdi mdi-export
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eye"></i> mdi mdi-eye
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eye-off"></i> mdi mdi-eye-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eye-off-outline"></i> mdi mdi-eye-off-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eye-outline"></i> mdi mdi-eye-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eye-plus"></i> mdi mdi-eye-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eye-plus-outline"></i> mdi mdi-eye-plus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eye-settings"></i> mdi mdi-eye-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eye-settings-outline"></i> mdi
                                                mdi-eye-settings-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eyedropper"></i> mdi mdi-eyedropper
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-eyedropper-variant"></i> mdi
                                                mdi-eyedropper-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-face"></i> mdi mdi-face
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-face-profile"></i> mdi mdi-face-profile
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-facebook"></i> mdi mdi-facebook
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-facebook-box"></i> mdi mdi-facebook-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-facebook-messenger"></i> mdi
                                                mdi-facebook-messenger
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-facebook-workplace"></i> mdi
                                                mdi-facebook-workplace
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-factory"></i> mdi mdi-factory
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fan"></i> mdi mdi-fan
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fan-off"></i> mdi mdi-fan-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fast-forward"></i> mdi mdi-fast-forward
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fast-forward-outline"></i> mdi
                                                mdi-fast-forward-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fax"></i> mdi mdi-fax
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-feather"></i> mdi mdi-feather
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-feature-search"></i> mdi mdi-feature-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-feature-search-outline"></i> mdi
                                                mdi-feature-search-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fedora"></i> mdi mdi-fedora
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ferry"></i> mdi mdi-ferry
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file"></i> mdi mdi-file
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-account"></i> mdi mdi-file-account
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-alert"></i> mdi mdi-file-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-alert-outline"></i> mdi
                                                mdi-file-alert-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-cabinet"></i> mdi mdi-file-cabinet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-chart"></i> mdi mdi-file-chart
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-check"></i> mdi mdi-file-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-cloud"></i> mdi mdi-file-cloud
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-compare"></i> mdi mdi-file-compare
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-delimited"></i> mdi mdi-file-delimited
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-document"></i> mdi mdi-file-document
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-document-box"></i> mdi mdi-file-document-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-document-box-multiple"></i> mdi
                                                mdi-file-document-box-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-document-box-multiple-outline"></i> mdi
                                                mdi-file-document-box-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-document-box-outline"></i> mdi
                                                mdi-file-document-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-document-outline"></i> mdi
                                                mdi-file-document-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-download"></i> mdi mdi-file-download
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-download-outline"></i> mdi
                                                mdi-file-download-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-excel"></i> mdi mdi-file-excel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-excel-box"></i> mdi mdi-file-excel-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-export"></i> mdi mdi-file-export
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-find"></i> mdi mdi-file-find
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-hidden"></i> mdi mdi-file-hidden
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-image"></i> mdi mdi-file-image
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-import"></i> mdi mdi-file-import
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-lock"></i> mdi mdi-file-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-move"></i> mdi mdi-file-move
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-multiple"></i> mdi mdi-file-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-music"></i> mdi mdi-file-music
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-outline"></i> mdi mdi-file-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-pdf"></i> mdi mdi-file-pdf
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-pdf-box"></i> mdi mdi-file-pdf-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-percent"></i> mdi mdi-file-percent
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-plus"></i> mdi mdi-file-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-powerpoint"></i> mdi mdi-file-powerpoint
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-powerpoint-box"></i> mdi
                                                mdi-file-powerpoint-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-presentation-box"></i> mdi
                                                mdi-file-presentation-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-question"></i> mdi mdi-file-question
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-replace"></i> mdi mdi-file-replace
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-replace-outline"></i> mdi
                                                mdi-file-replace-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-restore"></i> mdi mdi-file-restore
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-send"></i> mdi mdi-file-send
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-tree"></i> mdi mdi-file-tree
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-undo"></i> mdi mdi-file-undo
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-upload"></i> mdi mdi-file-upload
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-upload-outline"></i> mdi
                                                mdi-file-upload-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-video"></i> mdi mdi-file-video
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-word"></i> mdi mdi-file-word
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-word-box"></i> mdi mdi-file-word-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-file-xml"></i> mdi mdi-file-xml
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-film"></i> mdi mdi-film
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-filmstrip"></i> mdi mdi-filmstrip
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-filmstrip-off"></i> mdi mdi-filmstrip-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-filter"></i> mdi mdi-filter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-filter-outline"></i> mdi mdi-filter-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-filter-remove"></i> mdi mdi-filter-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-filter-remove-outline"></i> mdi
                                                mdi-filter-remove-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-filter-variant"></i> mdi mdi-filter-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-finance"></i> mdi mdi-finance
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-find-replace"></i> mdi mdi-find-replace
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fingerprint"></i> mdi mdi-fingerprint
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fire"></i> mdi mdi-fire
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fire-truck"></i> mdi mdi-fire-truck
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fire-truck"></i> mdi mdi-fire-truck
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-firebase"></i> mdi mdi-firebase
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-firefox"></i> mdi mdi-firefox
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fish"></i> mdi mdi-fish
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flag"></i> mdi mdi-flag
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flag-checkered"></i> mdi mdi-flag-checkered
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flag-outline"></i> mdi mdi-flag-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flag-triangle"></i> mdi mdi-flag-triangle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flag-variant"></i> mdi mdi-flag-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flag-variant-outline"></i> mdi
                                                mdi-flag-variant-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flash"></i> mdi mdi-flash
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flash-auto"></i> mdi mdi-flash-auto
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flash-circle"></i> mdi mdi-flash-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flash-off"></i> mdi mdi-flash-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flash-outline"></i> mdi mdi-flash-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flash-red-eye"></i> mdi mdi-flash-red-eye
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flashlight"></i> mdi mdi-flashlight
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flashlight-off"></i> mdi mdi-flashlight-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flask"></i> mdi mdi-flask
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flask-empty"></i> mdi mdi-flask-empty
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flask-empty-outline"></i> mdi
                                                mdi-flask-empty-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flask-outline"></i> mdi mdi-flask-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flattr"></i> mdi mdi-flattr
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flip-to-back"></i> mdi mdi-flip-to-back
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flip-to-front"></i> mdi mdi-flip-to-front
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-floor-lamp"></i> mdi mdi-floor-lamp
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-floor-plan"></i> mdi mdi-floor-plan
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-floppy"></i> mdi mdi-floppy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-floppy-variant"></i> mdi mdi-floppy-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flower"></i> mdi mdi-flower
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flower-outline"></i> mdi mdi-flower-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flower-tulip"></i> mdi mdi-flower-tulip
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-flower-tulip-outline"></i> mdi
                                                mdi-flower-tulip-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder"></i> mdi mdi-folder
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-account"></i> mdi mdi-folder-account
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-clock"></i> mdi mdi-folder-clock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-clock-outline"></i> mdi
                                                mdi-folder-clock-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-download"></i> mdi mdi-folder-download
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-edit"></i> mdi mdi-folder-edit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-google-drive"></i> mdi
                                                mdi-folder-google-drive
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-image"></i> mdi mdi-folder-image
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-key"></i> mdi mdi-folder-key
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-lock"></i> mdi mdi-folder-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-lock-open"></i> mdi mdi-folder-lock-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-move"></i> mdi mdi-folder-move
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-multiple"></i> mdi mdi-folder-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-multiple-image"></i> mdi
                                                mdi-folder-multiple-image
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-multiple-outline"></i> mdi
                                                mdi-folder-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-open"></i> mdi mdi-folder-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-outline"></i> mdi mdi-folder-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-plus"></i> mdi mdi-folder-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-remove"></i> mdi mdi-folder-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-search"></i> mdi mdi-folder-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-search-outline"></i> mdi
                                                mdi-folder-search-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-star"></i> mdi mdi-folder-star
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-folder-upload"></i> mdi mdi-folder-upload
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-font-awesome"></i> mdi mdi-font-awesome
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-food"></i> mdi mdi-food
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-food-apple"></i> mdi mdi-food-apple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-food-croissant"></i> mdi mdi-food-croissant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-food-fork-drink"></i> mdi mdi-food-fork-drink
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-food-off"></i> mdi mdi-food-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-food-variant"></i> mdi mdi-food-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-football"></i> mdi mdi-football
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-football-australian"></i> mdi
                                                mdi-football-australian
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-football-helmet"></i> mdi mdi-football-helmet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-forklift"></i> mdi mdi-forklift
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-align-bottom"></i> mdi
                                                mdi-format-align-bottom
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-align-center"></i> mdi
                                                mdi-format-align-center
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-align-justify"></i> mdi
                                                mdi-format-align-justify
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-align-left"></i> mdi mdi-format-align-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-align-middle"></i> mdi
                                                mdi-format-align-middle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-align-right"></i> mdi
                                                mdi-format-align-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-align-top"></i> mdi mdi-format-align-top
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-annotation-minus"></i> mdi
                                                mdi-format-annotation-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-annotation-plus"></i> mdi
                                                mdi-format-annotation-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-bold"></i> mdi mdi-format-bold
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-clear"></i> mdi mdi-format-clear
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-color-fill"></i> mdi mdi-format-color-fill
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-color-text"></i> mdi mdi-format-color-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-columns"></i> mdi mdi-format-columns
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-float-center"></i> mdi
                                                mdi-format-float-center
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-float-left"></i> mdi mdi-format-float-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-float-none"></i> mdi mdi-format-float-none
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-float-right"></i> mdi
                                                mdi-format-float-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-font"></i> mdi mdi-format-font
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-font-size-decrease"></i> mdi
                                                mdi-format-font-size-decrease
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-font-size-increase"></i> mdi
                                                mdi-format-font-size-increase
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-header-1"></i> mdi mdi-format-header-1
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-header-2"></i> mdi mdi-format-header-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-header-3"></i> mdi mdi-format-header-3
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-header-4"></i> mdi mdi-format-header-4
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-header-5"></i> mdi mdi-format-header-5
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-header-6"></i> mdi mdi-format-header-6
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-header-decrease"></i> mdi
                                                mdi-format-header-decrease
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-header-equal"></i> mdi
                                                mdi-format-header-equal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-header-increase"></i> mdi
                                                mdi-format-header-increase
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-header-pound"></i> mdi
                                                mdi-format-header-pound
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-horizontal-align-center"></i> mdi
                                                mdi-format-horizontal-align-center
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-horizontal-align-left"></i> mdi
                                                mdi-format-horizontal-align-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-horizontal-align-right"></i> mdi
                                                mdi-format-horizontal-align-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-indent-decrease"></i> mdi
                                                mdi-format-indent-decrease
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-indent-increase"></i> mdi
                                                mdi-format-indent-increase
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-italic"></i> mdi mdi-format-italic
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-letter-case"></i> mdi
                                                mdi-format-letter-case
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-letter-case-lower"></i> mdi
                                                mdi-format-letter-case-lower
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-letter-case-upper"></i> mdi
                                                mdi-format-letter-case-upper
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-line-spacing"></i> mdi
                                                mdi-format-line-spacing
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-line-style"></i> mdi mdi-format-line-style
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-line-weight"></i> mdi
                                                mdi-format-line-weight
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-list-bulleted"></i> mdi
                                                mdi-format-list-bulleted
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-list-bulleted-type"></i> mdi
                                                mdi-format-list-bulleted-type
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-list-checkbox"></i> mdi
                                                mdi-format-list-checkbox
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-list-checks"></i> mdi
                                                mdi-format-list-checks
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-list-numbered"></i> mdi
                                                mdi-format-list-numbered
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-page-break"></i> mdi mdi-format-page-break
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-paint"></i> mdi mdi-format-paint
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-paragraph"></i> mdi mdi-format-paragraph
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-pilcrow"></i> mdi mdi-format-pilcrow
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-quote-close"></i> mdi
                                                mdi-format-quote-close
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-quote-open"></i> mdi mdi-format-quote-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-rotate-90"></i> mdi mdi-format-rotate-90
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-section"></i> mdi mdi-format-section
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-size"></i> mdi mdi-format-size
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-strikethrough"></i> mdi
                                                mdi-format-strikethrough
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-strikethrough-variant"></i> mdi
                                                mdi-format-strikethrough-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-subscript"></i> mdi mdi-format-subscript
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-superscript"></i> mdi
                                                mdi-format-superscript
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-text"></i> mdi mdi-format-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-textdirection-l-to-r"></i> mdi
                                                mdi-format-textdirection-l-to-r
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-textdirection-r-to-l"></i> mdi
                                                mdi-format-textdirection-r-to-l
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-title"></i> mdi mdi-format-title
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-underline"></i> mdi mdi-format-underline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-vertical-align-bottom"></i> mdi
                                                mdi-format-vertical-align-bottom
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-vertical-align-center"></i> mdi
                                                mdi-format-vertical-align-center
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-vertical-align-top"></i> mdi
                                                mdi-format-vertical-align-top
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-wrap-inline"></i> mdi
                                                mdi-format-wrap-inline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-wrap-square"></i> mdi
                                                mdi-format-wrap-square
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-wrap-tight"></i> mdi mdi-format-wrap-tight
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-format-wrap-top-bottom"></i> mdi
                                                mdi-format-wrap-top-bottom
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-forum"></i> mdi mdi-forum
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-forum-outline"></i> mdi mdi-forum-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-forward"></i> mdi mdi-forward
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fountain"></i> mdi mdi-fountain
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-foursquare"></i> mdi mdi-foursquare
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-freebsd"></i> mdi mdi-freebsd
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fridge-outline"></i> mdi mdi-fridge-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fridge"></i> mdi mdi-fridge
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fridge-bottom"></i> mdi mdi-fridge-bottom
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fridge-top"></i> mdi mdi-fridge-top
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fuel"></i> mdi mdi-fuel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fullscreen"></i> mdi mdi-fullscreen
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-fullscreen-exit"></i> mdi mdi-fullscreen-exit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-function"></i> mdi mdi-function
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-function-variant"></i> mdi mdi-function-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gamepad"></i> mdi mdi-gamepad
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gamepad-variant"></i> mdi mdi-gamepad-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-garage"></i> mdi mdi-garage
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-garage-alert"></i> mdi mdi-garage-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-garage-open"></i> mdi mdi-garage-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gas-cylinder"></i> mdi mdi-gas-cylinder
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gas-station"></i> mdi mdi-gas-station
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gate"></i> mdi mdi-gate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gate-and"></i> mdi mdi-gate-and
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gate-nand"></i> mdi mdi-gate-nand
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gate-nor"></i> mdi mdi-gate-nor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gate-not"></i> mdi mdi-gate-not
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gate-or"></i> mdi mdi-gate-or
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gate-xnor"></i> mdi mdi-gate-xnor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gate-xor"></i> mdi mdi-gate-xor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gauge"></i> mdi mdi-gauge
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gauge-empty"></i> mdi mdi-gauge-empty
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gauge-full"></i> mdi mdi-gauge-full
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gauge-low"></i> mdi mdi-gauge-low
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gavel"></i> mdi mdi-gavel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gender-female"></i> mdi mdi-gender-female
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gender-male"></i> mdi mdi-gender-male
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gender-male-female"></i> mdi
                                                mdi-gender-male-female
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gender-transgender"></i> mdi
                                                mdi-gender-transgender
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gentoo"></i> mdi mdi-gentoo
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture"></i> mdi mdi-gesture
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture-double-tap"></i> mdi
                                                mdi-gesture-double-tap
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture-pinch"></i> mdi mdi-gesture-pinch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture-spread"></i> mdi mdi-gesture-spread
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture-swipe-down"></i> mdi
                                                mdi-gesture-swipe-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture-swipe-horizontal"></i> mdi
                                                mdi-gesture-swipe-horizontal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture-swipe-left"></i> mdi
                                                mdi-gesture-swipe-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture-swipe-right"></i> mdi
                                                mdi-gesture-swipe-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture-swipe-up"></i> mdi mdi-gesture-swipe-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture-swipe-vertical"></i> mdi
                                                mdi-gesture-swipe-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture-tap"></i> mdi mdi-gesture-tap
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture-two-double-tap"></i> mdi
                                                mdi-gesture-two-double-tap
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gesture-two-tap"></i> mdi mdi-gesture-two-tap
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ghost"></i> mdi mdi-ghost
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ghost-off"></i> mdi mdi-ghost-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gift"></i> mdi mdi-gift
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-git"></i> mdi mdi-git
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-github-box"></i> mdi mdi-github-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-github-circle"></i> mdi mdi-github-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-github-face"></i> mdi mdi-github-face
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-glass-cocktail"></i> mdi mdi-glass-cocktail
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-glass-flute"></i> mdi mdi-glass-flute
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-glass-mug"></i> mdi mdi-glass-mug
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-glass-stange"></i> mdi mdi-glass-stange
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-glass-tulip"></i> mdi mdi-glass-tulip
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-glass-wine"></i> mdi mdi-glass-wine
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-glassdoor"></i> mdi mdi-glassdoor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-glasses"></i> mdi mdi-glasses
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-globe-model"></i> mdi mdi-globe-model
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gmail"></i> mdi mdi-gmail
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gnome"></i> mdi mdi-gnome
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-golf"></i> mdi mdi-golf
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gondola"></i> mdi mdi-gondola
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google"></i> mdi mdi-google
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-allo"></i> mdi mdi-google-allo
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-analytics"></i> mdi mdi-google-analytics
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-assistant"></i> mdi mdi-google-assistant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-cardboard"></i> mdi mdi-google-cardboard
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-chrome"></i> mdi mdi-google-chrome
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-circles"></i> mdi mdi-google-circles
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-circles-communities"></i> mdi
                                                mdi-google-circles-communities
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-circles-extended"></i> mdi
                                                mdi-google-circles-extended
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-circles-group"></i> mdi
                                                mdi-google-circles-group
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-controller"></i> mdi mdi-google-controller
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-controller-off"></i> mdi
                                                mdi-google-controller-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-drive"></i> mdi mdi-google-drive
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-earth"></i> mdi mdi-google-earth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-fit"></i> mdi mdi-google-fit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-glass"></i> mdi mdi-google-glass
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-hangouts"></i> mdi mdi-google-hangouts
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-home"></i> mdi mdi-google-home
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-keep"></i> mdi mdi-google-keep
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-lens"></i> mdi mdi-google-lens
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-maps"></i> mdi mdi-google-maps
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-nearby"></i> mdi mdi-google-nearby
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-pages"></i> mdi mdi-google-pages
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-photos"></i> mdi mdi-google-photos
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-physical-web"></i> mdi
                                                mdi-google-physical-web
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-play"></i> mdi mdi-google-play
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-plus"></i> mdi mdi-google-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-plus-box"></i> mdi mdi-google-plus-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-spreadsheet"></i> mdi
                                                mdi-google-spreadsheet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-translate"></i> mdi mdi-google-translate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-google-wallet"></i> mdi mdi-google-wallet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gpu"></i> mdi mdi-gpu
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-gradient"></i> mdi mdi-gradient
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-graphql"></i> mdi mdi-graphql
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-grease-pencil"></i> mdi mdi-grease-pencil
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-greater-than"></i> mdi mdi-greater-than
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-greater-than-or-equal"></i> mdi
                                                mdi-greater-than-or-equal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-grid"></i> mdi mdi-grid
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-grid-large"></i> mdi mdi-grid-large
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-grid-off"></i> mdi mdi-grid-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-group"></i> mdi mdi-group
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-guitar-acoustic"></i> mdi mdi-guitar-acoustic
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-guitar-electric"></i> mdi mdi-guitar-electric
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-guitar-pick"></i> mdi mdi-guitar-pick
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-guitar-pick-outline"></i> mdi
                                                mdi-guitar-pick-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-guy-fawkes-mask"></i> mdi mdi-guy-fawkes-mask
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hackernews"></i> mdi mdi-hackernews
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hail"></i> mdi mdi-hail
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hamburger"></i> mdi mdi-hamburger
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hammer"></i> mdi mdi-hammer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hand"></i> mdi mdi-hand
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hand-okay"></i> mdi mdi-hand-okay
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hand-peace"></i> mdi mdi-hand-peace
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hand-peace-variant"></i> mdi
                                                mdi-hand-peace-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hand-pointing-down"></i> mdi
                                                mdi-hand-pointing-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hand-pointing-left"></i> mdi
                                                mdi-hand-pointing-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hand-pointing-right"></i> mdi
                                                mdi-hand-pointing-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hand-pointing-up"></i> mdi mdi-hand-pointing-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hanger"></i> mdi mdi-hanger
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hard-hat"></i> mdi mdi-hard-hat
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-harddisk"></i> mdi mdi-harddisk
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-headphones"></i> mdi mdi-headphones
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-headphones-bluetooth"></i> mdi
                                                mdi-headphones-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-headphones-box"></i> mdi mdi-headphones-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-headphones-off"></i> mdi mdi-headphones-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-headphones-settings"></i> mdi
                                                mdi-headphones-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-headset"></i> mdi mdi-headset
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-headset-dock"></i> mdi mdi-headset-dock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-headset-off"></i> mdi mdi-headset-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart"></i> mdi mdi-heart
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart-box"></i> mdi mdi-heart-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart-box-outline"></i> mdi mdi-heart-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart-broken"></i> mdi mdi-heart-broken
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart-circle"></i> mdi mdi-heart-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart-circle-outline"></i> mdi
                                                mdi-heart-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart-half"></i> mdi mdi-heart-half
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart-half-full"></i> mdi mdi-heart-half-full
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart-half-outline"></i> mdi
                                                mdi-heart-half-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart-multiple"></i> mdi mdi-heart-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart-multiple-outline"></i> mdi
                                                mdi-heart-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart-off"></i> mdi mdi-heart-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart-outline"></i> mdi mdi-heart-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-heart-pulse"></i> mdi mdi-heart-pulse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-helicopter"></i> mdi mdi-helicopter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-help"></i> mdi mdi-help
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-help-box"></i> mdi mdi-help-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-help-circle"></i> mdi mdi-help-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-help-circle-outline"></i> mdi
                                                mdi-help-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-help-network"></i> mdi mdi-help-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hexagon"></i> mdi mdi-hexagon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hexagon-multiple"></i> mdi mdi-hexagon-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hexagon-outline"></i> mdi mdi-hexagon-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hexagon-slice-1"></i> mdi mdi-hexagon-slice-1
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hexagon-slice-2"></i> mdi mdi-hexagon-slice-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hexagon-slice-3"></i> mdi mdi-hexagon-slice-3
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hexagon-slice-4"></i> mdi mdi-hexagon-slice-4
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hexagon-slice-5"></i> mdi mdi-hexagon-slice-5
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hexagon-slice-6"></i> mdi mdi-hexagon-slice-6
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hexagram"></i> mdi mdi-hexagram
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hexagram-outline"></i> mdi mdi-hexagram-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-high-definition"></i> mdi mdi-high-definition
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-high-definition-box"></i> mdi
                                                mdi-high-definition-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-highway"></i> mdi mdi-highway
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hinduism"></i> mdi mdi-hinduism
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-history"></i> mdi mdi-history
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hockey-puck"></i> mdi mdi-hockey-puck
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hockey-sticks"></i> mdi mdi-hockey-sticks
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hololens"></i> mdi mdi-hololens
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home"></i> mdi mdi-home
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-account"></i> mdi mdi-home-account
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-alert"></i> mdi mdi-home-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-assistant"></i> mdi mdi-home-assistant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-automation"></i> mdi mdi-home-automation
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-circle"></i> mdi mdi-home-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-currency-usd"></i> mdi mdi-home-currency-usd
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-heart"></i> mdi mdi-home-heart
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-lock"></i> mdi mdi-home-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-lock-open"></i> mdi mdi-home-lock-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-map-marker"></i> mdi mdi-home-map-marker
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-minus"></i> mdi mdi-home-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-modern"></i> mdi mdi-home-modern
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-outline"></i> mdi mdi-home-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-plus"></i> mdi mdi-home-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-home-variant"></i> mdi mdi-home-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hook"></i> mdi mdi-hook
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hook-off"></i> mdi mdi-hook-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hops"></i> mdi mdi-hops
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-horseshoe"></i> mdi mdi-horseshoe
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hospital"></i> mdi mdi-hospital
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hospital-building"></i> mdi mdi-hospital-building
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hospital-marker"></i> mdi mdi-hospital-marker
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hot-tub"></i> mdi mdi-hot-tub
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hotel"></i> mdi mdi-hotel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-houzz"></i> mdi mdi-houzz
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-houzz-box"></i> mdi mdi-houzz-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-hulu"></i> mdi mdi-hulu
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human"></i> mdi mdi-human
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human-child"></i> mdi mdi-human-child
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human-female"></i> mdi mdi-human-female
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human-female-boy"></i> mdi mdi-human-female-boy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human-female-female"></i> mdi
                                                mdi-human-female-female
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human-female-girl"></i> mdi mdi-human-female-girl
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human-greeting"></i> mdi mdi-human-greeting
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human-handsdown"></i> mdi mdi-human-handsdown
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human-handsup"></i> mdi mdi-human-handsup
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human-male"></i> mdi mdi-human-male
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human-male-boy"></i> mdi mdi-human-male-boy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human-male-female"></i> mdi mdi-human-male-female
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human-male-girl"></i> mdi mdi-human-male-girl
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human-male-male"></i> mdi mdi-human-male-male
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-human-pregnant"></i> mdi mdi-human-pregnant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-humble-bundle"></i> mdi mdi-humble-bundle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ice-cream"></i> mdi mdi-ice-cream
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image"></i> mdi mdi-image
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-album"></i> mdi mdi-image-album
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-area"></i> mdi mdi-image-area
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-area-close"></i> mdi mdi-image-area-close
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-broken"></i> mdi mdi-image-broken
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-broken-variant"></i> mdi
                                                mdi-image-broken-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-filter"></i> mdi mdi-image-filter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-filter-black-white"></i> mdi
                                                mdi-image-filter-black-white
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-filter-center-focus"></i> mdi
                                                mdi-image-filter-center-focus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-filter-center-focus-weak"></i> mdi
                                                mdi-image-filter-center-focus-weak
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-filter-drama"></i> mdi
                                                mdi-image-filter-drama
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-filter-frames"></i> mdi
                                                mdi-image-filter-frames
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-filter-hdr"></i> mdi mdi-image-filter-hdr
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-filter-none"></i> mdi mdi-image-filter-none
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-filter-tilt-shift"></i> mdi
                                                mdi-image-filter-tilt-shift
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-filter-vintage"></i> mdi
                                                mdi-image-filter-vintage
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-move"></i> mdi mdi-image-move
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-multiple"></i> mdi mdi-image-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-off"></i> mdi mdi-image-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-outline"></i> mdi mdi-image-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-plus"></i> mdi mdi-image-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-search"></i> mdi mdi-image-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-image-search-outline"></i> mdi
                                                mdi-image-search-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-import"></i> mdi mdi-import
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-inbox"></i> mdi mdi-inbox
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-inbox-arrow-down"></i> mdi mdi-inbox-arrow-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-inbox-arrow-up"></i> mdi mdi-inbox-arrow-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-inbox-multiple"></i> mdi mdi-inbox-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-incognito"></i> mdi mdi-incognito
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-infinity"></i> mdi mdi-infinity
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-information"></i> mdi mdi-information
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-information-outline"></i> mdi
                                                mdi-information-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-information-variant"></i> mdi
                                                mdi-information-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-instagram"></i> mdi mdi-instagram
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-instapaper"></i> mdi mdi-instapaper
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-internet-explorer"></i> mdi mdi-internet-explorer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-invert-colors"></i> mdi mdi-invert-colors
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ip"></i> mdi mdi-ip
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-islam"></i> mdi mdi-islam
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-itunes"></i> mdi mdi-itunes
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-jeepney"></i> mdi mdi-jeepney
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-jira"></i> mdi mdi-jira
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-jquery"></i> mdi mdi-jquery
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-jsfiddle"></i> mdi mdi-jsfiddle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-json"></i> mdi mdi-json
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-judaism"></i> mdi mdi-judaism
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-karate"></i> mdi mdi-karate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-keg"></i> mdi mdi-keg
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-kettle"></i> mdi mdi-kettle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-key"></i> mdi mdi-key
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-key-change"></i> mdi mdi-key-change
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-key-minus"></i> mdi mdi-key-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-key-plus"></i> mdi mdi-key-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-key-remove"></i> mdi mdi-key-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-key-variant"></i> mdi mdi-key-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-keyboard"></i> mdi mdi-keyboard
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-keyboard-backspace"></i> mdi
                                                mdi-keyboard-backspace
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-keyboard-caps"></i> mdi mdi-keyboard-caps
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-keyboard-close"></i> mdi mdi-keyboard-close
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-keyboard-off"></i> mdi mdi-keyboard-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-keyboard-outline"></i> mdi mdi-keyboard-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-keyboard-return"></i> mdi mdi-keyboard-return
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-keyboard-settings"></i> mdi mdi-keyboard-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-keyboard-settings-outline"></i> mdi
                                                mdi-keyboard-settings-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-keyboard-tab"></i> mdi mdi-keyboard-tab
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-keyboard-variant"></i> mdi mdi-keyboard-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-kickstarter"></i> mdi mdi-kickstarter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-knife"></i> mdi mdi-knife
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-knife-military"></i> mdi mdi-knife-military
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-kodi"></i> mdi mdi-kodi
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-label"></i> mdi mdi-label
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-label-off"></i> mdi mdi-label-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-label-off-outline"></i> mdi mdi-label-off-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-label-outline"></i> mdi mdi-label-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-label-variant"></i> mdi mdi-label-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-label-variant-outline"></i> mdi
                                                mdi-label-variant-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ladybug"></i> mdi mdi-ladybug
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lambda"></i> mdi mdi-lambda
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lamp"></i> mdi mdi-lamp
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lan"></i> mdi mdi-lan
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lan-connect"></i> mdi mdi-lan-connect
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lan-disconnect"></i> mdi mdi-lan-disconnect
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lan-pending"></i> mdi mdi-lan-pending
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-c"></i> mdi mdi-language-c
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-cpp"></i> mdi mdi-language-cpp
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-csharp"></i> mdi mdi-language-csharp
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-css3"></i> mdi mdi-language-css3
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-go"></i> mdi mdi-language-go
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-html5"></i> mdi mdi-language-html5
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-java"></i> mdi mdi-language-java
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-javascript"></i> mdi
                                                mdi-language-javascript
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-lua"></i> mdi mdi-language-lua
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-php"></i> mdi mdi-language-php
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-python"></i> mdi mdi-language-python
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-python-text"></i> mdi
                                                mdi-language-python-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-r"></i> mdi mdi-language-r
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-ruby-on-rails"></i> mdi
                                                mdi-language-ruby-on-rails
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-swift"></i> mdi mdi-language-swift
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-language-typescript"></i> mdi
                                                mdi-language-typescript
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-laptop"></i> mdi mdi-laptop
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-laptop-chromebook"></i> mdi mdi-laptop-chromebook
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-laptop-mac"></i> mdi mdi-laptop-mac
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-laptop-off"></i> mdi mdi-laptop-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-laptop-windows"></i> mdi mdi-laptop-windows
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-laravel"></i> mdi mdi-laravel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lastfm"></i> mdi mdi-lastfm
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lastpass"></i> mdi mdi-lastpass
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-launch"></i> mdi mdi-launch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lava-lamp"></i> mdi mdi-lava-lamp
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-layers"></i> mdi mdi-layers
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-layers-off"></i> mdi mdi-layers-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-layers-off-outline"></i> mdi
                                                mdi-layers-off-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-layers-outline"></i> mdi mdi-layers-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lead-pencil"></i> mdi mdi-lead-pencil
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-leaf"></i> mdi mdi-leaf
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-led-off"></i> mdi mdi-led-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-led-on"></i> mdi mdi-led-on
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-led-outline"></i> mdi mdi-led-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-led-strip"></i> mdi mdi-led-strip
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-led-variant-off"></i> mdi mdi-led-variant-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-led-variant-on"></i> mdi mdi-led-variant-on
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-led-variant-outline"></i> mdi
                                                mdi-led-variant-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-less-than"></i> mdi mdi-less-than
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-less-than-or-equal"></i> mdi
                                                mdi-less-than-or-equal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-library"></i> mdi mdi-library
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-library-books"></i> mdi mdi-library-books
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-library-music"></i> mdi mdi-library-music
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-library-plus"></i> mdi mdi-library-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lifebuoy"></i> mdi mdi-lifebuoy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-light-switch"></i> mdi mdi-light-switch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lightbulb"></i> mdi mdi-lightbulb
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lightbulb-on"></i> mdi mdi-lightbulb-on
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lightbulb-on-outline"></i> mdi
                                                mdi-lightbulb-on-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lightbulb-outline"></i> mdi mdi-lightbulb-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lighthouse"></i> mdi mdi-lighthouse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lighthouse-on"></i> mdi mdi-lighthouse-on
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-link-variant"></i> mdi mdi-link-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-link-variant-off"></i> mdi mdi-link-variant-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-linkedin"></i> mdi mdi-linkedin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-linkedin-box"></i> mdi mdi-linkedin-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-linux"></i> mdi mdi-linux
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-linux-mint"></i> mdi mdi-linux-mint
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-litecoin"></i> mdi mdi-litecoin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-loading"></i> mdi mdi-loading
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lock"></i> mdi mdi-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lock-alert"></i> mdi mdi-lock-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lock-clock"></i> mdi mdi-lock-clock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lock-open"></i> mdi mdi-lock-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lock-open-outline"></i> mdi mdi-lock-open-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lock-outline"></i> mdi mdi-lock-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lock-pattern"></i> mdi mdi-lock-pattern
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lock-plus"></i> mdi mdi-lock-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lock-question"></i> mdi mdi-lock-question
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lock-reset"></i> mdi mdi-lock-reset
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lock-smart"></i> mdi mdi-lock-smart
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-locker"></i> mdi mdi-locker
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-locker-multiple"></i> mdi mdi-locker-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-login-variant"></i> mdi mdi-login-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-logout-variant"></i> mdi mdi-logout-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-looks"></i> mdi mdi-looks
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-loop"></i> mdi mdi-loop
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-loupe"></i> mdi mdi-loupe
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lumx"></i> mdi mdi-lumx
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-lyft"></i> mdi mdi-lyft
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-magnet"></i> mdi mdi-magnet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-magnet-on"></i> mdi mdi-magnet-on
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-magnify"></i> mdi mdi-magnify
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-magnify-close"></i> mdi mdi-magnify-close
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-magnify-minus"></i> mdi mdi-magnify-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-magnify-minus-cursor"></i> mdi
                                                mdi-magnify-minus-cursor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-magnify-minus-outline"></i> mdi
                                                mdi-magnify-minus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-magnify-plus"></i> mdi mdi-magnify-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-magnify-plus-cursor"></i> mdi
                                                mdi-magnify-plus-cursor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-magnify-plus-outline"></i> mdi
                                                mdi-magnify-plus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mail-ru"></i> mdi mdi-mail-ru
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mailbox"></i> mdi mdi-mailbox
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map"></i> mdi mdi-map
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-legend"></i> mdi mdi-map-legend
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-marker"></i> mdi mdi-map-marker
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-marker-circle"></i> mdi mdi-map-marker-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-marker-distance"></i> mdi
                                                mdi-map-marker-distance
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-marker-minus"></i> mdi mdi-map-marker-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-marker-multiple"></i> mdi
                                                mdi-map-marker-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-marker-off"></i> mdi mdi-map-marker-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-marker-outline"></i> mdi
                                                mdi-map-marker-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-marker-plus"></i> mdi mdi-map-marker-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-marker-radius"></i> mdi mdi-map-marker-radius
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-minus"></i> mdi mdi-map-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-outline"></i> mdi mdi-map-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-plus"></i> mdi mdi-map-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-search"></i> mdi mdi-map-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-map-search-outline"></i> mdi
                                                mdi-map-search-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-margin"></i> mdi mdi-margin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-markdown"></i> mdi mdi-markdown
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-marker"></i> mdi mdi-marker
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-marker-check"></i> mdi mdi-marker-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mastodon"></i> mdi mdi-mastodon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mastodon-variant"></i> mdi mdi-mastodon-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-material-design"></i> mdi mdi-material-design
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-material-ui"></i> mdi mdi-material-ui
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-math-compass"></i> mdi mdi-math-compass
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-matrix"></i> mdi mdi-matrix
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-maxcdn"></i> mdi mdi-maxcdn
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-medal"></i> mdi mdi-medal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-medical-bag"></i> mdi mdi-medical-bag
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-medium"></i> mdi mdi-medium
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-meetup"></i> mdi mdi-meetup
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-memory"></i> mdi mdi-memory
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-menu"></i> mdi mdi-menu
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-menu-down"></i> mdi mdi-menu-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-menu-down-outline"></i> mdi mdi-menu-down-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-menu-left"></i> mdi mdi-menu-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-menu-left-outline"></i> mdi mdi-menu-left-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-menu-right"></i> mdi mdi-menu-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-menu-right-outline"></i> mdi
                                                mdi-menu-right-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-menu-swap"></i> mdi mdi-menu-swap
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-menu-swap-outline"></i> mdi mdi-menu-swap-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-menu-up"></i> mdi mdi-menu-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-menu-up-outline"></i> mdi mdi-menu-up-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message"></i> mdi mdi-message
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-alert"></i> mdi mdi-message-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-alert-outline"></i> mdi
                                                mdi-message-alert-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-bulleted"></i> mdi mdi-message-bulleted
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-bulleted-off"></i> mdi
                                                mdi-message-bulleted-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-draw"></i> mdi mdi-message-draw
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-image"></i> mdi mdi-message-image
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-outline"></i> mdi mdi-message-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-plus"></i> mdi mdi-message-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-processing"></i> mdi
                                                mdi-message-processing
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-reply"></i> mdi mdi-message-reply
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-reply-text"></i> mdi
                                                mdi-message-reply-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-settings"></i> mdi mdi-message-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-settings-variant"></i> mdi
                                                mdi-message-settings-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-text"></i> mdi mdi-message-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-text-outline"></i> mdi
                                                mdi-message-text-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-message-video"></i> mdi mdi-message-video
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-meteor"></i> mdi mdi-meteor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-metronome"></i> mdi mdi-metronome
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-metronome-tick"></i> mdi mdi-metronome-tick
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-micro-sd"></i> mdi mdi-micro-sd
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-microphone"></i> mdi mdi-microphone
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-microphone-minus"></i> mdi mdi-microphone-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-microphone-off"></i> mdi mdi-microphone-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-microphone-outline"></i> mdi
                                                mdi-microphone-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-microphone-plus"></i> mdi mdi-microphone-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-microphone-settings"></i> mdi
                                                mdi-microphone-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-microphone-variant"></i> mdi
                                                mdi-microphone-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-microphone-variant-off"></i> mdi
                                                mdi-microphone-variant-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-microscope"></i> mdi mdi-microscope
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-microsoft"></i> mdi mdi-microsoft
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-microsoft-dynamics"></i> mdi
                                                mdi-microsoft-dynamics
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-midi"></i> mdi mdi-midi
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-midi-port"></i> mdi mdi-midi-port
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-minecraft"></i> mdi mdi-minecraft
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mini-sd"></i> mdi mdi-mini-sd
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-minidisc"></i> mdi mdi-minidisc
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-minus"></i> mdi mdi-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-minus-box"></i> mdi mdi-minus-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-minus-box-outline"></i> mdi mdi-minus-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-minus-circle"></i> mdi mdi-minus-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-minus-circle-outline"></i> mdi
                                                mdi-minus-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-minus-network"></i> mdi mdi-minus-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mixcloud"></i> mdi mdi-mixcloud
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mixed-reality"></i> mdi mdi-mixed-reality
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mixer"></i> mdi mdi-mixer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-monitor"></i> mdi mdi-monitor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-monitor-cellphone"></i> mdi mdi-monitor-cellphone
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-monitor-cellphone-star"></i> mdi
                                                mdi-monitor-cellphone-star
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-monitor-dashboard"></i> mdi mdi-monitor-dashboard
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-monitor-multiple"></i> mdi mdi-monitor-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-more"></i> mdi mdi-more
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mouse"></i> mdi mdi-mouse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mouse-bluetooth"></i> mdi mdi-mouse-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mouse-off"></i> mdi mdi-mouse-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mouse-variant"></i> mdi mdi-mouse-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mouse-variant-off"></i> mdi mdi-mouse-variant-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-move-resize"></i> mdi mdi-move-resize
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-move-resize-variant"></i> mdi
                                                mdi-move-resize-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-movie"></i> mdi mdi-movie
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-movie-roll"></i> mdi mdi-movie-roll
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-muffin"></i> mdi mdi-muffin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-multiplication"></i> mdi mdi-multiplication
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-multiplication-box"></i> mdi
                                                mdi-multiplication-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mushroom"></i> mdi mdi-mushroom
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-mushroom-outline"></i> mdi mdi-mushroom-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music"></i> mdi mdi-music
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music-box"></i> mdi mdi-music-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music-box-outline"></i> mdi mdi-music-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music-circle"></i> mdi mdi-music-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music-circle-outline"></i> mdi
                                                mdi-music-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music-note"></i> mdi mdi-music-note
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music-note-bluetooth"></i> mdi
                                                mdi-music-note-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music-note-bluetooth-off"></i> mdi
                                                mdi-music-note-bluetooth-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music-note-eighth"></i> mdi mdi-music-note-eighth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music-note-half"></i> mdi mdi-music-note-half
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music-note-off"></i> mdi mdi-music-note-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music-note-quarter"></i> mdi
                                                mdi-music-note-quarter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music-note-sixteenth"></i> mdi
                                                mdi-music-note-sixteenth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music-note-whole"></i> mdi mdi-music-note-whole
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-music-off"></i> mdi mdi-music-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-nas"></i> mdi mdi-nas
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-nativescript"></i> mdi mdi-nativescript
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-nature"></i> mdi mdi-nature
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-nature-people"></i> mdi mdi-nature-people
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-navigation"></i> mdi mdi-navigation
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-near-me"></i> mdi mdi-near-me
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-needle"></i> mdi mdi-needle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-netflix"></i> mdi mdi-netflix
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network"></i> mdi mdi-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network-strength-1"></i> mdi
                                                mdi-network-strength-1
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network-strength-1-alert"></i> mdi
                                                mdi-network-strength-1-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network-strength-2"></i> mdi
                                                mdi-network-strength-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network-strength-2-alert"></i> mdi
                                                mdi-network-strength-2-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network-strength-3"></i> mdi
                                                mdi-network-strength-3
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network-strength-3-alert"></i> mdi
                                                mdi-network-strength-3-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network-strength-4"></i> mdi
                                                mdi-network-strength-4
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network-strength-4-alert"></i> mdi
                                                mdi-network-strength-4-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network-strength-off"></i> mdi
                                                mdi-network-strength-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network-strength-off-outline"></i> mdi
                                                mdi-network-strength-off-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-network-strength-outline"></i> mdi
                                                mdi-network-strength-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-new-box"></i> mdi mdi-new-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-newspaper"></i> mdi mdi-newspaper
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-nfc"></i> mdi mdi-nfc
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-nfc-tap"></i> mdi mdi-nfc-tap
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-nfc-variant"></i> mdi mdi-nfc-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ninja"></i> mdi mdi-ninja
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-nintendo-switch"></i> mdi mdi-nintendo-switch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-nodejs"></i> mdi mdi-nodejs
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-not-equal"></i> mdi mdi-not-equal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-not-equal-variant"></i> mdi mdi-not-equal-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-note"></i> mdi mdi-note
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-note-multiple"></i> mdi mdi-note-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-note-multiple-outline"></i> mdi
                                                mdi-note-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-note-outline"></i> mdi mdi-note-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-note-plus"></i> mdi mdi-note-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-note-plus-outline"></i> mdi mdi-note-plus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-note-text"></i> mdi mdi-note-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-notebook"></i> mdi mdi-notebook
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-notification-clear-all"></i> mdi
                                                mdi-notification-clear-all
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-npm"></i> mdi mdi-npm
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-npm-variant"></i> mdi mdi-npm-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-npm-variant-outline"></i> mdi
                                                mdi-npm-variant-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-nuke"></i> mdi mdi-nuke
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-null"></i> mdi mdi-null
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric"></i> mdi mdi-numeric
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-0"></i> mdi mdi-numeric-0
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-0-box"></i> mdi mdi-numeric-0-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-0-box-multiple-outline"></i> mdi
                                                mdi-numeric-0-box-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-0-box-outline"></i> mdi
                                                mdi-numeric-0-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-1"></i> mdi mdi-numeric-1
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-1-box"></i> mdi mdi-numeric-1-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-1-box-multiple-outline"></i> mdi
                                                mdi-numeric-1-box-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-1-box-outline"></i> mdi
                                                mdi-numeric-1-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-2"></i> mdi mdi-numeric-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-2-box"></i> mdi mdi-numeric-2-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-2-box-multiple-outline"></i> mdi
                                                mdi-numeric-2-box-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-2-box-outline"></i> mdi
                                                mdi-numeric-2-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-3"></i> mdi mdi-numeric-3
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-3-box"></i> mdi mdi-numeric-3-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-3-box-multiple-outline"></i> mdi
                                                mdi-numeric-3-box-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-3-box-outline"></i> mdi
                                                mdi-numeric-3-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-4"></i> mdi mdi-numeric-4
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-4-box"></i> mdi mdi-numeric-4-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-4-box-multiple-outline"></i> mdi
                                                mdi-numeric-4-box-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-4-box-outline"></i> mdi
                                                mdi-numeric-4-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-5"></i> mdi mdi-numeric-5
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-5-box"></i> mdi mdi-numeric-5-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-5-box-multiple-outline"></i> mdi
                                                mdi-numeric-5-box-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-5-box-outline"></i> mdi
                                                mdi-numeric-5-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-6"></i> mdi mdi-numeric-6
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-6-box"></i> mdi mdi-numeric-6-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-6-box-multiple-outline"></i> mdi
                                                mdi-numeric-6-box-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-6-box-outline"></i> mdi
                                                mdi-numeric-6-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-7"></i> mdi mdi-numeric-7
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-7-box"></i> mdi mdi-numeric-7-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-7-box-multiple-outline"></i> mdi
                                                mdi-numeric-7-box-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-7-box-outline"></i> mdi
                                                mdi-numeric-7-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-8"></i> mdi mdi-numeric-8
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-8-box"></i> mdi mdi-numeric-8-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-8-box-multiple-outline"></i> mdi
                                                mdi-numeric-8-box-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-8-box-outline"></i> mdi
                                                mdi-numeric-8-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-9"></i> mdi mdi-numeric-9
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-9-box"></i> mdi mdi-numeric-9-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-9-box-multiple-outline"></i> mdi
                                                mdi-numeric-9-box-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-9-box-outline"></i> mdi
                                                mdi-numeric-9-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-9-plus-box"></i> mdi
                                                mdi-numeric-9-plus-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-9-plus-box-multiple-outline"></i> mdi
                                                mdi-numeric-9-plus-box-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-numeric-9-plus-box-outline"></i> mdi
                                                mdi-numeric-9-plus-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-nut"></i> mdi mdi-nut
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-nutrition"></i> mdi mdi-nutrition
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-oar"></i> mdi mdi-oar
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-octagon"></i> mdi mdi-octagon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-octagon-outline"></i> mdi mdi-octagon-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-octagram"></i> mdi mdi-octagram
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-octagram-outline"></i> mdi mdi-octagram-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-odnoklassniki"></i> mdi mdi-odnoklassniki
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-office"></i> mdi mdi-office
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-office-building"></i> mdi mdi-office-building
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-oil"></i> mdi mdi-oil
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-oil-temperature"></i> mdi mdi-oil-temperature
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-omega"></i> mdi mdi-omega
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-onedrive"></i> mdi mdi-onedrive
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-onenote"></i> mdi mdi-onenote
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-onepassword"></i> mdi mdi-onepassword
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-opacity"></i> mdi mdi-opacity
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-open-in-app"></i> mdi mdi-open-in-app
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-open-in-new"></i> mdi mdi-open-in-new
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-openid"></i> mdi mdi-openid
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-opera"></i> mdi mdi-opera
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-orbit"></i> mdi mdi-orbit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-origin"></i> mdi mdi-origin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ornament"></i> mdi mdi-ornament
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ornament-variant"></i> mdi mdi-ornament-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-owl"></i> mdi mdi-owl
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-package"></i> mdi mdi-package
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-package-down"></i> mdi mdi-package-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-package-up"></i> mdi mdi-package-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-package-variant"></i> mdi mdi-package-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-package-variant-closed"></i> mdi
                                                mdi-package-variant-closed
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-page-first"></i> mdi mdi-page-first
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-page-last"></i> mdi mdi-page-last
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-page-layout-body"></i> mdi mdi-page-layout-body
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-page-layout-footer"></i> mdi
                                                mdi-page-layout-footer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-page-layout-header"></i> mdi
                                                mdi-page-layout-header
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-page-layout-sidebar-left"></i> mdi
                                                mdi-page-layout-sidebar-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-page-layout-sidebar-right"></i> mdi
                                                mdi-page-layout-sidebar-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-palette"></i> mdi mdi-palette
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-palette-advanced"></i> mdi mdi-palette-advanced
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-palette-swatch"></i> mdi mdi-palette-swatch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-panda"></i> mdi mdi-panda
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pandora"></i> mdi mdi-pandora
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-panorama"></i> mdi mdi-panorama
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-panorama-fisheye"></i> mdi mdi-panorama-fisheye
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-panorama-horizontal"></i> mdi
                                                mdi-panorama-horizontal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-panorama-vertical"></i> mdi mdi-panorama-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-panorama-wide-angle"></i> mdi
                                                mdi-panorama-wide-angle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-paper-cut-vertical"></i> mdi
                                                mdi-paper-cut-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-paperclip"></i> mdi mdi-paperclip
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-parking"></i> mdi mdi-parking
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-passport"></i> mdi mdi-passport
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-patreon"></i> mdi mdi-patreon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pause"></i> mdi mdi-pause
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pause-circle"></i> mdi mdi-pause-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pause-circle-outline"></i> mdi
                                                mdi-pause-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pause-octagon"></i> mdi mdi-pause-octagon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pause-octagon-outline"></i> mdi
                                                mdi-pause-octagon-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-paw"></i> mdi mdi-paw
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-paw-off"></i> mdi mdi-paw-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-paypal"></i> mdi mdi-paypal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-peace"></i> mdi mdi-peace
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pen"></i> mdi mdi-pen
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pencil"></i> mdi mdi-pencil
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pencil-box"></i> mdi mdi-pencil-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pencil-box-outline"></i> mdi
                                                mdi-pencil-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pencil-circle"></i> mdi mdi-pencil-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pencil-circle-outline"></i> mdi
                                                mdi-pencil-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pencil-lock"></i> mdi mdi-pencil-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pencil-off"></i> mdi mdi-pencil-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pentagon"></i> mdi mdi-pentagon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pentagon-outline"></i> mdi mdi-pentagon-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-percent"></i> mdi mdi-percent
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-periodic-table"></i> mdi mdi-periodic-table
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-periodic-table-co2"></i> mdi
                                                mdi-periodic-table-co2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-periscope"></i> mdi mdi-periscope
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pharmacy"></i> mdi mdi-pharmacy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone"></i> mdi mdi-phone
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-bluetooth"></i> mdi mdi-phone-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-classic"></i> mdi mdi-phone-classic
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-forward"></i> mdi mdi-phone-forward
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-hangup"></i> mdi mdi-phone-hangup
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-in-talk"></i> mdi mdi-phone-in-talk
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-incoming"></i> mdi mdi-phone-incoming
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-lock"></i> mdi mdi-phone-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-log"></i> mdi mdi-phone-log
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-minus"></i> mdi mdi-phone-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-missed"></i> mdi mdi-phone-missed
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-outgoing"></i> mdi mdi-phone-outgoing
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-paused"></i> mdi mdi-phone-paused
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-plus"></i> mdi mdi-phone-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-return"></i> mdi mdi-phone-return
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-rotate-landscape"></i> mdi
                                                mdi-phone-rotate-landscape
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-rotate-portrait"></i> mdi
                                                mdi-phone-rotate-portrait
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-settings"></i> mdi mdi-phone-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-phone-voip"></i> mdi mdi-phone-voip
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pi"></i> mdi mdi-pi
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pi-box"></i> mdi mdi-pi-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-piano"></i> mdi mdi-piano
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pickaxe"></i> mdi mdi-pickaxe
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pier"></i> mdi mdi-pier
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pier-crane"></i> mdi mdi-pier-crane
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pig"></i> mdi mdi-pig
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pill"></i> mdi mdi-pill
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pillar"></i> mdi mdi-pillar
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pin"></i> mdi mdi-pin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pin-off"></i> mdi mdi-pin-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pin-off-outline"></i> mdi mdi-pin-off-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pin-outline"></i> mdi mdi-pin-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pine-tree"></i> mdi mdi-pine-tree
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pine-tree-box"></i> mdi mdi-pine-tree-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pinterest"></i> mdi mdi-pinterest
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pinterest-box"></i> mdi mdi-pinterest-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pinwheel"></i> mdi mdi-pinwheel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pinwheel-outline"></i> mdi mdi-pinwheel-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pipe"></i> mdi mdi-pipe
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pipe-disconnected"></i> mdi mdi-pipe-disconnected
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pipe-leak"></i> mdi mdi-pipe-leak
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pirate"></i> mdi mdi-pirate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pistol"></i> mdi mdi-pistol
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-piston"></i> mdi mdi-piston
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pizza"></i> mdi mdi-pizza
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-airplane"></i> mdi mdi-shield-airplane
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-play"></i> mdi mdi-play
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-play-box-outline"></i> mdi mdi-play-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-play-circle"></i> mdi mdi-play-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-play-circle-outline"></i> mdi
                                                mdi-play-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-play-network"></i> mdi mdi-play-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-play-pause"></i> mdi mdi-play-pause
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-play-protected-content"></i> mdi
                                                mdi-play-protected-content
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-play-speed"></i> mdi mdi-play-speed
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-playlist-check"></i> mdi mdi-playlist-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-playlist-edit"></i> mdi mdi-playlist-edit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-playlist-minus"></i> mdi mdi-playlist-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-playlist-play"></i> mdi mdi-playlist-play
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-playlist-plus"></i> mdi mdi-playlist-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-playlist-remove"></i> mdi mdi-playlist-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-playstation"></i> mdi mdi-playstation
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-plex"></i> mdi mdi-plex
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-plus"></i> mdi mdi-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-plus-box"></i> mdi mdi-plus-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-plus-box-outline"></i> mdi mdi-plus-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-plus-circle"></i> mdi mdi-plus-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-plus-circle-multiple-outline"></i> mdi
                                                mdi-plus-circle-multiple-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-plus-circle-outline"></i> mdi
                                                mdi-plus-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-plus-minus"></i> mdi mdi-plus-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-plus-minus-box"></i> mdi mdi-plus-minus-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-plus-network"></i> mdi mdi-plus-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-plus-one"></i> mdi mdi-plus-one
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-plus-outline"></i> mdi mdi-plus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pocket"></i> mdi mdi-pocket
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-podcast"></i> mdi mdi-podcast
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pokeball"></i> mdi mdi-pokeball
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pokemon-go"></i> mdi mdi-pokemon-go
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-poker-chip"></i> mdi mdi-poker-chip
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-polaroid"></i> mdi mdi-polaroid
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-poll"></i> mdi mdi-poll
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-poll-box"></i> mdi mdi-poll-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-polymer"></i> mdi mdi-polymer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pool"></i> mdi mdi-pool
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-popcorn"></i> mdi mdi-popcorn
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pot"></i> mdi mdi-pot
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pot-mix"></i> mdi mdi-pot-mix
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pound"></i> mdi mdi-pound
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pound-box"></i> mdi mdi-pound-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-power"></i> mdi mdi-power
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-power-cycle"></i> mdi mdi-power-cycle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-power-off"></i> mdi mdi-power-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-power-on"></i> mdi mdi-power-on
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-power-plug"></i> mdi mdi-power-plug
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-power-plug-off"></i> mdi mdi-power-plug-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-power-settings"></i> mdi mdi-power-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-power-sleep"></i> mdi mdi-power-sleep
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-power-socket"></i> mdi mdi-power-socket
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-power-socket-au"></i> mdi mdi-power-socket-au
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-power-socket-eu"></i> mdi mdi-power-socket-eu
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-power-socket-uk"></i> mdi mdi-power-socket-uk
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-power-socket-us"></i> mdi mdi-power-socket-us
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-power-standby"></i> mdi mdi-power-standby
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-powershell"></i> mdi mdi-powershell
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-prescription"></i> mdi mdi-prescription
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-presentation"></i> mdi mdi-presentation
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-presentation-play"></i> mdi mdi-presentation-play
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-printer"></i> mdi mdi-printer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-printer-3d"></i> mdi mdi-printer-3d
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-printer-alert"></i> mdi mdi-printer-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-printer-settings"></i> mdi mdi-printer-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-printer-wireless"></i> mdi mdi-printer-wireless
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-priority-high"></i> mdi mdi-priority-high
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-priority-low"></i> mdi mdi-priority-low
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-professional-hexagon"></i> mdi
                                                mdi-professional-hexagon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-progress-check"></i> mdi mdi-progress-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-progress-clock"></i> mdi mdi-progress-clock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-progress-download"></i> mdi mdi-progress-download
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-progress-upload"></i> mdi mdi-progress-upload
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-projector"></i> mdi mdi-projector
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-projector-screen"></i> mdi mdi-projector-screen
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-publish"></i> mdi mdi-publish
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-pulse"></i> mdi mdi-pulse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-puzzle"></i> mdi mdi-puzzle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-puzzle-outline"></i> mdi mdi-puzzle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-qi"></i> mdi mdi-qi
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-qqchat"></i> mdi mdi-qqchat
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-qrcode"></i> mdi mdi-qrcode
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-qrcode-edit"></i> mdi mdi-qrcode-edit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-qrcode-scan"></i> mdi mdi-qrcode-scan
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-quadcopter"></i> mdi mdi-quadcopter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-quality-high"></i> mdi mdi-quality-high
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-quality-low"></i> mdi mdi-quality-low
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-quality-medium"></i> mdi mdi-quality-medium
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-quicktime"></i> mdi mdi-quicktime
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rabbit"></i> mdi mdi-rabbit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-radar"></i> mdi mdi-radar
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-radiator"></i> mdi mdi-radiator
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-radiator-disabled"></i> mdi mdi-radiator-disabled
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-radiator-off"></i> mdi mdi-radiator-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-radio"></i> mdi mdi-radio
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-radio-handheld"></i> mdi mdi-radio-handheld
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-radio-tower"></i> mdi mdi-radio-tower
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-radioactive"></i> mdi mdi-radioactive
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-radiobox-blank"></i> mdi mdi-radiobox-blank
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-radiobox-marked"></i> mdi mdi-radiobox-marked
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-raspberrypi"></i> mdi mdi-raspberrypi
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ray-end"></i> mdi mdi-ray-end
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ray-end-arrow"></i> mdi mdi-ray-end-arrow
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ray-start"></i> mdi mdi-ray-start
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ray-start-arrow"></i> mdi mdi-ray-start-arrow
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ray-start-end"></i> mdi mdi-ray-start-end
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ray-vertex"></i> mdi mdi-ray-vertex
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-react"></i> mdi mdi-react
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-read"></i> mdi mdi-read
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-receipt"></i> mdi mdi-receipt
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-record"></i> mdi mdi-record
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-record-player"></i> mdi mdi-record-player
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-record-rec"></i> mdi mdi-record-rec
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-recycle"></i> mdi mdi-recycle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-reddit"></i> mdi mdi-reddit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-redo"></i> mdi mdi-redo
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-redo-variant"></i> mdi mdi-redo-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-reflect-horizontal"></i> mdi
                                                mdi-reflect-horizontal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-reflect-vertical"></i> mdi mdi-reflect-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-refresh"></i> mdi mdi-refresh
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-regex"></i> mdi mdi-regex
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-registered-trademark"></i> mdi
                                                mdi-registered-trademark
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-relative-scale"></i> mdi mdi-relative-scale
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-reload"></i> mdi mdi-reload
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-reminder"></i> mdi mdi-reminder
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-remote"></i> mdi mdi-remote
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-remote-desktop"></i> mdi mdi-remote-desktop
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rename-box"></i> mdi mdi-rename-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-reorder-horizontal"></i> mdi
                                                mdi-reorder-horizontal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-reorder-vertical"></i> mdi mdi-reorder-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-repeat"></i> mdi mdi-repeat
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-repeat-off"></i> mdi mdi-repeat-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-repeat-once"></i> mdi mdi-repeat-once
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-replay"></i> mdi mdi-replay
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-reply"></i> mdi mdi-reply
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-reply-all"></i> mdi mdi-reply-all
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-reproduction"></i> mdi mdi-reproduction
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-resistor"></i> mdi mdi-resistor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-resistor-nodes"></i> mdi mdi-resistor-nodes
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-resize"></i> mdi mdi-resize
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-resize-bottom-right"></i> mdi
                                                mdi-resize-bottom-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-responsive"></i> mdi mdi-responsive
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-restart"></i> mdi mdi-restart
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-restore"></i> mdi mdi-restore
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-restore-clock"></i> mdi mdi-restore-clock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rewind"></i> mdi mdi-rewind
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rewind-outline"></i> mdi mdi-rewind-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rhombus"></i> mdi mdi-rhombus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rhombus-medium"></i> mdi mdi-rhombus-medium
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rhombus-outline"></i> mdi mdi-rhombus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rhombus-split"></i> mdi mdi-rhombus-split
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ribbon"></i> mdi mdi-ribbon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rice"></i> mdi mdi-rice
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ring"></i> mdi mdi-ring
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-road"></i> mdi mdi-road
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-road-variant"></i> mdi mdi-road-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-robot"></i> mdi mdi-robot
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-robot-industrial"></i> mdi mdi-robot-industrial
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-robot-vacuum"></i> mdi mdi-robot-vacuum
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-robot-vacuum-variant"></i> mdi
                                                mdi-robot-vacuum-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rocket"></i> mdi mdi-rocket
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-room-service"></i> mdi mdi-room-service
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rotate-3d"></i> mdi mdi-rotate-3d
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rotate-left"></i> mdi mdi-rotate-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rotate-left-variant"></i> mdi
                                                mdi-rotate-left-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rotate-right"></i> mdi mdi-rotate-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rotate-right-variant"></i> mdi
                                                mdi-rotate-right-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rounded-corner"></i> mdi mdi-rounded-corner
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-router-wireless"></i> mdi mdi-router-wireless
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-router-wireless-settings"></i> mdi
                                                mdi-router-wireless-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-routes"></i> mdi mdi-routes
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rowing"></i> mdi mdi-rowing
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rss"></i> mdi mdi-rss
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rss-box"></i> mdi mdi-rss-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ruler"></i> mdi mdi-ruler
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-run"></i> mdi mdi-run
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-run-fast"></i> mdi mdi-run-fast
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-safe"></i> mdi mdi-safe
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sale"></i> mdi mdi-sale
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-salesforce"></i> mdi mdi-salesforce
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sass"></i> mdi mdi-sass
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-satellite"></i> mdi mdi-satellite
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-satellite-uplink"></i> mdi mdi-satellite-uplink
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-satellite-variant"></i> mdi mdi-satellite-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sausage"></i> mdi mdi-sausage
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-saxophone"></i> mdi mdi-saxophone
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-scale"></i> mdi mdi-scale
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-scale-balance"></i> mdi mdi-scale-balance
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-scale-bathroom"></i> mdi mdi-scale-bathroom
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-scanner"></i> mdi mdi-scanner
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-scanner-off"></i> mdi mdi-scanner-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-school"></i> mdi mdi-school
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-scissors-cutting"></i> mdi mdi-scissors-cutting
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-screen-rotation"></i> mdi mdi-screen-rotation
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-screen-rotation-lock"></i> mdi
                                                mdi-screen-rotation-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-screwdriver"></i> mdi mdi-screwdriver
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-script"></i> mdi mdi-script
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sd"></i> mdi mdi-sd
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-seal"></i> mdi mdi-seal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-search-web"></i> mdi mdi-search-web
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-seat-flat"></i> mdi mdi-seat-flat
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-seat-flat-angled"></i> mdi mdi-seat-flat-angled
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-seat-individual-suite"></i> mdi
                                                mdi-seat-individual-suite
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-seat-legroom-extra"></i> mdi
                                                mdi-seat-legroom-extra
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-seat-legroom-normal"></i> mdi
                                                mdi-seat-legroom-normal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-seat-legroom-reduced"></i> mdi
                                                mdi-seat-legroom-reduced
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-seat-recline-extra"></i> mdi
                                                mdi-seat-recline-extra
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-seat-recline-normal"></i> mdi
                                                mdi-seat-recline-normal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-security"></i> mdi mdi-security
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-account"></i> mdi mdi-shield-account
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-account-outline"></i> mdi
                                                mdi-shield-account-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-home"></i> mdi mdi-shield-home
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-lock"></i> mdi mdi-shield-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-off"></i> mdi mdi-shield-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-select"></i> mdi mdi-select
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-select-all"></i> mdi mdi-select-all
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-select-compare"></i> mdi mdi-select-compare
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-select-drag"></i> mdi mdi-select-drag
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-select-inverse"></i> mdi mdi-select-inverse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-select-off"></i> mdi mdi-select-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-selection"></i> mdi mdi-selection
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-selection-drag"></i> mdi mdi-selection-drag
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-selection-off"></i> mdi mdi-selection-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-send"></i> mdi mdi-send
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-send-lock"></i> mdi mdi-send-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-serial-port"></i> mdi mdi-serial-port
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-server"></i> mdi mdi-server
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-server-minus"></i> mdi mdi-server-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-server-off"></i> mdi mdi-server-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-server-plus"></i> mdi mdi-server-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-server-remove"></i> mdi mdi-server-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-server-security"></i> mdi mdi-server-security
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-set-all"></i> mdi mdi-set-all
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-set-center"></i> mdi mdi-set-center
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-set-center-right"></i> mdi mdi-set-center-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-set-left"></i> mdi mdi-set-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-set-left-center"></i> mdi mdi-set-left-center
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-set-left-right"></i> mdi mdi-set-left-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-set-none"></i> mdi mdi-set-none
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-set-right"></i> mdi mdi-set-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-set-top-box"></i> mdi mdi-set-top-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-settings"></i> mdi mdi-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-settings-box"></i> mdi mdi-settings-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-settings-helper"></i> mdi mdi-settings-helper
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-settings-outline"></i> mdi mdi-settings-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shape"></i> mdi mdi-shape
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shape-circle-plus"></i> mdi mdi-shape-circle-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shape-outline"></i> mdi mdi-shape-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shape-plus"></i> mdi mdi-shape-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shape-polygon-plus"></i> mdi
                                                mdi-shape-polygon-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shape-rectangle-plus"></i> mdi
                                                mdi-shape-rectangle-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shape-square-plus"></i> mdi mdi-shape-square-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-share"></i> mdi mdi-share
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-share-outline"></i> mdi mdi-share-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-share-variant"></i> mdi mdi-share-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield"></i> mdi mdi-shield
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-half-full"></i> mdi mdi-shield-half-full
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-outline"></i> mdi mdi-shield-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-plus"></i> mdi mdi-shield-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-plus-outline"></i> mdi
                                                mdi-shield-plus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-remove-outline"></i> mdi
                                                mdi-shield-remove-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ship-wheel"></i> mdi mdi-ship-wheel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shoe-formal"></i> mdi mdi-shoe-formal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shoe-heel"></i> mdi mdi-shoe-heel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shopify"></i> mdi mdi-shopify
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shopping"></i> mdi mdi-shopping
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shopping-music"></i> mdi mdi-shopping-music
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shovel"></i> mdi mdi-shovel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shovel-off"></i> mdi mdi-shovel-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shower"></i> mdi mdi-shower
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shower-head"></i> mdi mdi-shower-head
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shredder"></i> mdi mdi-shredder
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shuffle"></i> mdi mdi-shuffle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shuffle-disabled"></i> mdi mdi-shuffle-disabled
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shuffle-variant"></i> mdi mdi-shuffle-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sigma"></i> mdi mdi-sigma
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sigma-lower"></i> mdi mdi-sigma-lower
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sign-caution"></i> mdi mdi-sign-caution
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sign-direction"></i> mdi mdi-sign-direction
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sign-text"></i> mdi mdi-sign-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-signal"></i> mdi mdi-signal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-signal-2g"></i> mdi mdi-signal-2g
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-signal-3g"></i> mdi mdi-signal-3g
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-signal-4g"></i> mdi mdi-signal-4g
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-signal-5g"></i> mdi mdi-signal-5g
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-signal-cellular-1"></i> mdi mdi-signal-cellular-1
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-signal-cellular-2"></i> mdi mdi-signal-cellular-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-signal-cellular-3"></i> mdi mdi-signal-cellular-3
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-signal-cellular-outline"></i> mdi
                                                mdi-signal-cellular-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-signal-hspa"></i> mdi mdi-signal-hspa
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-signal-hspa-plus"></i> mdi mdi-signal-hspa-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-signal-off"></i> mdi mdi-signal-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-signal-variant"></i> mdi mdi-signal-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-silo"></i> mdi mdi-silo
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-silverware"></i> mdi mdi-silverware
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-silverware-fork"></i> mdi mdi-silverware-fork
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-silverware-fork-knife"></i> mdi
                                                mdi-silverware-fork-knife
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-silverware-spoon"></i> mdi mdi-silverware-spoon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-silverware-variant"></i> mdi
                                                mdi-silverware-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sim"></i> mdi mdi-sim
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sim-alert"></i> mdi mdi-sim-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sim-off"></i> mdi mdi-sim-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sina-weibo"></i> mdi mdi-sina-weibo
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sitemap"></i> mdi mdi-sitemap
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-skip-backward"></i> mdi mdi-skip-backward
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-skip-forward"></i> mdi mdi-skip-forward
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-skip-next"></i> mdi mdi-skip-next
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-skip-next-circle"></i> mdi mdi-skip-next-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-skip-next-circle-outline"></i> mdi
                                                mdi-skip-next-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-skip-previous"></i> mdi mdi-skip-previous
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-skip-previous-circle"></i> mdi
                                                mdi-skip-previous-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-skip-previous-circle-outline"></i> mdi
                                                mdi-skip-previous-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-skull"></i> mdi mdi-skull
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-skype"></i> mdi mdi-skype
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-skype-business"></i> mdi mdi-skype-business
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-slack"></i> mdi mdi-slack
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-slackware"></i> mdi mdi-slackware
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sleep"></i> mdi mdi-sleep
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sleep-off"></i> mdi mdi-sleep-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-smog"></i> mdi mdi-smog
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-snapchat"></i> mdi mdi-snapchat
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-snowflake"></i> mdi mdi-snowflake
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-snowman"></i> mdi mdi-snowman
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-soccer"></i> mdi mdi-soccer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-soccer-field"></i> mdi mdi-soccer-field
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sofa"></i> mdi mdi-sofa
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-solar-power"></i> mdi mdi-solar-power
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-solid"></i> mdi mdi-solid
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sort"></i> mdi mdi-sort
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sort-alphabetical"></i> mdi mdi-sort-alphabetical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sort-ascending"></i> mdi mdi-sort-ascending
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sort-descending"></i> mdi mdi-sort-descending
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sort-numeric"></i> mdi mdi-sort-numeric
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sort-variant"></i> mdi mdi-sort-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-soundcloud"></i> mdi mdi-soundcloud
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-source-branch"></i> mdi mdi-source-branch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-source-commit"></i> mdi mdi-source-commit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-source-commit-end"></i> mdi mdi-source-commit-end
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-source-commit-end-local"></i> mdi
                                                mdi-source-commit-end-local
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-source-commit-local"></i> mdi
                                                mdi-source-commit-local
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-source-commit-next-local"></i> mdi
                                                mdi-source-commit-next-local
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-source-commit-start"></i> mdi
                                                mdi-source-commit-start
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-source-commit-start-next-local"></i> mdi
                                                mdi-source-commit-start-next-local
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-source-fork"></i> mdi mdi-source-fork
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-source-merge"></i> mdi mdi-source-merge
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-source-pull"></i> mdi mdi-source-pull
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-soy-sauce"></i> mdi mdi-soy-sauce
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-speaker"></i> mdi mdi-speaker
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-speaker-bluetooth"></i> mdi mdi-speaker-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-speaker-off"></i> mdi mdi-speaker-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-speaker-wireless"></i> mdi mdi-speaker-wireless
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-speedometer"></i> mdi mdi-speedometer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-spellcheck"></i> mdi mdi-spellcheck
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-spotify"></i> mdi mdi-spotify
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-spotlight"></i> mdi mdi-spotlight
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-spotlight-beam"></i> mdi mdi-spotlight-beam
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-spray"></i> mdi mdi-spray
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-spray-bottle"></i> mdi mdi-spray-bottle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-square"></i> mdi mdi-square
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-square-edit-outline"></i> mdi
                                                mdi-square-edit-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-square-inc"></i> mdi mdi-square-inc
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-square-inc-cash"></i> mdi mdi-square-inc-cash
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-square-medium"></i> mdi mdi-square-medium
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-square-medium-outline"></i> mdi
                                                mdi-square-medium-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-square-outline"></i> mdi mdi-square-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-square-root"></i> mdi mdi-square-root
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-square-root-box"></i> mdi mdi-square-root-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-square-small"></i> mdi mdi-square-small
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-squeegee"></i> mdi mdi-squeegee
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ssh"></i> mdi mdi-ssh
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-stack-exchange"></i> mdi mdi-stack-exchange
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-stack-overflow"></i> mdi mdi-stack-overflow
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-stadium"></i> mdi mdi-stadium
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-stairs"></i> mdi mdi-stairs
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-standard-definition"></i> mdi
                                                mdi-standard-definition
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-star"></i> mdi mdi-star
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-star-box"></i> mdi mdi-star-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-star-box-outline"></i> mdi mdi-star-box-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-star-circle"></i> mdi mdi-star-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-star-circle-outline"></i> mdi
                                                mdi-star-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-star-face"></i> mdi mdi-star-face
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-star-four-points"></i> mdi mdi-star-four-points
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-star-four-points-outline"></i> mdi
                                                mdi-star-four-points-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-star-half"></i> mdi mdi-star-half
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-star-off"></i> mdi mdi-star-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-star-outline"></i> mdi mdi-star-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-star-three-points"></i> mdi mdi-star-three-points
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-star-three-points-outline"></i> mdi
                                                mdi-star-three-points-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-steam"></i> mdi mdi-steam
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-steam-box"></i> mdi mdi-steam-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-steering"></i> mdi mdi-steering
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-steering-off"></i> mdi mdi-steering-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-step-backward"></i> mdi mdi-step-backward
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-step-backward-2"></i> mdi mdi-step-backward-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-step-forward"></i> mdi mdi-step-forward
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-step-forward-2"></i> mdi mdi-step-forward-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-stethoscope"></i> mdi mdi-stethoscope
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sticker"></i> mdi mdi-sticker
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sticker-emoji"></i> mdi mdi-sticker-emoji
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-stocking"></i> mdi mdi-stocking
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-stop"></i> mdi mdi-stop
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-stop-circle"></i> mdi mdi-stop-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-stop-circle-outline"></i> mdi
                                                mdi-stop-circle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-store"></i> mdi mdi-store
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-store-24-hour"></i> mdi mdi-store-24-hour
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-stove"></i> mdi mdi-stove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-strava"></i> mdi mdi-strava
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-subdirectory-arrow-left"></i> mdi
                                                mdi-subdirectory-arrow-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-subdirectory-arrow-right"></i> mdi
                                                mdi-subdirectory-arrow-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-subtitles"></i> mdi mdi-subtitles
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-subtitles-outline"></i> mdi mdi-subtitles-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-subway"></i> mdi mdi-subway
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-subway-variant"></i> mdi mdi-subway-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-summit"></i> mdi mdi-summit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sunglasses"></i> mdi mdi-sunglasses
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-surround-sound"></i> mdi mdi-surround-sound
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-surround-sound-2-0"></i> mdi
                                                mdi-surround-sound-2-0
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-surround-sound-3-1"></i> mdi
                                                mdi-surround-sound-3-1
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-surround-sound-5-1"></i> mdi
                                                mdi-surround-sound-5-1
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-surround-sound-7-1"></i> mdi
                                                mdi-surround-sound-7-1
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-svg"></i> mdi mdi-svg
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-swap-horizontal"></i> mdi mdi-swap-horizontal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-swap-horizontal-variant"></i> mdi
                                                mdi-swap-horizontal-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-swap-vertical"></i> mdi mdi-swap-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-swap-vertical-variant"></i> mdi
                                                mdi-swap-vertical-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-swim"></i> mdi mdi-swim
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-switch"></i> mdi mdi-switch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sword"></i> mdi mdi-sword
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sword-cross"></i> mdi mdi-sword-cross
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-symfony"></i> mdi mdi-symfony
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sync"></i> mdi mdi-sync
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sync-alert"></i> mdi mdi-sync-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-sync-off"></i> mdi mdi-sync-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tab"></i> mdi mdi-tab
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tab-minus"></i> mdi mdi-tab-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tab-plus"></i> mdi mdi-tab-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tab-remove"></i> mdi mdi-tab-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tab-unselected"></i> mdi mdi-tab-unselected
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table"></i> mdi mdi-table
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-border"></i> mdi mdi-table-border
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-column"></i> mdi mdi-table-column
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-column-plus-after"></i> mdi
                                                mdi-table-column-plus-after
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-column-plus-before"></i> mdi
                                                mdi-table-column-plus-before
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-column-remove"></i> mdi
                                                mdi-table-column-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-column-width"></i> mdi
                                                mdi-table-column-width
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-edit"></i> mdi mdi-table-edit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-large"></i> mdi mdi-table-large
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-merge-cells"></i> mdi mdi-table-merge-cells
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-of-contents"></i> mdi mdi-table-of-contents
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-plus"></i> mdi mdi-table-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-remove"></i> mdi mdi-table-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-row"></i> mdi mdi-table-row
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-row-height"></i> mdi mdi-table-row-height
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-row-plus-after"></i> mdi
                                                mdi-table-row-plus-after
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-row-plus-before"></i> mdi
                                                mdi-table-row-plus-before
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-row-remove"></i> mdi mdi-table-row-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-search"></i> mdi mdi-table-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-table-settings"></i> mdi mdi-table-settings
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tablet"></i> mdi mdi-tablet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tablet-android"></i> mdi mdi-tablet-android
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tablet-cellphone"></i> mdi mdi-tablet-cellphone
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tablet-ipad"></i> mdi mdi-tablet-ipad
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-taco"></i> mdi mdi-taco
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tag"></i> mdi mdi-tag
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tag-faces"></i> mdi mdi-tag-faces
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tag-heart"></i> mdi mdi-tag-heart
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tag-minus"></i> mdi mdi-tag-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tag-multiple"></i> mdi mdi-tag-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tag-outline"></i> mdi mdi-tag-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tag-plus"></i> mdi mdi-tag-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tag-remove"></i> mdi mdi-tag-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tag-text-outline"></i> mdi mdi-tag-text-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tape-measure"></i> mdi mdi-tape-measure
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-target"></i> mdi mdi-target
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-target-variant"></i> mdi mdi-target-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-taxi"></i> mdi mdi-taxi
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-teach"></i> mdi mdi-teach
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-teamviewer"></i> mdi mdi-teamviewer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-telegram"></i> mdi mdi-telegram
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-telescope"></i> mdi mdi-telescope
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-television"></i> mdi mdi-television
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-television-box"></i> mdi mdi-television-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-television-classic"></i> mdi
                                                mdi-television-classic
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-television-classic-off"></i> mdi
                                                mdi-television-classic-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-television-guide"></i> mdi mdi-television-guide
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-television-off"></i> mdi mdi-television-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-temperature-celsius"></i> mdi
                                                mdi-temperature-celsius
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-temperature-fahrenheit"></i> mdi
                                                mdi-temperature-fahrenheit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-temperature-kelvin"></i> mdi
                                                mdi-temperature-kelvin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tennis"></i> mdi mdi-tennis
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tent"></i> mdi mdi-tent
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-terrain"></i> mdi mdi-terrain
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-test-tube"></i> mdi mdi-test-tube
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-test-tube-empty"></i> mdi mdi-test-tube-empty
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-test-tube-off"></i> mdi mdi-test-tube-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-text"></i> mdi mdi-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-text-shadow"></i> mdi mdi-text-shadow
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-text-short"></i> mdi mdi-text-short
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-text-subject"></i> mdi mdi-text-subject
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-text-to-speech"></i> mdi mdi-text-to-speech
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-text-to-speech-off"></i> mdi
                                                mdi-text-to-speech-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-textbox"></i> mdi mdi-textbox
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-textbox-password"></i> mdi mdi-textbox-password
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-texture"></i> mdi mdi-texture
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-theater"></i> mdi mdi-theater
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-theme-light-dark"></i> mdi mdi-theme-light-dark
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-thermometer"></i> mdi mdi-thermometer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-thermometer-lines"></i> mdi mdi-thermometer-lines
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-thermostat"></i> mdi mdi-thermostat
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-thermostat-box"></i> mdi mdi-thermostat-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-thought-bubble"></i> mdi mdi-thought-bubble
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-thought-bubble-outline"></i> mdi
                                                mdi-thought-bubble-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-thumb-down"></i> mdi mdi-thumb-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-thumb-down-outline"></i> mdi
                                                mdi-thumb-down-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-thumb-up"></i> mdi mdi-thumb-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-thumb-up-outline"></i> mdi mdi-thumb-up-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-thumbs-up-down"></i> mdi mdi-thumbs-up-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ticket"></i> mdi mdi-ticket
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ticket-account"></i> mdi mdi-ticket-account
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ticket-confirmation"></i> mdi
                                                mdi-ticket-confirmation
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ticket-outline"></i> mdi mdi-ticket-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ticket-percent"></i> mdi mdi-ticket-percent
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tie"></i> mdi mdi-tie
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tilde"></i> mdi mdi-tilde
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-timelapse"></i> mdi mdi-timelapse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-timer"></i> mdi mdi-timer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-timer-10"></i> mdi mdi-timer-10
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-timer-3"></i> mdi mdi-timer-3
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-timer-off"></i> mdi mdi-timer-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-timer-sand"></i> mdi mdi-timer-sand
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-timer-sand-empty"></i> mdi mdi-timer-sand-empty
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-timer-sand-full"></i> mdi mdi-timer-sand-full
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-timetable"></i> mdi mdi-timetable
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-toggle-switch"></i> mdi mdi-toggle-switch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-toggle-switch-off"></i> mdi mdi-toggle-switch-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-toggle-switch-off-outline"></i> mdi
                                                mdi-toggle-switch-off-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-toggle-switch-outline"></i> mdi
                                                mdi-toggle-switch-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-toilet"></i> mdi mdi-toilet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-toolbox"></i> mdi mdi-toolbox
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-toolbox-outline"></i> mdi mdi-toolbox-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tooltip"></i> mdi mdi-tooltip
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tooltip-edit"></i> mdi mdi-tooltip-edit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tooltip-image"></i> mdi mdi-tooltip-image
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tooltip-outline"></i> mdi mdi-tooltip-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tooltip-plus-outline"></i> mdi
                                                mdi-tooltip-plus-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tooltip-text"></i> mdi mdi-tooltip-text
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tooth"></i> mdi mdi-tooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tooth-outline"></i> mdi mdi-tooth-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tor"></i> mdi mdi-tor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tournament"></i> mdi mdi-tournament
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tower-beach"></i> mdi mdi-tower-beach
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tower-fire"></i> mdi mdi-tower-fire
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-towing"></i> mdi mdi-towing
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-track-light"></i> mdi mdi-track-light
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trackpad"></i> mdi mdi-trackpad
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trackpad-lock"></i> mdi mdi-trackpad-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tractor"></i> mdi mdi-tractor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trademark"></i> mdi mdi-trademark
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-traffic-light"></i> mdi mdi-traffic-light
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-train"></i> mdi mdi-train
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-train-variant"></i> mdi mdi-train-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tram"></i> mdi mdi-tram
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-transcribe"></i> mdi mdi-transcribe
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-transcribe-close"></i> mdi mdi-transcribe-close
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-transfer"></i> mdi mdi-transfer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-transit-transfer"></i> mdi mdi-transit-transfer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-transition"></i> mdi mdi-transition
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-transition-masked"></i> mdi mdi-transition-masked
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-translate"></i> mdi mdi-translate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trash-can"></i> mdi mdi-trash-can
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trash-can-outline"></i> mdi mdi-trash-can-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-treasure-chest"></i> mdi mdi-treasure-chest
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tree"></i> mdi mdi-tree
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trello"></i> mdi mdi-trello
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trending-down"></i> mdi mdi-trending-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trending-neutral"></i> mdi mdi-trending-neutral
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trending-up"></i> mdi mdi-trending-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-triangle"></i> mdi mdi-triangle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-triangle-outline"></i> mdi mdi-triangle-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trophy"></i> mdi mdi-trophy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trophy-award"></i> mdi mdi-trophy-award
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trophy-outline"></i> mdi mdi-trophy-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trophy-variant"></i> mdi mdi-trophy-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-trophy-variant-outline"></i> mdi
                                                mdi-trophy-variant-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-truck"></i> mdi mdi-truck
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-truck-delivery"></i> mdi mdi-truck-delivery
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-truck-fast"></i> mdi mdi-truck-fast
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-truck-trailer"></i> mdi mdi-truck-trailer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tshirt-crew"></i> mdi mdi-tshirt-crew
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tshirt-crew-outline"></i> mdi
                                                mdi-tshirt-crew-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tshirt-v"></i> mdi mdi-tshirt-v
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tshirt-v-outline"></i> mdi mdi-tshirt-v-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tumble-dryer"></i> mdi mdi-tumble-dryer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tumblr"></i> mdi mdi-tumblr
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tumblr-box"></i> mdi mdi-tumblr-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tumblr-reblog"></i> mdi mdi-tumblr-reblog
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tune"></i> mdi mdi-tune
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-tune-vertical"></i> mdi mdi-tune-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-twitch"></i> mdi mdi-twitch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-twitter"></i> mdi mdi-twitter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-twitter-box"></i> mdi mdi-twitter-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-twitter-circle"></i> mdi mdi-twitter-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-twitter-retweet"></i> mdi mdi-twitter-retweet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-two-factor-authentication"></i> mdi
                                                mdi-two-factor-authentication
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-uber"></i> mdi mdi-uber
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ubuntu"></i> mdi mdi-ubuntu
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ultra-high-definition"></i> mdi
                                                mdi-ultra-high-definition
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-umbraco"></i> mdi mdi-umbraco
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-umbrella"></i> mdi mdi-umbrella
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-umbrella-closed"></i> mdi mdi-umbrella-closed
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-umbrella-outline"></i> mdi mdi-umbrella-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-undo"></i> mdi mdi-undo
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-undo-variant"></i> mdi mdi-undo-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-unfold-less-horizontal"></i> mdi
                                                mdi-unfold-less-horizontal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-unfold-less-vertical"></i> mdi
                                                mdi-unfold-less-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-unfold-more-horizontal"></i> mdi
                                                mdi-unfold-more-horizontal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-unfold-more-vertical"></i> mdi
                                                mdi-unfold-more-vertical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-ungroup"></i> mdi mdi-ungroup
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-unity"></i> mdi mdi-unity
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-unreal"></i> mdi mdi-unreal
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-untappd"></i> mdi mdi-untappd
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-update"></i> mdi mdi-update
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-upload"></i> mdi mdi-upload
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-upload-multiple"></i> mdi mdi-upload-multiple
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-upload-network"></i> mdi mdi-upload-network
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-usb"></i> mdi mdi-usb
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-van-passenger"></i> mdi mdi-van-passenger
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-van-utility"></i> mdi mdi-van-utility
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vanish"></i> mdi mdi-vanish
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-variable"></i> mdi mdi-variable
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-arrange-above"></i> mdi
                                                mdi-vector-arrange-above
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-arrange-below"></i> mdi
                                                mdi-vector-arrange-below
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-bezier"></i> mdi mdi-vector-bezier
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-circle"></i> mdi mdi-vector-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-circle-variant"></i> mdi
                                                mdi-vector-circle-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-combine"></i> mdi mdi-vector-combine
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-curve"></i> mdi mdi-vector-curve
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-difference"></i> mdi mdi-vector-difference
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-difference-ab"></i> mdi
                                                mdi-vector-difference-ab
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-difference-ba"></i> mdi
                                                mdi-vector-difference-ba
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-ellipse"></i> mdi mdi-vector-ellipse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-intersection"></i> mdi
                                                mdi-vector-intersection
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-line"></i> mdi mdi-vector-line
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-point"></i> mdi mdi-vector-point
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-polygon"></i> mdi mdi-vector-polygon
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-polyline"></i> mdi mdi-vector-polyline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-radius"></i> mdi mdi-vector-radius
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-rectangle"></i> mdi mdi-vector-rectangle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-selection"></i> mdi mdi-vector-selection
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-square"></i> mdi mdi-vector-square
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-triangle"></i> mdi mdi-vector-triangle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vector-union"></i> mdi mdi-vector-union
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-venmo"></i> mdi mdi-venmo
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-shield-check"></i> mdi mdi-shield-check
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vhs"></i> mdi mdi-vhs
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vibrate"></i> mdi mdi-vibrate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video"></i> mdi mdi-video
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video-3d"></i> mdi mdi-video-3d
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video-4k-box"></i> mdi mdi-video-4k-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video-account"></i> mdi mdi-video-account
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video-image"></i> mdi mdi-video-image
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video-input-antenna"></i> mdi
                                                mdi-video-input-antenna
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video-input-component"></i> mdi
                                                mdi-video-input-component
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video-input-hdmi"></i> mdi mdi-video-input-hdmi
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video-input-svideo"></i> mdi
                                                mdi-video-input-svideo
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video-minus"></i> mdi mdi-video-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video-off"></i> mdi mdi-video-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video-plus"></i> mdi mdi-video-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video-stabilization"></i> mdi
                                                mdi-video-stabilization
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video-switch"></i> mdi mdi-video-switch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-video-vintage"></i> mdi mdi-video-vintage
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-agenda"></i> mdi mdi-view-agenda
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-array"></i> mdi mdi-view-array
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-carousel"></i> mdi mdi-view-carousel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-column"></i> mdi mdi-view-column
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-dashboard"></i> mdi mdi-view-dashboard
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-dashboard-outline"></i> mdi
                                                mdi-view-dashboard-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-dashboard-variant"></i> mdi
                                                mdi-view-dashboard-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-day"></i> mdi mdi-view-day
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-grid"></i> mdi mdi-view-grid
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-headline"></i> mdi mdi-view-headline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-list"></i> mdi mdi-view-list
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-module"></i> mdi mdi-view-module
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-parallel"></i> mdi mdi-view-parallel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-quilt"></i> mdi mdi-view-quilt
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-sequential"></i> mdi mdi-view-sequential
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-stream"></i> mdi mdi-view-stream
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-view-week"></i> mdi mdi-view-week
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vimeo"></i> mdi mdi-vimeo
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-violin"></i> mdi mdi-violin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-virtual-reality"></i> mdi mdi-virtual-reality
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-visual-studio"></i> mdi mdi-visual-studio
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-visual-studio-code"></i> mdi
                                                mdi-visual-studio-code
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vk"></i> mdi mdi-vk
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vk-box"></i> mdi mdi-vk-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vk-circle"></i> mdi mdi-vk-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vlc"></i> mdi mdi-vlc
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-voice"></i> mdi mdi-voice
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-voicemail"></i> mdi mdi-voicemail
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-volleyball"></i> mdi mdi-volleyball
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-volume-high"></i> mdi mdi-volume-high
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-volume-low"></i> mdi mdi-volume-low
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-volume-medium"></i> mdi mdi-volume-medium
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-volume-minus"></i> mdi mdi-volume-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-volume-mute"></i> mdi mdi-volume-mute
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-volume-off"></i> mdi mdi-volume-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-volume-plus"></i> mdi mdi-volume-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vote"></i> mdi mdi-vote
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vote-outline"></i> mdi mdi-vote-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vpn"></i> mdi mdi-vpn
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-vuejs"></i> mdi mdi-vuejs
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-walk"></i> mdi mdi-walk
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wall"></i> mdi mdi-wall
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wall-sconce"></i> mdi mdi-wall-sconce
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wall-sconce-flat"></i> mdi mdi-wall-sconce-flat
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wall-sconce-variant"></i> mdi
                                                mdi-wall-sconce-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wallet"></i> mdi mdi-wallet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wallet-giftcard"></i> mdi mdi-wallet-giftcard
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wallet-membership"></i> mdi mdi-wallet-membership
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wallet-travel"></i> mdi mdi-wallet-travel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wan"></i> mdi mdi-wan
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-washing-machine"></i> mdi mdi-washing-machine
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-watch"></i> mdi mdi-watch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-watch-export"></i> mdi mdi-watch-export
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-watch-export-variant"></i> mdi
                                                mdi-watch-export-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-watch-import"></i> mdi mdi-watch-import
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-watch-import-variant"></i> mdi
                                                mdi-watch-import-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-watch-variant"></i> mdi mdi-watch-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-watch-vibrate"></i> mdi mdi-watch-vibrate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-water"></i> mdi mdi-water
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-water-off"></i> mdi mdi-water-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-water-percent"></i> mdi mdi-water-percent
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-water-pump"></i> mdi mdi-water-pump
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-watermark"></i> mdi mdi-watermark
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-waves"></i> mdi mdi-waves
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-cloudy"></i> mdi mdi-weather-cloudy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-fog"></i> mdi mdi-weather-fog
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-hail"></i> mdi mdi-weather-hail
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-hurricane"></i> mdi mdi-weather-hurricane
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-lightning"></i> mdi mdi-weather-lightning
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-lightning-rainy"></i> mdi
                                                mdi-weather-lightning-rainy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-night"></i> mdi mdi-weather-night
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-partlycloudy"></i> mdi
                                                mdi-weather-partlycloudy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-pouring"></i> mdi mdi-weather-pouring
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-rainy"></i> mdi mdi-weather-rainy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-snowy"></i> mdi mdi-weather-snowy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-snowy-rainy"></i> mdi
                                                mdi-weather-snowy-rainy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-sunny"></i> mdi mdi-weather-sunny
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-sunset"></i> mdi mdi-weather-sunset
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-sunset-down"></i> mdi
                                                mdi-weather-sunset-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-sunset-up"></i> mdi mdi-weather-sunset-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-windy"></i> mdi mdi-weather-windy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weather-windy-variant"></i> mdi
                                                mdi-weather-windy-variant
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-web"></i> mdi mdi-web
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-webcam"></i> mdi mdi-webcam
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-webhook"></i> mdi mdi-webhook
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-webpack"></i> mdi mdi-webpack
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wechat"></i> mdi mdi-wechat
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weight"></i> mdi mdi-weight
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weight-kilogram"></i> mdi mdi-weight-kilogram
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-weight-pound"></i> mdi mdi-weight-pound
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-whatsapp"></i> mdi mdi-whatsapp
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wheelchair-accessibility"></i> mdi
                                                mdi-wheelchair-accessibility
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-whistle"></i> mdi mdi-whistle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-white-balance-auto"></i> mdi
                                                mdi-white-balance-auto
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-white-balance-incandescent"></i> mdi
                                                mdi-white-balance-incandescent
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-white-balance-iridescent"></i> mdi
                                                mdi-white-balance-iridescent
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-white-balance-sunny"></i> mdi
                                                mdi-white-balance-sunny
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-widgets"></i> mdi mdi-widgets
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi"></i> mdi mdi-wifi
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-off"></i> mdi mdi-wifi-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-1"></i> mdi mdi-wifi-strength-1
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-1-alert"></i> mdi
                                                mdi-wifi-strength-1-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-1-lock"></i> mdi
                                                mdi-wifi-strength-1-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-2"></i> mdi mdi-wifi-strength-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-2-alert"></i> mdi
                                                mdi-wifi-strength-2-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-2-lock"></i> mdi
                                                mdi-wifi-strength-2-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-3"></i> mdi mdi-wifi-strength-3
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-3-alert"></i> mdi
                                                mdi-wifi-strength-3-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-3-lock"></i> mdi
                                                mdi-wifi-strength-3-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-4"></i> mdi mdi-wifi-strength-4
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-4-alert"></i> mdi
                                                mdi-wifi-strength-4-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-4-lock"></i> mdi
                                                mdi-wifi-strength-4-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-alert-outline"></i> mdi
                                                mdi-wifi-strength-alert-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-lock-outline"></i> mdi
                                                mdi-wifi-strength-lock-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-off"></i> mdi mdi-wifi-strength-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-off-outline"></i> mdi
                                                mdi-wifi-strength-off-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wifi-strength-outline"></i> mdi
                                                mdi-wifi-strength-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wii"></i> mdi mdi-wii
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wiiu"></i> mdi mdi-wiiu
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wikipedia"></i> mdi mdi-wikipedia
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-window-close"></i> mdi mdi-window-close
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-window-closed"></i> mdi mdi-window-closed
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-window-maximize"></i> mdi mdi-window-maximize
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-window-minimize"></i> mdi mdi-window-minimize
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-window-open"></i> mdi mdi-window-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-window-restore"></i> mdi mdi-window-restore
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-windows"></i> mdi mdi-windows
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-windows-classic"></i> mdi mdi-windows-classic
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wiper"></i> mdi mdi-wiper
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wordpress"></i> mdi mdi-wordpress
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-worker"></i> mdi mdi-worker
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wrap"></i> mdi mdi-wrap
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wrench"></i> mdi mdi-wrench
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-wunderlist"></i> mdi mdi-wunderlist
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xamarin"></i> mdi mdi-xamarin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xamarin-outline"></i> mdi mdi-xamarin-outline
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xaml"></i> mdi mdi-xaml
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xbox"></i> mdi mdi-xbox
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xbox-controller"></i> mdi mdi-xbox-controller
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xbox-controller-battery-alert"></i> mdi
                                                mdi-xbox-controller-battery-alert
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xbox-controller-battery-charging"></i> mdi
                                                mdi-xbox-controller-battery-charging
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xbox-controller-battery-empty"></i> mdi
                                                mdi-xbox-controller-battery-empty
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xbox-controller-battery-full"></i> mdi
                                                mdi-xbox-controller-battery-full
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xbox-controller-battery-low"></i> mdi
                                                mdi-xbox-controller-battery-low
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xbox-controller-battery-medium"></i> mdi
                                                mdi-xbox-controller-battery-medium
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xbox-controller-battery-unknown"></i> mdi
                                                mdi-xbox-controller-battery-unknown
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xbox-controller-off"></i> mdi
                                                mdi-xbox-controller-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xda"></i> mdi mdi-xda
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xing"></i> mdi mdi-xing
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xing-box"></i> mdi mdi-xing-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xing-circle"></i> mdi mdi-xing-circle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xml"></i> mdi mdi-xml
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-xmpp"></i> mdi mdi-xmpp
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-yahoo"></i> mdi mdi-yahoo
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-yammer"></i> mdi mdi-yammer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-yeast"></i> mdi mdi-yeast
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-yelp"></i> mdi mdi-yelp
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-yin-yang"></i> mdi mdi-yin-yang
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-youtube"></i> mdi mdi-youtube
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-youtube-creator-studio"></i> mdi
                                                mdi-youtube-creator-studio
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-youtube-gaming"></i> mdi mdi-youtube-gaming
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-youtube-tv"></i> mdi mdi-youtube-tv
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-z-wave"></i> mdi mdi-z-wave
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zend"></i> mdi mdi-zend
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zip-box"></i> mdi mdi-zip-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zip-disk"></i> mdi mdi-zip-disk
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zodiac-aquarius"></i> mdi mdi-zodiac-aquarius
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zodiac-aries"></i> mdi mdi-zodiac-aries
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zodiac-cancer"></i> mdi mdi-zodiac-cancer
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zodiac-capricorn"></i> mdi mdi-zodiac-capricorn
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zodiac-gemini"></i> mdi mdi-zodiac-gemini
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zodiac-leo"></i> mdi mdi-zodiac-leo
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zodiac-libra"></i> mdi mdi-zodiac-libra
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zodiac-pisces"></i> mdi mdi-zodiac-pisces
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zodiac-sagittarius"></i> mdi
                                                mdi-zodiac-sagittarius
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zodiac-scorpio"></i> mdi mdi-zodiac-scorpio
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zodiac-taurus"></i> mdi mdi-zodiac-taurus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-zodiac-virgo"></i> mdi mdi-zodiac-virgo
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-blank"></i> mdi mdi-blank
                                            </div>

                                            <div className="col-12">
                                                <h5 className="mb-3">Size</h5>
                                            </div>

                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-18px mdi-account"></i> mdi-18px
                                            </div>

                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-24px mdi-account"></i> mdi-24px
                                            </div>

                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-36px mdi-account"></i> mdi-36px
                                            </div>

                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-48px mdi-account"></i> mdi-48px
                                            </div>

                                            <div className="col-12">
                                                <h5 className="mb-3">Rotate</h5>
                                            </div>

                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rotate-45 mdi-account"></i> mdi-rotate-45
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rotate-90 mdi-account"></i> mdi-rotate-90
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rotate-135 mdi-account"></i> mdi-rotate-135
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rotate-180 mdi-account"></i> mdi-rotate-180
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rotate-225 mdi-account"></i> mdi-rotate-225
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rotate-270 mdi-account"></i> mdi-rotate-270
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-rotate-315 mdi-account"></i> mdi-rotate-315
                                            </div>

                                            <div className="col-12">
                                                <h5 className="mb-3">Spin</h5>
                                            </div>

                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-spin mdi-loading"></i> mdi-spin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="mdi mdi-spin mdi-star"></i> mdi-spin
                                            </div>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </TabPane>
                            <TabPane tabId="2">
                                <Card>
                                    <CardBody>
                                        <Row className="icons-list-demo">
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-alarm"></i> dripicons-alarm
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-align-center"></i> dripicons-align-center
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-align-justify"></i> dripicons-align-justify
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-align-left"></i> dripicons-align-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-align-right"></i> dripicons-align-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-anchor"></i> dripicons-anchor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-archive"></i> dripicons-archive
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-arrow-down"></i> dripicons-arrow-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-arrow-left"></i> dripicons-arrow-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-arrow-right"></i> dripicons-arrow-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-arrow-thin-down"></i> dripicons-arrow-thin-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-arrow-thin-left"></i> dripicons-arrow-thin-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-arrow-thin-right"></i>{' '}
                                                dripicons-arrow-thin-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-arrow-thin-up"></i> dripicons-arrow-thin-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-arrow-up"></i> dripicons-arrow-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-article"></i> dripicons-article
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-backspace"></i> dripicons-backspace
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-basket"></i> dripicons-basket
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-basketball"></i> dripicons-basketball
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-battery-empty"></i> dripicons-battery-empty
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-battery-full"></i> dripicons-battery-full
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-battery-low"></i> dripicons-battery-low
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-battery-medium"></i> dripicons-battery-medium
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-bell"></i> dripicons-bell
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-blog"></i> dripicons-blog
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-bluetooth"></i> dripicons-bluetooth
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-bold"></i> dripicons-bold
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-bookmark"></i> dripicons-bookmark
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-bookmarks"></i> dripicons-bookmarks
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-box"></i> dripicons-box
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-briefcase"></i> dripicons-briefcase
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-brightness-low"></i> dripicons-brightness-low
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-brightness-max"></i> dripicons-brightness-max
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-brightness-medium"></i>{' '}
                                                dripicons-brightness-medium
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-broadcast"></i> dripicons-broadcast
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-browser"></i> dripicons-browser
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-browser-upload"></i> dripicons-browser-upload
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-brush"></i> dripicons-brush
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-calendar"></i> dripicons-calendar
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-camcorder"></i> dripicons-camcorder
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-camera"></i> dripicons-camera
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-card"></i> dripicons-card
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-cart"></i> dripicons-cart
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-checklist"></i> dripicons-checklist
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-checkmark"></i> dripicons-checkmark
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-chevron-down"></i> dripicons-chevron-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-chevron-left"></i> dripicons-chevron-left
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-chevron-right"></i> dripicons-chevron-right
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-chevron-up"></i> dripicons-chevron-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-clipboard"></i> dripicons-clipboard
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-clock"></i> dripicons-clock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-clockwise"></i> dripicons-clockwise
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-cloud"></i> dripicons-cloud
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-cloud-download"></i> dripicons-cloud-download
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-cloud-upload"></i> dripicons-cloud-upload
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-code"></i> dripicons-code
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-contract"></i> dripicons-contract
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-contract-2"></i> dripicons-contract-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-conversation"></i> dripicons-conversation
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-copy"></i> dripicons-copy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-crop"></i> dripicons-crop
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-cross"></i> dripicons-cross
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-crosshair"></i> dripicons-crosshair
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-cutlery"></i> dripicons-cutlery
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-device-desktop"></i> dripicons-device-desktop
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-device-mobile"></i> dripicons-device-mobile
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-device-tablet"></i> dripicons-device-tablet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-direction"></i> dripicons-direction
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-disc"></i> dripicons-disc
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-document"></i> dripicons-document
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-document-delete"></i> dripicons-document-delete
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-document-edit"></i> dripicons-document-edit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-document-new"></i> dripicons-document-new
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-document-remove"></i> dripicons-document-remove
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-dot"></i> dripicons-dot
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-dots-2"></i> dripicons-dots-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-dots-3"></i> dripicons-dots-3
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-download"></i> dripicons-download
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-duplicate"></i> dripicons-duplicate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-enter"></i> dripicons-enter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-exit"></i> dripicons-exit
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-expand"></i> dripicons-expand
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-expand-2"></i> dripicons-expand-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-experiment"></i> dripicons-experiment
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-export"></i> dripicons-export
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-feed"></i> dripicons-feed
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-flag"></i> dripicons-flag
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-flashlight"></i> dripicons-flashlight
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-folder"></i> dripicons-folder
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-folder-open"></i> dripicons-folder-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-forward"></i> dripicons-forward
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-gaming"></i> dripicons-gaming
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-gear"></i> dripicons-gear
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-graduation"></i> dripicons-graduation
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-graph-bar"></i> dripicons-graph-bar
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-graph-line"></i> dripicons-graph-line
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-graph-pie"></i> dripicons-graph-pie
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-headset"></i> dripicons-headset
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-heart"></i> dripicons-heart
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-help"></i> dripicons-help
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-home"></i> dripicons-home
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-hourglass"></i> dripicons-hourglass
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-inbox"></i> dripicons-inbox
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-information"></i> dripicons-information
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-italic"></i> dripicons-italic
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-jewel"></i> dripicons-jewel
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-lifting"></i> dripicons-lifting
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-lightbulb"></i> dripicons-lightbulb
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-link"></i> dripicons-link
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-link-broken"></i> dripicons-link-broken
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-list"></i> dripicons-list
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-loading"></i> dripicons-loading
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-location"></i> dripicons-location
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-lock"></i> dripicons-lock
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-lock-open"></i> dripicons-lock-open
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-mail"></i> dripicons-mail
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-map"></i> dripicons-map
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-media-loop"></i> dripicons-media-loop
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-media-next"></i> dripicons-media-next
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-media-pause"></i> dripicons-media-pause
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-media-play"></i> dripicons-media-play
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-media-previous"></i> dripicons-media-previous
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-media-record"></i> dripicons-media-record
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-media-shuffle"></i> dripicons-media-shuffle
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-media-stop"></i> dripicons-media-stop
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-medical"></i> dripicons-medical
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-menu"></i> dripicons-menu
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-message"></i> dripicons-message
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-meter"></i> dripicons-meter
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-microphone"></i> dripicons-microphone
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-minus"></i> dripicons-minus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-monitor"></i> dripicons-monitor
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-move"></i> dripicons-move
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-music"></i> dripicons-music
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-network-1"></i> dripicons-network-1
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-network-2"></i> dripicons-network-2
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-network-3"></i> dripicons-network-3
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-network-4"></i> dripicons-network-4
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-network-5"></i> dripicons-network-5
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-pamphlet"></i> dripicons-pamphlet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-paperclip"></i> dripicons-paperclip
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-pencil"></i> dripicons-pencil
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-phone"></i> dripicons-phone
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-photo"></i> dripicons-photo
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-photo-group"></i> dripicons-photo-group
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-pill"></i> dripicons-pill
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-pin"></i> dripicons-pin
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-plus"></i> dripicons-plus
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-power"></i> dripicons-power
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-preview"></i> dripicons-preview
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-print"></i> dripicons-print
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-pulse"></i> dripicons-pulse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-question"></i> dripicons-question
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-reply"></i> dripicons-reply
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-reply-all"></i> dripicons-reply-all
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-return"></i> dripicons-return
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-retweet"></i> dripicons-retweet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-rocket"></i> dripicons-rocket
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-scale"></i> dripicons-scale
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-search"></i> dripicons-search
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-shopping-bag"></i> dripicons-shopping-bag
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-skip"></i> dripicons-skip
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-stack"></i> dripicons-stack
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-star"></i> dripicons-star
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-stopwatch"></i> dripicons-stopwatch
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-store"></i> dripicons-store
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-suitcase"></i> dripicons-suitcase
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-swap"></i> dripicons-swap
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-tag"></i> dripicons-tag
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-tag-delete"></i> dripicons-tag-delete
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-tags"></i> dripicons-tags
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-thumbs-down"></i> dripicons-thumbs-down
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-thumbs-up"></i> dripicons-thumbs-up
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-ticket"></i> dripicons-ticket
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-time-reverse"></i> dripicons-time-reverse
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-to-do"></i> dripicons-to-do
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-toggles"></i> dripicons-toggles
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-trash"></i> dripicons-trash
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-trophy"></i> dripicons-trophy
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-upload"></i> dripicons-upload
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-user"></i> dripicons-user
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-user-group"></i> dripicons-user-group
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-user-id"></i> dripicons-user-id
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-vibrate"></i> dripicons-vibrate
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-view-apps"></i> dripicons-view-apps
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-view-list"></i> dripicons-view-list
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-view-list-large"></i> dripicons-view-list-large
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-view-thumb"></i> dripicons-view-thumb
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-volume-full"></i> dripicons-volume-full
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-volume-low"></i> dripicons-volume-low
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-volume-medium"></i> dripicons-volume-medium
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-volume-off"></i> dripicons-volume-off
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-wallet"></i> dripicons-wallet
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-warning"></i> dripicons-warning
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-web"></i> dripicons-web
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-weight"></i> dripicons-weight
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-wifi"></i> dripicons-wifi
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-wrong"></i> dripicons-wrong
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-zoom-in"></i> dripicons-zoom-in
                                            </div>
                                            <div className="col-sm-6 col-md-4 col-lg-3">
                                                <i className="dripicons-zoom-out"></i> dripicons-zoom-out
                                            </div>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Icons;
