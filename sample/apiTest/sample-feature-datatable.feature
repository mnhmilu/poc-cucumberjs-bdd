Feature: Test API Endpoints
  As a developer, I want to test the API endpoints to ensure they are functioning as expected.

Scenario Outline: Test API Endpoints with test data
  Given the API is running
  When I send a <request_type> request to the <endpoint> endpoint with the following data:
    | key   | value |
    | <key1> | <value1> |
    | <key2> | <value2> |
  Then the response code should be <expected_response_code>
  And the response should include the following data:
    | key   | value |
    | <key1> | <value1> |
    | <key2> | <value2> |

Examples:
  | request_type | endpoint             | key1   | value1 | key2   | value2 | expected_response_code |
  | GET          | /api/users          | id     | 123    | name   | John   | 200                    |
  | POST         | /api/users/create   | name   | Jane   | age    | 25     | 201                    |
  | PUT          | /api/users/update   | id     | 123    | name   | Sarah  | 200                    |
  | DELETE       | /api/users/delete   | id     | 123    |        |        | 204                    |


This CucumberJS test uses a test table (Examples) to specify test data, including the request type, endpoint, request data, and expected response.

The scenario outlines steps to perform the test, including sending the request to the endpoint and verifying the response code and response data.

Note: This is just a sample, actual code will vary based on the API and programming language being used.
