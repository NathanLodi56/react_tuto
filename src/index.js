import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Exo4 
ReactDOM.render(  <div><h1>Hello world!</h1><p>This is a paragraph</p></div>, document.getElementById('root'));

//Exo 5 
ReactDOM.render(  <div><ul>Hello world!</ul><li>1</li><li>2</li><li>3</li></div>, document.getElementById('root2'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/* 
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul> 
*/
