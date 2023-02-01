```
Feature: REST API test with parameters
  Scenario: Get user information
    Given the API endpoint "/api/user/{id}" is available
    When I send a GET request to "/api/user/123"
    Then the response code should be 200
    And the response should contain the following JSON:
      """
      {
        "id": 123,
        "name": "John Doe",
        "email": "johndoe@example.com"
      }
      """
      
 ```

In this example, we're testing an API endpoint that retrieves information about a user, given their ID. We start by assuming that the API endpoint "/api/user/{id}" is available. Then, we send a GET request to the endpoint "/api/user/123" and check that the response code is 200 (indicating success) and that the response body contains the expected JSON.

Note that you will need to write additional code to actually perform the API request and check the response. This example just shows the structure of the test in Cucumber.js format.


---


In this step definition file, we implement each of the steps defined in the feature file. The Given step assumes that the API endpoint is always available. The When step sends a GET request to the URL specified in the step. The Then steps check the response code and response body, respectively. We use the request-promise library to send the API request, and the expect library to check the response.

Note that you'll need to install these libraries (request-promise and expect) and include them in your project before you can use them in your step definition file.


```const { Given, When, Then } = require('cucumber');
const request = require('request-promise');

Given('the API endpoint {string} is available', async function (endpoint) {
  // You can check if the endpoint is available by sending a request to it
  // and checking the response. For this example, we'll assume the endpoint is always available.
});

When('I send a GET request to {string}', async function (url) {
  this.response = await request.get(url);
});

Then('the response code should be {int}', function (statusCode) {
  // You can check the response code using the response object stored in the "this" context.
  // For this example, we'll use the `expect` library to check the status code.
  const response = JSON.parse(this.response);
  expect(response.statusCode).to.equal(statusCode);
});

Then('the response should contain the following JSON:', function (string) {
  // You can check the response body using the response object stored in the "this" context.
  // For this example, we'll use the `expect` library to check the response body.
  const response = JSON.parse(this.response);
  expect(response.body).to.equal(JSON.parse(string));
  
});

```
