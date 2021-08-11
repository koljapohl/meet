import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false
  };

  handleClick = () => {
    this.setState( previousState => ( {
      showDetails: !previousState.showDetails
    } ) );
  }

  render() {
    const { event } = this.props;
    const { showDetails } = this.state;

    const eventISODateTime = new Date( event.start.dateTime );
    const eventDate = eventISODateTime.toDateString();
    const eventTime = eventISODateTime.toTimeString();
    const eventTimeFormatted = `${eventTime.slice( 0, 5 )} ${eventTime.slice( 18 )}`;

    return (
      <div className="event">
        <div className="event-summary">
          <h2 className="event-title">{event.summary}</h2>
          <div className="event-location">{event.location}</div>
          <div className="event-time-date">
            <p className="event-date">{eventDate}</p>
            <p className="event-time">{eventTimeFormatted}</p>
          </div>
        </div>

        {showDetails ?
          <div>
            <div className="event-details">
              <a className="event-link" href={event.htmlLink} rel="noopener noreferrer" target="_blank">See details on Google Calendar</a>
              <div className="event-description">{event.description}</div>
            </div>
            <div className="btn-wrapper">
              <button
                className="hide-details-btn details-btn"
                onClick={this.handleClick}>
                Hide details
            </button>
            </div>
          </div>
          :
          <div className="btn-wrapper">
            <button
              className="show-details-btn details-btn"
              onClick={this.handleClick}>
              show details
          </button>
          </div>
        }
      </div>
    );
  };
}
export default Event;