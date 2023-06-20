const { Given, When, Then } = require('cucumber');
// const request = require('request-promise');
const request = require('../util/restHelper')
const {expect} =require('chai');

Given('the API endpoint {string} is available', async function (endpoint) {
  // You can check if the endpoint is available by sending a request to it
  // and checking the response. For this example, we'll assume the endpoint is always available.
});

When('I send a GET request to {string}', async function (url) {

    // var _include_headers = function(body, response, resolveWithFullResponse) {
    //     return {'headers': response.headers, 'data': body};
    //   };
      
    //   var options = {
    //     method: 'GET',
    //     uri: url,
    //     json: true,
    //     headers: {
    //         'User-Content-Type': 'application/json'
    //     },
    //     transform: _include_headers,
    //     resolveWithFullResponse: true
    //   }

    const config = {
        headers:{
            "User-Content-Type": "application/json"
    
        }
      };

  this.response = await request.getData(url,config);

  console.log("*************************");
  console.log(this.response.data);
  console.log(this.response.status);
});

Then('the response code should be {int}', function (statusCode) {
  // You can check the response code using the response object stored in the "this" context.
  // For this example, we'll use the `expect` library to check the status code.
 // const response = JSON.parse(this.response);
  expect(this.response.status).to.equal(statusCode);
});

Then('the response should contain the following JSON:', function (string) {
  // You can check the response body using the response object stored in the "this" context.
  // For this example, we'll use the `expect` library to check the response body.
  //const response = JSON.parse(this.response);
  console.log(this.response.data);
  expect(this.response.data).to.equal(JSON.parse(string));
});
