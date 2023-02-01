# BDD-POC


### Prepare Environment



npm i cucumber-html-reporter

npm install -g json-server


### Fake server

[Fake Server](https://www.npmjs.com/package/json-server)


### run the test cases

```
./node_modules/.bin/cucumber-js ./src/features/products-list.feature --require ./src/steps -f json:cucumber.json

```

