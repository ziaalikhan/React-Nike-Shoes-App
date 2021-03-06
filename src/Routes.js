import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './components/Home'
import Product from './components/Product'
import ProductList from './components/ProductList'
import Footer from './components/Footer';

function Routes() {
    return (
        <Router>
            <Home />
          

            <Switch>
                {/* <Route exact path='/' component={Home}/> */}
                <Route exact path='/' component={Product}/>
                <Route path='/productlist/:id' component={ProductList}/>
               
            </Switch>

            
        </Router>
    )
}

export default Routes;
