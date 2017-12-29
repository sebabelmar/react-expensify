## Purpose
Sample app to transition from Flux into Redux

* Use redux and learn:
  * Store
  * Action generators
  * Reducer
  * Provider
  * connect
  * Spread objects

### Dependencies
* redux
* react redux
* react router

### Objectives
Create an app that tracks expenses following course that can:
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
