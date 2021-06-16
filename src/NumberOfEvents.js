import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    errorText: ''
  };

  handleNumberChanged = (event) => {
    const value = event.target.value;
    this.setState({
      errorText: ''
    });
    this.props.updateEvents(null, value);
  };

  render () {
    return (
      <div className="NumberOfEvents">
        <div className="inputWrapper">
          <label htmlFor="number" className="number-label">Number of Events:</label>
          <input
            id="number"
            type="number"
            className="number-input"
            value={this.props.amountEvents}
            onChange={this.handleNumberChanged}
          />
          <p className="number-error">{this.state.errorText}</p>
        </div>
      </div>
    );
  };
}

export default NumberOfEvents;