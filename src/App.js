import React, { Component } from 'react';
import './App.css';
import Notifications from './components/Notifications.js';
import Navbar from './components/Navbar.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-intro">
          <Notifications />
        </div>
      </div>
    );
  }
}

export default App;
