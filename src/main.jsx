import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
// import reportWebVitals from "./reportWebVitals";
import {Provider} from 'react-redux'
import store from './redux/store'
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

// axios.defaults.baseURL = 'http://localhost:3003';
axios.defaults.baseURL = process.env.URL_BASE;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter> 
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
