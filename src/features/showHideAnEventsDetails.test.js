import { loadFeature, defineFeature } from 'jest-cucumber';

import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('a list of events has been loaded', () => {

    });

    when('the user uses the app', () => {

    });

    then('all event elements should be collapsed not showing their details', () => {

    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('a list of events has been loaded', () => {

    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {

    });

    then('this event element will expand to reveal its details', () => {

    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {

    given('an expanded event element', () => {

    });

    when('user clicks on "hide details" button', () => {

    });

    then('this event element will collapse hiding its details', () => {

    });
  });
});
