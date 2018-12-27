import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import weddingDeveloper from './reducers/index'
import Events from './containers/Events';
import EventsForm from './containers/EventsForm';
import Register from './containers/Register';

const store = createStore(weddingDeveloper);

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
const Event = () => <h2>Event</h2>;
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
                <li>
                  <Link to="/events/">Events</Link>
                </li>
                <li>
                  <Link to="/events-form/">Events Form</Link>
                </li>
                <li>
                  <Link to="/register/">Register</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
            <Route path="/events" component={Events} />
            <Route path="/events-form/:id?" component={EventsForm} />
            <Route path="/register" component={Register} />
          </div>
        </Router>
      </Provider>
    );
  }
}



export default App;
