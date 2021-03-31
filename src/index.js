import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './screens/Home.js';
import Login from './screens/Login.js';
import Register from './screens/Register.js';
import Notfound from './screens/Notfound.js';
import ProductInfo from './screens/ProductInfo.js';
import Mycart from './screens/Mycart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
//import 'https://kit.fontawesome.com/166055d4a6.js';
//<script src="" crossorigin="anonymous"></script>



const routing=(
<BrowserRouter>
         <Switch>
           <Route exact path="/"component={Home}/>
           <Route exact path="/login"component={Login} />
           <Route exact path="/register"component={Register} />
           <Route exact path="/productInfo"component={ProductInfo} />
           <Route exact path="/mycart"component={Mycart} />
           <Route component={Notfound} />
         </Switch>

</BrowserRouter>
)

ReactDOM.render(routing,document.getElementById('root'));
reportWebVitals();
