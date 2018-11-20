import React, { Component } from 'react';
import { connect } from 'react-redux';

class Events extends React.Component {
  render() {
    const events = this.props.events.map(item => {
      return <h1>{item.eventName}, {item.location}</h1>
    })
    return (
      <React.Fragment>
        <ul>{events}</ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps)(Events);