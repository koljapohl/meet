import React, { Component } from 'react';

class Event extends Component {
  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <div className="event-summary">
          <h2 className="event-header">
            {event.summary}
          </h2>
          <div className="event-date">
            {event.start.dateTime}
          </div>
          <div claassName="event-title">@{event.summary}</div>
          <div className="event-location"> | {event.location}</div>
        </div>
      </div>
    )
  }
}
export default Event;