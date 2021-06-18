Feature: Specify number of events

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given user uses the app
    When user does not specify the amount of events to be displayed
    Then this number will be set to 32 by default

  Scenario: User can change the number of events they want to see
    Given user selected a city
    When user specifies a number of of events
    Then the most upcoming events until that amount will be displayed only