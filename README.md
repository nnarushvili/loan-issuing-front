# LoanApplicationFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
# twino-test-task

## Overview

### Part1

Create RESTful web-service for issuing loans.

Workflow is as follows: System operator adds a loan application, system scores the application, decides if loan should be issued and returns the result to the operator.

LoanApplication when created consists of

* Personal ID
* First Name
* Last Name
* Birth Date
* Employer (as a String)
* Salary (as decimal amount)
* Monthly Liability - sum of all liability payments per month (as decimal amount)
* Requested Amount (as decimal amount)
* Requested Term (days or months)

There should be ability to **List**, **Create** and **Delete** applications, to **Mark** applications as *Approved*, *Manual* or *Rejected* and to assign credit score to the application.

When applications are listed there should be a possibility to specify sorting field and order (ASC/DESC).

### Scoring

Each application can be assigned a score which is calculated as follows:

`Score = (Sum of first name letter positions in the alphabet (a = 1, z = 26)) + Salary * 1.5 - MonthlyLiability * 3 + (year of birth) - (month of birth) - (Julian day of the year of birth (1st Feb = 32, etc.))`

When scoring is applied, if score is < 2500, application should be rejected, if it is > 3500, application should be approved, otherwise marked as manual.

### Part 2
Create front-end for the API described in Part 1

### Part 3
**Security stuff**
1. registration of operators
2. ability for clients to register and independently ask for a loan without contacting operator.
In this case loan application should still be visible for operators for them to be able to approve or reject it in case of *Manual* scoring result.

## Technologies

Language: Java or Kotlin (only use Kotlin if you have experience and are comfortable with it)

RDBMS: any embedded SQL database via JPA

Project Management: Gradle or Maven

Tests: JUnit Jupiter (JUnit 5) or Spock

Framework: Spring Boot

Front-end: HTML5 + JavaScript, Angular or AngularJS is preferred, please also use some CSS framework.

## Other Requirements

Solution should be submitted as a link to a bitbucket or github repository which has this file as a README.

Solution should be self contained and should not need anything aside from JDK and git to run on either Linux or Windows.

The solution should be submitted before the deadline and it is okay to send it incomplete, just make it runnable and implement as many requirements as you can within the allocated time.
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
