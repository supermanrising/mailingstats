// @flow
import React from 'react';
import Select from 'react-select';
import { Col, FormGroup, Label } from 'reactstrap';
import Spinner from './Spinner';

const CreativeInputs = (props) => {
    if (props.loadingCreativeData === true) {
        return (
            <Col lg={12} className="text-center">
                <h4 className="mt-2 header-title text-center">Loading Offer Data</h4>
                <Spinner className="m-2 text-center" color='primary' />;
            </Col>
        );
    } else if (props.offerIsBlank === true) {
        return <div></div>;
    }
    return (
        <React.Fragment>
            <Col lg={6}>
                <FormGroup>
                    <Label for="Creative">Creative</Label><span onClick={props.toggleCreativesModal} className="custom-text-link pl-2">View All</span>
                    <Select
                        value={props.creative}
                        onChange={ (value) => props.basicFormChange('creative', value)}
                        options={props.creatives}
                        name="Creative"
                        styles={{
                            control: styles => ({
                                ...styles,
                                borderColor: props.creativeInvalid ? 'red' : styles.borderColor
                            })
                        }}
                    />
                    {props.creativeInvalid && 
                        <p className="text-danger">Please select a creative</p>
                    }
                </FormGroup>
            </Col>
            <Col lg={6}>
                <FormGroup>
                    <Label for="Subject">Subject</Label>
                    <Select
                        value={props.subject}
                        onChange={ (value) => props.basicFormChange('subject', value)}
                        options={props.subjects}
                        name="Subject"
                        styles={{
                            control: styles => ({
                                ...styles,
                                borderColor: props.subjectInvalid ? 'red' : styles.borderColor
                            })
                        }}
                    />
                    {props.subjectInvalid && 
                        <p className="text-danger">Please select a subject</p>
                    }
                </FormGroup>
            </Col>
        </React.Fragment>
    )
}

export default CreativeInputs;