import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
    <BrowserRouter>
      <ReactNotification />
      <App />
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
