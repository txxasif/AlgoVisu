import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Notifications from 'react-notify-toast';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
<BrowserRouter>
<App />
<Notifications />
</BrowserRouter>
, document.getElementById('root'));
