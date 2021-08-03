import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color
    };
  };

  render () {
    return (
      < div className="Alert" >
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

export class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  };

  getStyle = () => {
    return {
      color: this.color,
      'font-size': '0.8rem',
      'font-style': 'italic'
    };
  };
}

export class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  };

  getStyle = () => {
    return {
      color: this.color,
      'font-size': '0.8rem',
      'font-style': 'italic'
    };
  };
}