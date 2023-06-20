const { Given, When, Then } = require('cucumber');
// const request = require('request-promise');
const request = require('../util/restHelper')
const {expect} =require('chai');
const assert = require('assert');

Given('the API endpoint {string} is available', async function (endpoint) {
  // You can check if the endpoint is available by sending a request to it
  // and checking the response. For this example, we'll assume the endpoint is always available.
});

When('I send a GET request to {string}', async function (url) {

  const config = {
        headers:{
            "User-Content-Type": "application/json"
    
        }
      };

  this.response = await request.getData(url,config);
  this.responseBody = JSON.stringify(this.response.data); 

  // console.log("************Response Data *************");
  // console.log(this.response.data);

  // console.log("************Response Staus *************");
  // console.log(this.response.status);

  // console.log("************Response Body *************");
  // console.log(this.responseBody);

});

Then('the response code should be {int}', function (statusCode) {
  // You can check the response code using the response object stored in the "this" context.
  // For this example, we'll use the `expect` library to check the status code.
 // const response = JSON.parse(this.response);
  expect(this.response.status).to.equal(statusCode);
});


Then('the response should contain {string}', function (expectedString) {
  // Assert that the response body contains the expected string
  //const responseBody = this.response.data;
  assert.ok(this.responseBody.includes(expectedString), `Expected response body to contain "${expectedString}", but it did not.`);
});


