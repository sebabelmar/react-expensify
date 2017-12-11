## Instructions

Using JavaScript (React preferred), CSS (Sass preferred) and the initial
template file campground.html, please reveal the top level camp features
as a `<ul>` list, based on the sample JSON structure defined in camp_features.js
(let’s assume this JSON structure is what an API could return).

Indicate whether or not each feature is present at the campground.
Clicking on a feature should reveal its sub-features, if they're present or
not, and so on.

The presence or absence of each feature may be indicated with an icon, a
different color, or both. Feel free to make it look great!

Each `<li>` element should be a bubble that's clickable in case there are
sub-features to reveal. Sub-features should be displayed in a nested `<ul>` list.

Adding or removing features from camp_features.js should automatically update the
DOM when the page is reloaded.

Clear, concise, "production-ready" code will be appreciated.


## Notes:
In order to use JSX to write React code and to better integrate SASS I decided to use NPM, Babel and Webpack.   

This example could have been written without the use of those tools but it could have require me to use the SASS CLI and to write React code in a way that can be considerer not "production-ready".  

* Using campground.html as index.html
* Using Webpack + Babel:
  * JSX as React production code in order to do not have to write DOM elemnts like this:
    ```javascript
      React.createElement('div', null,
        React.createElement('h1', null, 'Camp Features'),
        React.createElement('DynamicList', { features : [{},{}]] }),
      )
    ```
  * SASS code converted to CSS

## TODO:
- get Webpack Dev Server to render campground.html as index.html
- make src/app.js the entry file for webpack to create bundle
  - require React
  - require ReactDOM
  - render simple component
- get Webpack to create bundle to be use by index.html
- make React and ReactDOM available to
- render first component using ES6 +

- Add redux
- Add test suite
