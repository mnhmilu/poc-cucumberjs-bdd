```

const { expect } = require("chai");
const request = require("request-promise-native");

Given("the API is running", async function() {
  // check if the API is running
});

When("I send a {string} request to the {string} endpoint with the following data:", async function(requestType, endpoint, dataTable) {
  const options = {
    method: requestType,
    uri: `https://api.example.com${endpoint}`,
    json: true
  };

  // add request data from data table
  const requestData = dataTable.rowsHash();
  if (requestType === "GET") {
    options.qs = requestData;
  } else {
    options.body = requestData;
  }

  // send the request
  this.response = await request(options);
});

Then("the response code should be {int}", function(expectedStatusCode) {
  expect(this.response.statusCode).to.equal(expectedStatusCode);
});

Then("the response should include the following data:", function(dataTable) {
  // check the response data
  const expectedData = dataTable.rowsHash();
  for (const key in expectedData) {
    if (expectedData.hasOwnProperty(key)) {
      expect(this.response.body[key]).to.equal(expectedData[key]);
    }
  }
});

```

These step definitions implement the steps outlined in the scenario, using the request library to 
send API requests and the Chai library to perform assertions. The step definitions use the data from the test table to determine the request type,
endpoint, and request data, as well as the expected response code and data.
