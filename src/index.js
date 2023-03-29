import React from 'react';
import ReactDOM from 'react-dom';

React.createElement('h1', {}, 'Hello World!');

ReactDOM.render(
    React.createElement('h1', {}, 'Hello World!'),
    document.getElementById('root')
)