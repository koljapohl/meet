import React from 'react';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { extractLocations } from '../api';

import App from '../App';
import CitySearch from '../CitySearch';

import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
  test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
    given('user hasn\'t searched for any city', () => {
    });

    let AppWrapper;
    when('user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('user should see a list of all upcoming events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });

  test('User should see a list of suggestions when they search for a city.', ({ given, when, then }) => {
    let CitySearchWrapper;
    let locations = extractLocations(mockData);
    given('main page is open', () => {
      CitySearchWrapper = shallow(<CitySearch updateEvents={() => { }} locations={locations} />);
    });

    when('user starts typing in the city textbox', () => {
      CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
    });

    then('user should see a list of cities that match what they\'ve typed', () => {
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
    });
  });

  test('User can select a city from the suggested list.', ({ given, and, when, then }) => {
    let AppWrapper;
    given('user was typing into city textbox', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
    });

    and('list of suggestions is showing', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
    });

    when('user selects a city from the list', () => {
      AppWrapper.find('.suggestions li').at(0).simulate('click');
    });

    then('their city should be changed to that city', () => {
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
    });

    and('user should receive a list of upcoming events in that city', () => {
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });
});