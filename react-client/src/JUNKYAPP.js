import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import weddingDeveloperApp from './reducers'
import Register from '../src/containers/Register'

const store = createStore(weddingDeveloperApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider >
    );
  }
}

export default App;