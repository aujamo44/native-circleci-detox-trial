Feature: My first test
    This is me trying to use detox 20 and circleci
    @passing
    Scenario: The first test
    Given user sees the homescreen
    When user clicks the hello button
    Then user should see the hello text
    @failing
    Scenario: Test failue example
    Given user sees the homescreen
    When user clicks the non-existing button
    Then user should see the hello text