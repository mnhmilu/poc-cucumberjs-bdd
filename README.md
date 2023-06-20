# BDD-POC


### Prepare Environment

[Install NPM/NVM](https://www.hostinger.com/tutorials/how-to-install-node-ubuntu?ppc_campaign=google_search_generic_hosting_all&bidkw=defaultkeyword&lo=1001441&gclid=CjwKCAjw-b-kBhB-EiwA4fvKrLcst2fexmoKwgv-uy7LWOWqfMYy25Qwzziq-AYyjxjkRb4YPSaD7BoC9BEQAvD_BwE)

- How to Install a Specific Version of Node.js Using NVM


` npm i cucumber-html-reporter `

` npm install -g json-server`

` cd bdd `

run fake server 

> json-server --watch db.json

run the all features's test cases

```
./node_modules/.bin/cucumber-js ./src/features/products-list.feature --require ./src/steps -f json:cucumber.json

```

run specific feature test cases

```
 ./node_modules/.bin/cucumber-js ./src/features/test.feature --require ./src/steps/testSteps.js -f json:cucumber.json

```


### Configure Fake server for mock API 

[Fake Server](https://www.npmjs.com/package/json-server)


### Sample

- Sample 
- Sample API Test with Datatable 

### Reference

[Cumcumber js documentation ](https://cucumber.io/docs/installation/javascript/)
