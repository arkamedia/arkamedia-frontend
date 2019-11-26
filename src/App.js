import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from '../src/Pages/Home';
import AdminDash from '../src/Pages/AdminDash/AdminDash';
import Cart from '../src/Pages/Cart/Cart';
import Detail from '../src/Pages/Detail/Detail';
import RegistForm from '../src/Components/RegistForm/RegistForm';
import ListContent from '../src/Components/ListContent/ListContent'
import {Biodata} from './Components/Profile/Biodata'

const App = () => {
  return (
    <>
    <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/admindash' component={AdminDash}/>
      <Route exact path='/cart' component={Cart}/>
      <Route path='/detail/:product' component={Detail}/>
      <Route path='/register' component={RegistForm}/>
      <Route path='/list-content' component={ListContent}/>
      <Route path='/profile' component={Biodata}/>

    </Router>
    </>
  );
};

export default App;
