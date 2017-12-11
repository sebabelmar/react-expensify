import features from './utils/camp_features';
import React from 'react';
import ReactDOM from 'react-dom';


const template = React.createElement('div', {className: 'features'}, "Hello World!")
console.log(features)

ReactDOM.render(template, document.getElementById('app'));
