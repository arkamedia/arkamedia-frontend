import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Style.css';
//import App from './App';
//import Cart from './Pages/Cart/Cart'
//import Home from './Pages/Home';
import * as serviceWorker from './serviceWorker';
import AdminDash from './Pages/AdminDash/AdminDash';



ReactDOM.render(<AdminDash />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
