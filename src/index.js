import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import AppLayout from "./AppLayout";
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <BrowserRouter>  
        <AppLayout />
    </BrowserRouter>,
        document.getElementById("root")
    );
    registerServiceWorker();
