# Cypress UI tests with cucumber and PageObject pattern

In this project I have created an automation framework using Cypress, Cucumber while incorporating PageObject pattern.

### Installing

To install all dependencies required to run the tests once the project has been cloned locally
```
npm install
```

## Running the tests

Start cypress test runner
```
npx open cypress
```

## Feature files
The features under test are separated into individual feature file under ```/integration```. 

## Step Definitions 
The step definitions for each individual feature files are in the folder with the same name as the feature.

Commonly used steps can be defined under ```integration/common``` folder. 

## Page Object Model Pattern
For simplicity, instead creating a class/object for each page. A module is created and public functions are exported. These public functions can be imported and used in the step definitions. 

## Exercise Results
![named_brands_test](https://user-images.githubusercontent.com/11692981/79922454-0d31af00-8488-11ea-8b9f-561e090f11bd.png)
![kia_test](https://user-images.githubusercontent.com/11692981/79922431-099e2800-8488-11ea-87f1-dd44038d5223.png)
![hispano_test](https://user-images.githubusercontent.com/11692981/79922465-0efb7280-8488-11ea-8c74-a326a1f196c6.png)
## Built With

* [Cypress](https://github.com/cypress-io/cypress) - The E2E testing framework used
* [Cypress Cucumber Preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#readme) - gherkin-syntaxed specs with Cypress.io
