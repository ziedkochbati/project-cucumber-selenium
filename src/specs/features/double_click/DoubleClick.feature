@tag
Feature: Double click - Demoqa
  As a user I want to do a double click

  @tag1
  Scenario: Double Click - Demoqa
    Given I entre the url to open the application
    When I click a double click buttons
    Then Message should contains "You have done a double click"
