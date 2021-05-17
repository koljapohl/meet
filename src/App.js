import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import './App.css';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <NumberOfEvents />
        <EventList />
      </div>
    );
  }
}

export default App;
