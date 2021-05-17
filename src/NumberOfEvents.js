import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberEvents: 32,
    errorText: ''
  }

  handleNumberChanged = ( event ) => {
    const value = event.target.value;
    this.setState( {
      numberEvents: value,
      errorText: ''
    } );
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="number-input"
          value={this.state.numberEvents}
          onChange={this.handleNumberChanged}
        />
        <p className="number-error">{this.state.errorText}</p>
      </div>
    );
  };
}

export default NumberOfEvents;