@mostRead
Feature: Most Read section on Aljazeera homepage

  Scenario: Desktop - Most Read section is visible
    Given I am on the "home" page
    Then I should see the "Most Read" section

  Scenario: Desktop - Most Read section has 10 posts
    Given I am on the "home" page
    Then I verify the "Most Read" section contains 10 items

  Scenario: Desktop - Bypass Blocks works for Most Read
    Given I am on the "home" page
    When I activate Bypass Block for "Most Read"
    Then I verify the URL has the proper ending