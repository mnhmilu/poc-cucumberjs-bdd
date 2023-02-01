

In this example, we're testing an API endpoint that retrieves information about a user, given their ID. We start by assuming that the API endpoint "/api/user/{id}" is available. Then, we send a GET request to the endpoint "/api/user/123" and check that the response code is 200 (indicating success) and that the response body contains the expected JSON.

Note that you will need to write additional code to actually perform the API request and check the response. This example just shows the structure of the test in Cucumber.js format.





In this step definition file, we implement each of the steps defined in the feature file. The Given step assumes that the API endpoint is always available. The When step sends a GET request to the URL specified in the step. The Then steps check the response code and response body, respectively. We use the request-promise library to send the API request, and the expect library to check the response.

Note that you'll need to install these libraries (request-promise and expect) and include them in your project before you can use them in your step definition file.
