import React, { Component } from 'react';
import ErrorBanner from "./ErrorBanner.js";
import Form from './Form.js';
import Map from './Map.js';
import { EventEmitter } from 'fbemitter';

class App extends Component {
  constructor(props) {
    super(props);

    this.emitter = new EventEmitter();
  }

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
            <Form emitter={this.emitter}/>
          </div>
        </div>
        <ErrorBanner emitter={this.emitter}/>
        <Map emitter={this.emitter}/>
      </div>
    );
  }
}

export default App;
