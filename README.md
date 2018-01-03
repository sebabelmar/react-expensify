## Purpose
[Sample app](https://react-expensify-seba.herokuapp.com/) to transition from Flux into Redux
Currently not styled

### DONE
- Redux infrastructure
- Basic crud functionality - validations
- Tested using jest and enzyme
- Dynamic routing
- Webpack for production
- Deployed to [Heroku](https://react-expensify-seba.herokuapp.com/)

### TODO
- Separate dependencies for dev and prod
- Use Firebase as backend (Authentication)
- Style
- Fix finding SingleDatePicker on test

### Objectives
* Use redux and learn:
  * Store
  * Action generators
  * Reducer
  * Provider
  * connect
  * Spread objects

* Test
  * jest
  * enzyme
  * __mocks__
  * spies

* Deploy
  * Webpack
  * Heroku

* Dependencies
  * redux
  * react redux
  * react router
  * jest
  * enzyme

### Features
* Expenses
  * List
  * Create
  * Delete
  * Edit
  * Filters
    * Text on description
    * Before created At
    * After created At
  * Sorts
    * By date
    * By Amount

## Contracts
`exepenses = expense[]`

```
expense =
  {
    id: <uuid>,
    description: <string>,
    note: <string>,,
    amount: <number>,
    createdAt: <unix>
  }

filters = {
  text: <string>,
  sortBy:   <string>, // amount || date
  startDate: <unix>,
  endDate: <unix>
  }
```
