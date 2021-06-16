Feature: Show/hide an event's details

  Scenario: An event element is collapsed by default
    Given a list of events has been loaded
    When the user uses the app
    Then all event elements should be collapsed not showing their details

  Scenario: User can expand an event to see its details
    Given a list of events has been loaded
    When user clicks on "show detail" button
    Then this event element will expand to reveal its details

  Scenario: User can collapse an event to hide its details
    Given an expanded event element
    When user clicks on "hide details" button
    Then this event element will collapse hiding its details