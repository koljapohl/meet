import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow, mount } from 'enzyme';

import App from '../App';
import EventList from '../EventList';

import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let EventListWrapper;
    given('a list of events has been loaded', () => {
      EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find('.EventList')).toHaveLength(1);
    });

    let AppWrapper;
    when('the user uses the app', () => {
      AppWrapper = mount(<App />);
    });

    then('all event elements should be collapsed not showing their details', () => {
      expect(EventListWrapper.find('.event-details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let EventListWrapper;
    given('a list of events has been loaded', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      expect(EventListWrapper.find('.EventList')).toHaveLength(1);
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      EventListWrapper.find('.show-details-btn').at(0).simulate('click');
    });

    then('this event element will expand to reveal its details', () => {
      expect(EventListWrapper.find('.event-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let EventListWrapper;
    given('an expanded event element', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      EventListWrapper.find('.show-details-btn').at(0).simulate('click');
      expect(EventListWrapper.find('.event-details')).toHaveLength(1);
    });

    when('user clicks on "hide details" button', () => {
      EventListWrapper.find('.hide-details-btn').simulate('click');
    });

    then('this event element will collapse hiding its details', () => {
      expect(EventListWrapper.find('.event-details')).toHaveLength(0);
    });
  });
});
