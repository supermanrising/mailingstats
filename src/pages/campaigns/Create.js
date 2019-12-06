// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Select from 'react-select';
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Spinner from '../../components/Spinner';
import CreativeInputs from '../../components/CreativeInputs';

import PageTitle from '../../components/PageTitle';

import { ESPs, segments, send_types, Accounts } from './constants';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            esp: '',
            accountID: '',
            espCampaignID: '',
            send_type: '',
            segment: '',
            offer: '',
            creative: '',
            subject: '',
            offers: [],
            loadingOffers: true,
            accounts: [],
            creatives: [],
            subjects: [],
            loadingCreativeData: false,
            creativesModalOpen: false,
            send_typeInvalid: false,
            segmentInvalid: false,
            espInvalid: false,
            offerInvalid: false,
            creativeInvalid: false,
            subjectInvalid: false,
            displayValidation: false,
            espAccount: '',
            espAccountRequired: false,
            espAccounts: [],
            espAccountInvalid: false,
            creatingCampaign: false,
            finished: false,
        };
    }

    componentDidMount() {
        axios.get(`https://mailstats.bluemodoteam.com/offer?active=True`).then(res => {
            const offers = [];
            res.data.forEach(function(offer) {
                offers.push({
                    'label': offer.name,
                    'value': offer
                });
            });
            this.setState({
                offers,
                loadingOffers: false
            })
        });
    }

    basicFormChange = (target, value) => {
        const validationTarget = target + 'Invalid';
        this.setState({
            [target]: value,
            creativesModalOpen: false,
            [validationTarget]: false
        });
        if (target === 'esp') {
            if (value.value === 'ConvertKit' || value.value === 'Ontraport') {
                this.setState({
                    espAccounts: Accounts[value.value],
                    espAccountRequired: true
                });
            } else {
                this.setState({
                    espAccounts: '',
                    espAccountRequired: false
                });
            }
        }
    }

    handleOfferChange = (target, value) => {
        this.setState({
            offer: value,
            loadingCreativeData: true,
            creativesModalOpen: false,
            offerInvalid: false,
        });
        const offerID = value.value.id.toString();
        axios.get(`https://mailstats.bluemodoteam.com/offer/${offerID}`).then(res => {
            console.log(res);
            const creatives = [];
            const subjects = [];
            res.data.creatives.forEach(function(creative) {
                creatives.push({
                    'label': creative.name,
                    'value': creative
                });
            });
            creatives.push({
                'label': 'Custom Creative',
                'value': {
                    name: 'Custom Creative',
                    content: 'Custom Creative',
                    id: 0
                },
            });
            res.data.subjects.forEach(function(subject) {
                subjects.push({
                    'label': subject.name,
                    'value': subject.name
                });
            });
            subjects.push({
                'label': 'Custom Subject',
                'value': 'Custom Subject',
            })
            this.setState({
                creatives,
                subjects,
                loadingCreativeData: false
            });
        });
    }

    toggleCreativesModal = () => {
        this.setState(prevState => ({
            creativesModalOpen: !prevState.creativesModalOpen,
        }));
    }

    createCampaign = (e) => {
        e.preventDefault();
        this.resetValidation();
        var send_typeInvalid = false,
            segmentInvalid = false,
            espInvalid = false,
            espAccountInvalid = false,
            offerInvalid = false,
            creativeInvalid = false,
            subjectInvalid = false,
            displayValidation = false;

        // Clear out offer data if this is a newsletter
        if (this.state.send_type.value === 'Newsletter') {
            this.setState({
                offer: '',
                creative: '',
                subject: ''
            });
        }

        // Clear out esp account data if not required
        if (this.state.espAccountRequired === false) {
            this.setState({
                espAccount: '',
            });
        }

        if (this.state.send_type === '') {
            send_typeInvalid = true;
            displayValidation = true;
        }
        if (this.state.segment === '') {
            segmentInvalid = true;
            displayValidation = true;
        }
        if (this.state.esp === '') {
            espInvalid = true;
            displayValidation = true;
        }
        if (this.state.espAccount === '' && this.state.espAccountRequired === true) {
            espAccountInvalid = true;
            displayValidation = true;
        }
        if (this.state.offer === '' && this.state.send_type.value === 'Promotional') {
            offerInvalid = true;
            displayValidation = true;
        }
        if (this.state.creative === '' && this.state.send_type.value === 'Promotional') {
            creativeInvalid = true;
            displayValidation = true;
        }
        if (this.state.subject === '' && this.state.send_type.value === 'Promotional') {
            subjectInvalid = true;
            displayValidation = true;
        }

        this.setState({
            send_typeInvalid,
            segmentInvalid,
            espInvalid,
            espAccountInvalid,
            offerInvalid,
            creativeInvalid,
            subjectInvalid,
            displayValidation
        });

        if (!displayValidation) {
            // display spinner
            this.setState({
                creatingCampaign: true
            });
            // Continue to create campaign
            var data = {};
            data.mailer = this.props.user.firstName;
            data.esp = this.state.esp.value;
            data.list_segment = this.state.segment.value;
            data.send_type = this.state.send_type.value;
            if (data.send_type === 'Promotional') {
                data.offer = this.state.offer.value.name;
                data.creative = this.state.creative.value.name;
                data.subject = this.state.subject.value;
            }
            if (this.state.espAccountRequired) {
                data.espAccount = this.state.espAccount.value;
            }
            axios.post(`https://mailstats.bluemodoteam.com/createcampaign`, data).then((response) => {
                console.log(response);
                const campaignID = response.data.id;
                this.setState({
                    creatingCampaign: false,
                    finished: true
                });
                // All we need to do now is redirect to the edit page for this campaign
                setTimeout(() => {
                    this.props.history.push("/campaigns/edit/" + campaignID);
                }, 3000);
            }).catch((error) => {
                console.log(error);
                this.setState({
                    creatingCampaign: false
                });
            });
        }
    }

    resetValidation = () => {
        this.setState({
            send_typeInvalid: false,
            segmentInvalid: false,
            espInvalid: false,
            offerInvalid: false,
            creativeInvalid: false,
            subjectInvalid: false,
            espAccountInvalid: false,
            displayValidation: false,
        });
    }

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[{ label: 'Campaigns', path: '/campaigns/create' }, { label: 'Create', active: true }]}
                    title={'Create Campaign'}
                />
                <Card>
                    <CardBody>
                    {this.state.creatingCampaign ? (
                        <div className="text-center">
                            <h4 className="mt-4 header-title text-center">Creating Campaign</h4>
                            <Spinner className="m-2 text-center" color='primary' />;
                        </div>
                    ) : this.state.finished ? (
                        <div className="text-center mt-4">
                            <svg className={this.state.finished ? 'checkmark active' : 'checkmark'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className={this.state.finished ? 'checkmark__circle active' : 'checkmark__circle'} cx="26" cy="26" r="25" fill="none"/><path className={this.state.finished ? 'checkmark__check active' : 'checkmark__check'} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                            <h3 className="text-center mb-3">Campaign Created!</h3>
                        </div>
                    ) : (
                        <Form onSubmit={this.createCampaign} className={ this.state.displayValidation ? 'was-validated' : '' }>
                            <Row>
                                <Col lg={6}>
                                    <FormGroup>
                                        <Label for="SendType">Send Type</Label>
                                        <Select
                                            value={this.state.send_type}
                                            onChange={ (value) => this.basicFormChange('send_type', value)}
                                            options={send_types}
                                            name="SendType"
                                            styles={{
                                                control: styles => ({
                                                    ...styles,
                                                    borderColor: this.state.send_typeInvalid ? 'red' : styles.borderColor
                                                })
                                            }} 
                                        />
                                        {this.state.send_typeInvalid && 
                                            <p className="text-danger">Please select a send type</p>
                                        }
                                    </FormGroup>
                                </Col>
                                <Col lg={6}>
                                    <FormGroup>
                                        <Label for="Segment">List Segment</Label>
                                        <Select
                                            value={this.state.segment}
                                            onChange={ (value) => this.basicFormChange('segment', value)}
                                            options={segments}
                                            name="Segment"
                                            styles={{
                                                control: styles => ({
                                                    ...styles,
                                                    borderColor: this.state.segmentInvalid ? 'red' : styles.borderColor
                                                })
                                            }} 
                                        />
                                        {this.state.segmentInvalid && 
                                            <p className="text-danger">Please select a segment</p>
                                        }
                                    </FormGroup>
                                </Col>
                                <Col lg={6}>
                                    <FormGroup>
                                        <Label for="ESP">ESP</Label>
                                        <Select
                                            value={this.state.esp}
                                            onChange={ (value) => this.basicFormChange('esp', value)}
                                            options={ESPs}
                                            name="ESP"
                                            styles={{
                                                control: styles => ({
                                                    ...styles,
                                                    borderColor: this.state.espInvalid ? 'red' : styles.borderColor
                                                })
                                            }} 
                                        />
                                        {this.state.espInvalid && 
                                            <p className="text-danger">Please select an ESP</p>
                                        }
                                    </FormGroup>
                                </Col>
                                {this.state.espAccountRequired &&
                                    <Col lg={6}>
                                        <FormGroup>
                                            <Label for="espAccount">ESP Account</Label>
                                            <Select
                                                value={this.state.espAccount}
                                                onChange={ (value) => this.basicFormChange('espAccount', value)}
                                                options={this.state.espAccounts}
                                                name="espAccount"
                                                styles={{
                                                    control: styles => ({
                                                        ...styles,
                                                        borderColor: this.state.espAccountInvalid ? 'red' : styles.borderColor
                                                    })
                                                }} 
                                            />
                                            {this.state.espAccountInvalid && 
                                                <p className="text-danger">Please select an ESP account</p>
                                            }
                                        </FormGroup>
                                    </Col>
                                }
                            </Row>
                            {this.state.send_type.value !== 'Newsletter' &&
                                <Row>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <Label for="Offer">Offer</Label>
                                            <Select
                                                value={this.state.offer}
                                                onChange={(value) => this.handleOfferChange('offer', value)}
                                                options={this.state.offers}
                                                name="Offer"
                                                styles={{
                                                control: styles => ({
                                                    ...styles,
                                                    borderColor: this.state.offerInvalid ? 'red' : styles.borderColor
                                                })
                                            }} 
                                            />
                                            {this.state.offerInvalid && 
                                                <p className="text-danger">Please select an offer. If you aren't sending an offer, select 'Newsletter' for the send type</p>
                                            }
                                        </FormGroup>
                                    </Col>
                                    <CreativeInputs
                                        creative={this.state.creative}
                                        creatives={this.state.creatives}
                                        subject={this.state.subject}
                                        subjects={this.state.subjects}
                                        basicFormChange={this.basicFormChange}
                                        loadingCreativeData={this.state.loadingCreativeData}
                                        offerIsBlank={this.state.offer === '' ? true : false}
                                        toggleCreativesModal={this.toggleCreativesModal}
                                        creativeInvalid={this.state.creativeInvalid}
                                        subjectInvalid={this.state.subjectInvalid}
                                    />
                                </Row>
                            }
                            <Row>
                                <Col>
                                    <Button color="primary" className="mt-2" type="Submit">Create Campaign</Button>
                                </Col>
                            </Row>
                        </Form>
                    )}
                        <Modal
                            isOpen={this.state.creativesModalOpen}
                            toggle={this.toggleCreativesModal}
                            className="modal-dialog-scrollable">
                            <ModalHeader toggle={this.toggleCreativesModal} className="modal-colored-header bg-primary">Creatives</ModalHeader>
                            <ModalBody>
                                {this.state.creatives.map((creative) =>
                                    <div className="creativeItem" key={creative.value.id}>
                                        <h3>{creative.value.name}</h3>
                                        <p dangerouslySetInnerHTML={{__html: creative.value.content.replace(/\n/g,'<br>')}}></p>
                                        <Button color="primary" onClick={(e) => this.basicFormChange('creative', creative)}>Use {creative.value.name}</Button>
                                    </div>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggleCreativesModal}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    const { user } = state.Auth;
    return { user };
};

export default connect(mapStateToProps)(Create);
