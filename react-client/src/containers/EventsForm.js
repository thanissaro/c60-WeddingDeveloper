import React, { Component } from 'react'
import { add, getById } from '../actions/events'
import { connect } from 'react-redux'
import { FormGroup, Col, Button, Form, ControlLabel, FormControl } from 'react-bootstrap'
import { withRouter } from 'react-router'

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

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      const event = this.props.getById(Number.parseInt(id));
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col col-sm-6 col-sm-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading style=">
                <h2>Event Form</h2>
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
                </Form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: data => dispatch(add(data)),
  getById: id => dispatch(getById(id))
})

export default connect(null, mapDispatchToProps)(withRouter(EventsForm));