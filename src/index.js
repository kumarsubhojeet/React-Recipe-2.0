import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./Css/Home.css"
import "./Css/Recipe.css"
import "./Css/Main.css"
import "./Css/Navbar.css"
import "./Css/Contact.css"
import './Css/Footer.css'

import 'antd/dist/antd.css'; 

import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


