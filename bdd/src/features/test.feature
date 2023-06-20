Feature: REST API test with parameters
  Scenario: Get user information
    Given the API endpoint "http://localhost:3000/posts/{id}" is available
    When I send a GET request to "http://localhost:3000/posts/1"
    Then the response code should be 200
    And the response should contain "nahid"

