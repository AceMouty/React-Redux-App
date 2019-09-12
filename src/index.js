import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Setting up Redux and React Imports
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
// Middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Setting up the store and also composeEnhancers is for redux tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, 
	document.getElementById('root'));
