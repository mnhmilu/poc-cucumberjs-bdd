const { Given, When, Then } = require('cucumber');
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
