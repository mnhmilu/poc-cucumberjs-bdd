# BDD-POC


### Prepare Environment

[Install NPM/NVM](https://www.hostinger.com/tutorials/how-to-install-node-ubuntu?ppc_campaign=google_search_generic_hosting_all&bidkw=defaultkeyword&lo=1001441&gclid=CjwKCAjw-b-kBhB-EiwA4fvKrLcst2fexmoKwgv-uy7LWOWqfMYy25Qwzziq-AYyjxjkRb4YPSaD7BoC9BEQAvD_BwE)

- How to Install a Specific Version of Node.js Using NVM

  `nvm use 18.0.0`

` npm i cucumber-html-reporter `

` cd bdd `

### run fake server to mock API behaviour

Install 

` npm install -g json-server`

Run fake server 

` json-server --watch db.json `

### run test cases

`cd bdd`


run the all features's test cases

```
./node_modules/.bin/cucumber-js ./src/features/ --require ./src/steps -f json:cucumber.json

```

run specific feature test cases ( example registration Process)

```
./node_modules/.bin/cucumber-js ./src/features/registration.feature --require ./src/steps/registrationSteps.js -f json:cucumber.json

```

### run test cases with HTML Reports

[Cucumber HTML Report Documentation ](https://www.npmjs.com/package/cucumber-html-reporter)

`npm install cucumber-html-reporter --save-dev`

add index.js file (see documentation)

run with reports

```

./node_modules/.bin/cucumber-js ./src/features/registration.feature --require ./src/steps/registrationSteps.js -f json:cucumber.json -f json:test/report/cucumber_report.json

```

`
node src/index.js
`

![image](https://github.com/mnhmilu/poc-cucumberjs-bdd/assets/7475000/96bba618-7546-4ae2-8f5f-72622825b335)


### Reference

[Fake Server](https://www.npmjs.com/package/json-server)

[Cumcumber js documentation ](https://cucumber.io/docs/installation/javascript/)

[Continous Build](https://cucumber.io/docs/guides/continuous-integration/)

