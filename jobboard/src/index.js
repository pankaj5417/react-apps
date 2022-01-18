import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"

import {Provider as ReduxProvider} from "react-redux"
import {store2} from "./store/store2"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ReduxProvider store={store2}>
    <App />
    </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
