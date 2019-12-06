// @flow
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Select from 'react-select';

import PageTitle from '../../components/PageTitle';
import { Row, Col, Card, CardBody, FormGroup, Label, Input, InputGroup, InputGroupAddon, Button, Form, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '../../components/Spinner';
import CreativeInputs from '../../components/CreativeInputs';

import '../../assets/scss/custom/components/ReactToastify.css';
import { ESPs, segments, send_types, Accounts } from './constants';

const placeholders = {
    'Ontraport': 'https://app.ontraport.com/#!/message/edit&id=938',
    'ConvertKit': 'https://app.convertkit.com/campaigns/3244900/...'
};

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaign: {},
            loading: true,
            showToast: true,
            send_type: '',
            segment: '',
            esp: '',
            offer: '',
            creatives: [],
            creative: '',
            subjects: [],
            subject: '',
            offerInvalid: false,
            creativeInvalid: false,
            subjectInvalid: false,
            espAccountRequired: false,
            espAccounts: [],
            espAccountInvalid: false,
            offers: [],
            creativesModalOpen: false,
            loadingCreativeData: true,
            contentUpdated: false,
            displayValidation: false,
            updatingCampaign: false,
            finished: false,
            espCampaignID: '',
            updatingEspCampaignId: false,
            deleteModalOpen: false,
            deleting: false
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        const self = this;

        axios.all([
            axios.get(`https://mailstats.bluemodoteam.com/v2/campaigns?campaignid=${params.campaignID}&admin=true`),
            axios.get(`https://mailstats.bluemodoteam.com/offer?active=True`)
        ]).then(axios.spread(function (campaign_res, offer_res) {
            // Both requests are now complete
            var campaign = campaign_res.data.data[0], // campaign data
            espAccounts = [],
            espAccountRequired = false,
            offers = [],
            offer = '',
            creative = '',
            subject = '',
            espCampaignID = '';

            console.log(campaign);
            campaign.name = campaign.id + ' | ' + campaign.mailer + ' | ' + campaign.list_segment + ' | ' + campaign.send_type;

            if (campaign.esp === 'ConvertKit' || campaign.esp === 'Ontraport') {
                espAccounts = Accounts[campaign.esp];
                espAccountRequired = true;
                if (campaign.espCampaignID !== '' && campaign.espCampaignID !== null) {
                    espCampaignID = campaign.esp === 'ConvertKit' ? 'https://app.convertkit.com/campaigns/' : 'https://app.ontraport.com/#!/message/edit&id=';
                    espCampaignID = espCampaignID + campaign.espCampaignID;
                    espCampaignID = campaign.esp === 'ConvertKit' ? espCampaignID + '/...' : espCampaignID;
                }
            }

            offer_res.data.forEach(function(o) {
                if (o.name === campaign.offer) {
                    offer = {
                        'label': o.name,
                        'value': o
                    };
                }
                offers.push({
                    'label': o.name,
                    'value': o
                });
            });

            self.setState({
                campaign,
                espAccountRequired,
                espAccounts,
                offers,
                offer,
                espCampaignID,
                send_type: {label: campaign.send_type, value: campaign.send_type},
                segment: {label: campaign.list_segment, value: campaign.list_segment},
                esp: {label: campaign.esp, value: campaign.esp},
                espAccount: {label: campaign.account_id, value: campaign.account_id},
                loading: false
            });

            if (campaign.send_type === 'Promotional') {
                // We need to get creative and subject data
                axios.get(`https://mailstats.bluemodoteam.com/offer/${offer.value.id}`).then(res => {
                    console.log(res);
                    var creatives = [],
                        subjects = [],
                        customCreative = {
                            'label': 'Custom Creative',
                            'value': {
                                name: 'Custom Creative',
                                content: '',
                                id: 0
                            }
                        },
                        customSubject = {'label': 'Custom Subject', 'value': 'Custom Subject'};

                    res.data.creatives.forEach(function(c) {
                        if (c.name === campaign.creative) {
                            creative = {
                                'label': c.name,
                                'value': c
                            };
                        }
                        creatives.push({
                            'label': c.name,
                            'value': c
                        });
                    });
                    if (campaign.creative === customCreative.value.name) {
                        creative = customCreative;
                    }
                    creatives.push(customCreative);
                    res.data.subjects.forEach(function(s) {
                        if (s.name === campaign.subject) {
                            subject = {
                                'label': s.name,
                                'value': s.name
                            };
                        }
                        subjects.push({
                            'label': s.name,
                            'value': s.name
                        });
                    });
                    if (campaign.subject === customSubject.value) {
                        subject = customSubject;
                    }
                    subjects.push(customSubject);
                    self.setState({
                        creatives,
                        subjects,
                        creative,
                        subject,
                        loadingCreativeData: false,
                    });
                });
            } else {
                self.setState({
                    loadingCreativeData: false,
                });
            }
        }));
    }

    resetValidation = () => {
        this.setState({
            offerInvalid: false,
            creativeInvalid: false,
            subjectInvalid: false,
            espAccountInvalid: false,
            displayValidation: false,
        });
    }

    updateCampaign = (e) => {
        e.preventDefault();
        if (this.props.user.role !== 'Admin' && this.props.user.firstName !== this.state.campaign.mailer) {
            toast.error("Whoa! You don't have access to edit this campaign. Contact Ryan if this is an error.");
            return false;
        }
        this.resetValidation();
        var espAccountInvalid = false,
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

        if ( (this.state.espAccount.value === '' || this.state.espAccount.value === 'None') && this.state.espAccountRequired === true) {
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
            espAccountInvalid,
            offerInvalid,
            creativeInvalid,
            subjectInvalid,
            displayValidation
        });

        if (!displayValidation) {
            // display spinner
            this.setState({
                updatingCampaign: true
            });
            // Continue to create campaign
            var data = {
                campaignid: this.state.campaign.id
            };
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
            
            // Do the update request here
            axios.put(`https://mailstats.bluemodoteam.com/v2/campaigns`, data).then((response) => {
                console.log(response);
                const campaignID = response.data.id;
                this.setState({
                    updatingCampaign: false,
                    finished: true
                });
                // Reload the page
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }).catch((error) => {
                console.log(error);
                this.setState({
                    updatingCampaign: false
                });
            });
        }
    }

    resetData = () => {
        this.props.history.push("/campaigns/edit/" + this.state.campaign.id.toString());
    }

    basicFormChange = (target, value) => {
        const contentUpdated = target === 'espCampaignID' ? false : true;
        this.setState({
            [target]: value,
            creativesModalOpen: false,
            contentUpdated: contentUpdated,
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
            creative: '',
            subject: '',
            contentUpdated: true,
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
            res.data.subjects.forEach(function(subject) {
                subjects.push({
                    'label': subject.name,
                    'value': subject.name
                });
            });
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

    toggleDeleteModal = () => {
        this.setState(prevState => ({
            deleteModalOpen: !prevState.deleteModalOpen
        }));
    }

    setEspId = () => {
        if (this.props.user.role !== 'Admin' && this.props.user.firstName !== this.state.campaign.mailer) {
            toast.error("Whoa! You don't have access to edit this campaign. Contact Ryan if this is an error.");
            return false;
        }
        if (this.state.espCampaignID === '') {
            toast.error("Please enter the campaign URL before saving.")
            return false;
        }

        var espCampaignID = this.state.espCampaignID;

        if (this.state.esp.value === 'ConvertKit') {
            espCampaignID = espCampaignID.split('/campaigns/').pop().split('/')[0];
        } else if (this.state.esp.value === 'Ontraport') {
            //https://app.ontraport.com/#!/message/edit&id=938
            espCampaignID = espCampaignID.split('id=').pop();
        }

        toast.info("Updating Campaign URL")

        // update request
        axios.put(`https://mailstats.bluemodoteam.com/v2/campaigns`, {
            campaignid: this.state.campaign.id,
            espCampaignID: espCampaignID
        }).then((response) => {
            var camapaignCopy = this.state.campaign;
            camapaignCopy.espCampaignID = espCampaignID;
            this.setState({camapaignCopy});
            toast.success("Updated!")
        }).catch((error) => {
            toast.error("Whoa! Something went wrong. Hit up Ryan and tell him to fix this.")
        });
    }

    deleteCampaign = () => {
        if (this.props.user.role !== 'Admin' && this.props.user.firstName !== this.state.campaign.mailer) {
            toast.error("Whoa! You don't have access to edit this campaign. Contact Ryan if this is an error.");
            return false;
        }
        this.setState({
            deleting: true
        });
        axios.delete(`https://mailstats.bluemodoteam.com/v2/campaigns`, {
            data: {
                campaignid: this.state.campaign.id,
            }
        }).then((response) => {
            console.log(response);

            this.setState({
                deleting: false,
                finishedDeleting: true,
            });
            
            setTimeout(() => {
                this.setState({
                    deleteModalOpen: false,
                    finishedDeleting: false
                });
                this.props.history.push("/campaigns/view/");
            }, 2000);
        }).catch((error) => {
            toast.error("Whoa! Something went wrong. Hit up Ryan and tell him to fix this.")
        });
    }

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[{ label: 'Campaigns', path: '/campaigns/view' }, { label: 'Details', active: true }]}
                    title={'Campaign Details'}
                />
                {this.state.loading ? (
                    <Card>
                        <CardBody>
                            <Row>
                                <Col className="text-center">
                                    <h4 className="mt-4 header-title text-center">Loading Campaign Details</h4>
                                    <Spinner className="m-2 text-center" color='primary' />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                ) : (
                    <React.Fragment>
                        {this.state.updatingCampaign ? (
                            <Card>
                                <CardBody>
                                    <div className="text-center">
                                        <h4 className="mt-4 header-title text-center">Updating Campaign</h4>
                                        <Spinner className="m-2 text-center" color='primary' />;
                                    </div>
                                </CardBody>
                            </Card>
                        ) : this.state.finished ? (
                            <Card>
                                <CardBody>
                                    <div className="text-center mt-4">
                                        <svg className={this.state.finished ? 'checkmark active' : 'checkmark'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className={this.state.finished ? 'checkmark__circle active' : 'checkmark__circle'} cx="26" cy="26" r="25" fill="none"/><path className={this.state.finished ? 'checkmark__check active' : 'checkmark__check'} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                                        <h3 className="text-center mb-3">Campaign Updated!</h3>
                                    </div>
                                </CardBody>
                            </Card>
                        ) : (
                            <React.Fragment>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col lg={5}>
                                                <FormGroup>
                                                    <Label for="campaignid">Campaign ID</Label>
                                                    <InputGroup>
                                                        <Input type="text" name="campaignid" id="campaignid" placeholder={this.state.campaign.id} readOnly />
                                                        <InputGroupAddon addonType="append">
                                                            <CopyToClipboard
                                                                text={this.state.campaign.id}
                                                                onCopy={() => toast.success("Copied to clipboard!")}
                                                            >
                                                                <Button color="primary"><i className="mdi mdi-content-copy"></i></Button>
                                                            </CopyToClipboard>
                                                        </InputGroupAddon>
                                                    </InputGroup>
                                                    <p className="text-muted mt-1">Pass this to subid4 when creating your offer link in Build Redirects.</p>
                                                </FormGroup>
                                            </Col>
                                            <Col lg={7}>
                                                <FormGroup>
                                                    <Label for="campaignname">Campaign Name</Label>
                                                    <InputGroup>
                                                        <Input type="text" name="campaignname" id="campaignname" placeholder={this.state.campaign.name} readOnly />
                                                        <InputGroupAddon addonType="append">
                                                            <CopyToClipboard
                                                                text={this.state.campaign.name}
                                                                onCopy={() => toast.success("Copied to clipboard!")}
                                                            >
                                                                <Button color="primary"><i className="mdi mdi-content-copy"></i></Button>
                                                            </CopyToClipboard>
                                                        </InputGroupAddon>
                                                    </InputGroup>
                                                    <p className="text-muted mt-1">Use this as the campaign name. If it's too long or you don't want to, the only important page is "<span>{this.state.campaign.id + ' | '}</span>" at the beginning. You can change anything after that.</p>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        { (this.state.campaign.esp === 'ConvertKit' || this.state.campaign.esp === 'Ontraport') &&
                                            <Row>
                                                <Col>
                                                    { (this.state.campaign.espCampaignID === '' || this.state.campaign.espCampaignID === null) &&
                                                        <h4 className="text-danger">Important</h4>
                                                    }
                                                    <FormGroup>
                                                        <Label for="espCampaignID">{this.state.campaign.esp} Url</Label>
                                                        <InputGroup>
                                                            <Input
                                                                type="text"
                                                                name="espCampaignID"
                                                                id="espCampaignID"
                                                                value={this.state.espCampaignID}
                                                                placeholder={placeholders[this.state.campaign.esp]}
                                                                onChange={(value) => this.basicFormChange('espCampaignID', value.target.value)}
                                                                className={ this.state.espCampaignID === '' ? 'espid_invalid' : ''}
                                                            />
                                                            { (this.props.user.role === 'Admin' || this.props.user.firstName === this.state.campaign.mailer) &&
                                                                <InputGroupAddon addonType="append">
                                                                    <Button color="primary" onClick={() => this.setEspId()}>Save</Button>
                                                                </InputGroupAddon>
                                                            }
                                                        </InputGroup>
                                                        <p className="text-muted mt-1">Copy the campaign URL from {this.state.campaign.esp} and paste it here. We need this to link up statistics for your campaign.</p>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        }
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <Form onSubmit={this.updateCampaign}>
                                            <Row>
                                               <Col lg={6}>
                                                    <FormGroup>
                                                        <Label for="SendType">Send Type</Label>
                                                        <Select
                                                            value={this.state.send_type}
                                                            onChange={ (value) => this.basicFormChange('send_type', value)}
                                                            options={send_types}
                                                            name="SendType"
                                                        />
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
                                                        />
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
                                                        />
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
                                                                <p className="text-danger">Please select a value</p>
                                                            }
                                                        </FormGroup>
                                                    </Col>
                                                }
                                            </Row>
                                            {this.state.send_type.value === 'Promotional' &&
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
                                            { (this.props.user.role === 'Admin' || this.props.user.firstName === this.state.campaign.mailer) &&
                                                <Row>
                                                    <Col lg={6}>
                                                        <Button
                                                            color="primary"
                                                            className="mt-2"
                                                            type="Submit"
                                                            disabled={!this.state.contentUpdated}
                                                        >
                                                            Update Campaign
                                                        </Button>
                                                        { this.state.contentUpdated &&
                                                            <Button
                                                                color="secondary"
                                                                className="mt-2 ml-1"
                                                                onClick={ () => window.location.reload() }
                                                            >
                                                                Cancel Updates
                                                            </Button>
                                                        }
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Button
                                                            color="danger"
                                                            className="mt-2 float-right"
                                                            onClick={this.toggleDeleteModal}
                                                        >
                                                            Delete Campaign
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            }
                                        </Form>
                                    </CardBody>
                                </Card>
                            </React.Fragment>
                        )}
                    </React.Fragment>
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
                <Modal
                    isOpen={this.state.deleteModalOpen}
                    toggle={this.toggleDeleteModal}
                    className="modal-dialog modal-dialog-centered">
                    <ModalHeader toggle={this.toggleDeleteModal} className="">Delete Campaign</ModalHeader>
                    {this.state.deleting ? (
                        <div className="text-center">
                            <h4 className="mt-4 header-title text-center">Deleting Campaign</h4>
                            <Spinner className="m-2 text-center" color='primary' />;
                        </div>
                    ) : this.state.finishedDeleting ? (
                        <div className="text-center mt-4">
                            <svg className={this.state.finishedDeleting ? 'checkmark active' : 'checkmark'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className={this.state.finishedDeleting ? 'checkmark__circle active' : 'checkmark__circle'} cx="26" cy="26" r="25" fill="none"/><path className={this.state.finishedDeleting ? 'checkmark__check active' : 'checkmark__check'} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                            <h3 className="text-center mb-3">Campaign Deleted!</h3>
                        </div>
                    ) : (
                        <ModalBody>
                            <h3>Are you sure you want to delete this campaign?</h3>
                        </ModalBody>
                    )}
                    <ModalFooter>
                        <Button color="danger" onClick={this.deleteCampaign}>
                            Delete Campaign
                        </Button>
                        <Button color="secondary" onClick={this.toggleDeleteModal}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
                <ToastContainer
                    autoClose={3000}
                />
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
};

export default connect(
    mapStateToProps
)(Details);
