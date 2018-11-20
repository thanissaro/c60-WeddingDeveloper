import React, { Component } from 'react'
import { add } from '../actions/events'
import { connect } from 'react-redux'
import { FormGroup, Col, Button, Form, ControlLabel, FormControl } from 'react-bootstrap'

class EventsForm extends React.Component {
  
    state = {
      eventName: '',
      location: ''
    };
  
  onChange = e => {
    this.setState({ 
        [e.target.name]: e.target.value 
    })
  }

  onSubmit = e => {
      this.props.add({
          eventName: this.state.eventName,
          location: this.state.location
      })
  }

  render() {
    return (
      <React.Fragment>
           <Form horizontal>
  <FormGroup controlId="formHorizontalEvent">
    <Col componentClass={ControlLabel} sm={2}>
      Event Name
    </Col>
    <Col sm={10}>
      <FormControl name="eventName" onChange={this.onChange} placeholder="Event Name" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalLocation">
    <Col componentClass={ControlLabel} sm={2}>
      Location
    </Col>
    <Col sm={10}>
      <FormControl name="location" onChange={this.onChange} placeholder="Location" />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="button" onClick={this.onSubmit}>Submit</Button>
    </Col>
  </FormGroup>
</Form>;
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: data => dispatch(add(data))
})

export default connect(null, mapDispatchToProps)(EventsForm);