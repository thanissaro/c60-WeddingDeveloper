import React, { Component } from "react";
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Panel, Button, ButtonToolbar } from 'react-bootstrap';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
        this.onChange = this.onChange.bind(this)
    }

    getFirstNameValidationState() {

    }
    
    getLastNameValidationState() {
    
    }
    
    getEmailValidationState() {
    
    }
    
    getPasswordValidationState() {
    
    }
    
    getPasswordConfirmValidationState() {
    
    }

    onChange(event) {
        console.log(event.target.name)
        console.log(event.target.value)

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit() {
    }

    render() {
        
        return (
            <div className="row">
                <div className="col col-sm-6 col-sm-offset-3">
                    <div className="panel panel-default">
                        <div className="panel-heading style=">
                            <h2>Wedding Developer Registration</h2>
                            <form>
                                <FormGroup
                                    controlId="formatBasicText"
                                    validationState={this.getFirstNameValidationState()}
                                >
                                    <ControlLabel>First Name</ControlLabel>
                                    <FormControl
                                        name="firstName"
                                        type="text"
                                        className="form-control"
                                        value={this.state.firstName}
                                        onChange={this.onChange}
                                    />
                                    <FormControl.Feedback />
                                    <HelpBlock> Enter First Name</HelpBlock>
                                </FormGroup>
                                <FormGroup
                                    controlId="formatBasicText"
                                    validationState={this.getLastNameValidationState()}
                                >
                                    <ControlLabel>Last Name</ControlLabel>
                                    <FormControl
                                        name="lastName"
                                        type="text"
                                        className="form-control"
                                        value={this.state.lastName}
                                        onChange={this.onChange}
                                    />
                                    <FormControl.Feedback />
                                    <HelpBlock> Enter Last Name</HelpBlock>
                                </FormGroup>
                                <FormGroup
                                    controlId="formatBasicText"
                                    validationState={this.getEmailValidationState()}
                                >
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    <FormControl.Feedback />
                                    <HelpBlock> Enter E-mail</HelpBlock>
                                </FormGroup>
                                <FormGroup
                                    controlId="formatBasicText"
                                    validationState={this.getPasswordValidationState()}
                                >
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                    <FormControl.Feedback />
                                    <HelpBlock>Enter Password</HelpBlock>
                                </FormGroup>
                                <FormGroup
                                    controlId="formatBasicText"
                                    validationState={this.getPasswordConfirmValidationState()}
                                >
                                    <ControlLabel>Confirm Password</ControlLabel>
                                    <FormControl
                                        name="passwordConfirm"
                                        type="password"
                                        className="form-control"
                                        value={this.state.passwordConfirm}
                                        onChange={this.onChange}
                                    />
                                    <FormControl.Feedback />
                                    <HelpBlock>Please Confirm Password</HelpBlock>
                                </FormGroup>
                                <Panel.Footer>
                                    <ButtonToolbar>
                                        <Button
                                            className="btn pull-right"
                                            onClick={this.onSubmit}>
                                            SUBMIT
                                        </Button>
                                    </ButtonToolbar>
                                </Panel.Footer>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    events: state.events
})

export default connect(mapStateToProps)(Register);
