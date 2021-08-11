import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';

import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import CitySearch from '../CitySearch';
import EventList from '../EventList';

import { mount } from 'enzyme';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('user uses the app', async () => {
      AppWrapper = await mount(<App />);
    });

    when('user does not specify the amount of events to be displayed', () => {
    });

    then('this number will be set to 32 by default', () => {
      AppWrapper.update();
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.find('.number-input').props().value).toBe(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('user selected a city', async () => {
      AppWrapper = await mount(<App />);
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin, Germany' } });
    });

    when('user specifies a number of of events', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.find('.number-input').simulate('change', { target: { value: 3 } });
    });

    then('the most upcoming events until that amount will be displayed only', () => {
      AppWrapper.update();
      const EventListWrapper = AppWrapper.find(EventList);
      expect(EventListWrapper.find('.event')).toHaveLength(3);
    });
  });
});