# Meet-App

## Project description

This project's goal is to build a serverless, progressive web application with React using a test-driven development approach.
The app will use the Google Calender API to fetch upcoming events.

## production handling

For building and deploying run (in main dir)

`npm run deploy`

the build will be deployed to [gh-pages](https://koljapohl.github.io/meet)

for testing a serverless function locally run

`serverless invoke local --function <FUNCTION_NAME>`

deploy a serverless function

`serverless deploy`

for viewing previously deployed service

`serverless info`

run a local http server for a static HTML file for testing purposes (within test folder)

`http-server`

serves all files in the current directory on a local server

to run unit tests (from main folder)

`npm run test`

## Key features

● Filter events by city
● Show/hide event details
● Specify number of events
● Use the app when oﬄine
● Add an app shortcut to the home screen
● View a chart showing the number of upcoming events by city

## User stories

● As a user, I would like to be able to filter events by city so that I can see the list of events that
take place in that city.
● As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event.
● As a user, I would like to be able to specify the number of events I want to view in the app so
that I can see more or fewer events in the events list at once.
● As a user, I would like to be able to use the app when oﬄine so that I can see the events I
viewed the last time I was online.
● As a user, I would like to be able to add the app shortcut to my home screen so that I can
open the app faster.
● As a user, I would like to be able to see a chart showing the upcoming events in each city so
that I know what events are organized in which city.

## Scenarios

Feature 1: Filter events by city

  Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
    Given user hasn't searched for any city
    When user opens the app
    Then user should see a list of all upcoming events

  Scenario 2: User should see a list of suggestions when they search for a city.
    Given main page is open
    When user starts typing in the city textbox
    Then user should see a list of cities that match what they've typed

  Scenario 3: User can select a city from the suggested list.
    Given user was typing into city textbox
    and list of suggestions is showing
    When user selects a city from the list
    Then their city should be changed to that city
    and the list of suggestions should disappear
    and user should receive a list of upcoming events in that city

Feature 2: Show/hide an event's details

  Scenario 1: An event element is collapsed by default
    Given a list of events has been loaded
    When the user uses the app
    Then all event elements should be collapsed not showing their details

  Scenario 2: User can expand an event to see its details
    Given a list of events has been loaded
    When user clicks on "show detail" button
    Then this event element will expand to reveal its details

  Scenario 3: User can collapse an event to hide its details
    Given an expanded event element
    When user clicks on "hide details" button
    Then this event element will collapse hiding its details

Feature 3: Specify number of events

  Scenario 1: When user hasn’t specified a number, 32 is the default number
    Given user selected its city
    When user does not specify the amount of events to be displayed
    Then this number will be set to 32 by default

  Scenario 2: User can change the number of events they want to see
    Given user selected a city
    When user specifies a number of of events
    Then the most upcoming events until that amount will be displayed only

Feature 4: Use the app when offline

  Scenario 1: Show cached data when there’s no internet connection
   Given user has no internet connection
   When user uses the app
   Then user should see the cached data

  Scenario 2: Show error when user changes the settings (city, time range)
    Given user has no internet connection
    When user changes the settings (city, time range)
    Then user should see an error

Feature 5: Data visualization

  Scenario 1: Show a chart with the number of upcoming events in each city
    Given user has set the settings
    When the list of upcoming events is displayed
    Then user should see a data visualization that shows how many events per city are listed

## Dependencies

+ React
+ ReactDOM
+ React-Scripts

### dev-Dependencies

+ gh-pages

## API

This project connects to the Google Calender API
