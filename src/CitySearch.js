import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: ''
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We can not find the city you are looking for. Please try another city.'
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ''
      });
    }
  };
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: ''
    });
    this.props.updateEvents(suggestion);
  };

  render () {
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <div className="search-input inputWrapper">
          <label className="citysearch-label" htmlFor="city">City Search:</label>
          <input
            id="city"
            type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
            onFocus={() => { this.setState({ showSuggestions: true }); }}
          />
        </div>
        <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li
              onClick={() => this.handleItemClicked(suggestion)}
              key={suggestion}
            >{suggestion}
            </li>
          ))}
          <li onClick={() => this.handleItemClicked('all')} key='all'>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
};
export default CitySearch;