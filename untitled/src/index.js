import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App, {MainApp} from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/Store/Store";
import {Provider} from "react-redux";


ReactDOM.render(
    <MainApp/>,
    document.getElementById('root')
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()