import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bus from "./components/bus"
import $axios from "./http"
import $api from './http/api'
React.Component.prototype.$axios=$axios
React.Component.prototype.$api=$api
// import * as serviceWorker from './serviceWorker';
React.Component.prototype.$bus=bus
ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
