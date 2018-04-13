import React, { Component } from 'react';

class ErrorBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    };

    this.hideError = this.hideError.bind(this);
    this.showError = this.showError.bind(this);
    props.emitter.addListener('hideError', this.hideError);
    props.emitter.addListener('showError', this.showError);
  }

  hideError() {
    this.setState({
      message: null
    });
  }

  showError(message) {
    this.setState({
      message: message
    });
  }

  render() {
    return (
      <div className={"alert alert-danger " + (this.state.message ? "" : "d-none")}>
        {this.state.message}
      </div>
    );
  }
}

export default ErrorBanner;
