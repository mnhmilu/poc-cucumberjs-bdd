const { Given, When, Then, AfterAll, After } = require("cucumber");
const assert = require("assert").strict;
const request = require("../util/restHelper");
const { expect } = require("chai");
require('dotenv').config();
var responseBody='';


Given("I am in registration page", async function () {
  // You can check if the endpoint is available by sending a request to it
  // and checking the response. For this example, we'll assume the endpoint is always available.
});

When(
  "I provide below information during registeration and I submit the details",
  async function (datatable) {
    const config = {
      headers: {
        "User-Content-Type": "application/json",
      },
    };

    console.log("************************************");
    console.log(datatable.rowsHash());
    var item = datatable.rowsHash();
    console.log(item.phone);
    console.log(process.env.SERVICE_URL);


    this.response = await request.getData(process.env.SERVICE_URL,config);
    this.responseBody = JSON.stringify(this.response.data); 

    console.log("**************************API response**********************");
    this.responseBody = this.response.data[0]; 

  }
);

Then("the registration should be successful and response should contain below items", function (datatable) {
  console.log("*********************Datatable***************");
  console.log(datatable.rowsHash());

  console.log(this.responseBody);
  var item =datatable.rowsHash();
  expect(item.message).to.equal(this.responseBody.message);
  expect(item.statusCode).to.equal(this.responseBody.statusCode);
});


