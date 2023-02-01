







In this step definition file, we implement each of the steps defined in the feature file. The Given step assumes that the API endpoint is always available. The When step sends a GET request to the URL specified in the step. The Then steps check the response code and response body, respectively. We use the request-promise library to send the API request, and the expect library to check the response.

Note that you'll need to install these libraries (request-promise and expect) and include them in your project before you can use them in your step definition file.
