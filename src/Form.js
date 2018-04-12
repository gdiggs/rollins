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
        <label>
          Start/Finish:
          <input type="text" name="origin" value={this.state.origin} onChange={this.handleInputChange} />
        </label>
        <label>
          Steps (one per line):
          <textarea name="steps" value={this.state.steps} onChange={this.handleInputChange} />
        </label>
        <label>
          Method:
          <select name="mode" value={this.state.mode} onChange={this.handleInputChange}>
            <option value="WALKING">Walking</option>
            <option value="DRIVING">Driving</option>
          </select>
        </label>
        <input type="submit" value="Go" />
      </form>
    )
  }
}

export default Form
