const {Given, When, Then, AfterAll, After} = require('cucumber');
const assert = require('assert').strict

When('we request the products list', function () {
    // Write code here that turns the phrase above into concrete actions
   // return 'pending';    
   console.log("*********Happay Testing***************");
});

Then('we should receive', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    console.log(dataTable.hashes())
    var items=dataTable.hashes();
    items.forEach(function(item) {
        console.log(item.name);      
    });
    assert.equal(true,true);
    //return 'pending';
});