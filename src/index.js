import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './screens/Home.js';
import Login from './screens/Login.js';
import Register from './screens/Register.js';
import Notfound from './screens/Notfound.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";


const routing=(
<BrowserRouter>
         <Switch>
           <Route exact path="/"component={Home}/>
           <Route exact path="/login"component={Login} />
           <Route exact path="/register"component={Register} />
           <Route component={Notfound} />
         </Switch>

</BrowserRouter>
)

ReactDOM.render(routing,document.getElementById('root'));
reportWebVitals();