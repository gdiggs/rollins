import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "",
      steps: ""
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
    console.log('suuupppppp ', this.state);
    event.preventDefault();
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
          <textarea name="steps" value={this.state.waypoints} onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Go" />
      </form>
    )
  }
}

export default Form
