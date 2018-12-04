import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class Events extends React.Component {

  onItemClick(id, e) {
    this.setState({ selectedItem: id });
    console.log(id)
    this.onClick(id)
  }

  editButton(item) {
    return <span>
      <Button
        name="edit" key={item.id}
        className="button"
        onClick={e => this.onItemClick(item.id, e)}>
        EDIT
      </Button>
    </span>;
  }

  deleteButton(item) {
    return <span>
      <Button
        name="delete"
        key={item.id}
        className="button"
        onClick={(e) => this.deleteEvent(item.id)}>
        DELETE
      </Button>
    </span>;
  }

  render() {
    const events = this.props.events.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.eventName}</td>
          <td>{item.location}</td>
          <td>{this.editButton(item)}</td>
          <td>{this.deleteButton(item)}</td>
        </tr>
      );
    })
    return (
      <React.Fragment>
        <div className="row">
          <div className="col col-sm-6 col-sm-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading style=">
                <h2>Event List</h2>
                <div class="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Id#</th>
                        <th>Event Name</th>
                        <th>Location</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps)(Events);

