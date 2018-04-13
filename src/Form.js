import React, { Component } from 'react';
import base64url from 'base64-url';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "WALKING",
      origin: "",
      steps: "",
    };

    this.generateFormId = this.generateFormId.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.formId) {
      this.setState(this.formDataFromId());
      setTimeout(this.handleSubmit, 1000);
    }
  }

  handleInputChange(event) {
    const target = event.target
        , value = target.value
        , name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    if (event) { event.preventDefault(); }
    this.props.history.push(`/${this.generateFormId()}`);
    this.props.emitter.emit("hideError");
    this.props.emitter.emit("updateDirections", this.state);
  }

  formDataFromId() {
    return JSON.parse(base64url.decode(this.props.formId));
  }

  generateFormId() {
    const stateJSON = JSON.stringify(this.state);
    return base64url.encode(stateJSON);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-inline">
          <input className="form-control mb-2 mr-sm-2" placeholder="Start/Finish" type="text" name="origin" value={this.state.origin} onChange={this.handleInputChange} />
          <textarea className="form-control mb-2 mr-sm-2" placeholder="Steps (one per line)" rows="1" name="steps" value={this.state.steps} onChange={this.handleInputChange} />
          <select className="form-control mb-2 mr-sm-2" name="mode" value={this.state.mode} onChange={this.handleInputChange}>
            <option value="WALKING">Walking</option>
            <option value="DRIVING">Driving</option>
          </select>
          <button type="submit" className="btn btn-primary mb-2">Go</button>
        </div>
      </form>
    )
  }
}

export default Form
