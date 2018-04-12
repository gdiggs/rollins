import React, { Component } from 'react';
import Form from './Form.js';
import Map from './Map.js';

var {EventEmitter} = require('fbemitter');
var emitter = new EventEmitter();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Rollins</h1>
          <h2>Go on tour.</h2>
        </header>
        <Form emitter={emitter}/>
        <Map emitter={emitter}/>
      </div>
    );
  }
}

export default App;
