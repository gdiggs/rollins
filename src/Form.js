import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "WALKING",
      origin: "",
      steps: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    event.preventDefault();
    this.props.emitter.emit("updateDirections", this.state)
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
