@liveStream
Feature: Live Stream Player
  Scenario: Validate Player is visible
    Given I am on the "live" page
    Then I should see the "livestream player"

  Scenario: Validate Switch Player button is visible
    Given I am on the "live" page
    Then I should see the "switch player button"
