import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    errorText: ''
  };

  handleNumberChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        errorText: 'The number you provided is invalid. Please select a number from 1 to 32'
      });
    } else {
      this.setState({
        errorText: ''
      });
    }
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
            lazy="true"
          />
          <ErrorAlert className="number-error" text={this.state.errorText} />
        </div>
      </div>
    );
  };
}

export default NumberOfEvents;