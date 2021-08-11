import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import './App.css';
import { extractLocations, getEvents } from './api';
import { InfoAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    amountEvents: 32,
    selectedLocation: 'all',
    offlineHint: 'You are offline! The given list of events may not be up to date since it was loaded from the cache.'
  };

  componentDidMount () {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events,
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount () {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    let locationEvents;
    getEvents().then((events) => {
      const count = eventCount || this.state.amountEvents;
      const selectedLocation = location || this.state.selectedLocation;

      if (selectedLocation === 'all') {
        locationEvents = events.slice(0, count);
      } else {
        locationEvents = events.filter((event) => event.location === selectedLocation)
          .slice(0, count);
      }
      this.setState({
        events: locationEvents,
        amountEvents: count,
        selectedLocation
      });
    });
  };

  render () {
    return (
      <div className="App">
        {!navigator.onLine ?
          <InfoAlert text={this.state.offlineHint} />
          : <div></div>
        }
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents amountEvents={this.state.amountEvents} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
