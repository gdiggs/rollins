import React, { Component } from 'react';
import ErrorBanner from "./ErrorBanner.js";
import Form from './Form.js';
import Map from './Map.js';

var {EventEmitter} = require('fbemitter');
var emitter = new EventEmitter();

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="page-header">
          <h1>
            Rollins: <small className="text-muted">Go on tour.</small>
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Form emitter={emitter}/>
          </div>
        </div>
        <ErrorBanner emitter={emitter}/>
        <Map emitter={emitter}/>
      </div>
    );
  }
}

export default App;
