import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./Component/Product";
import Details from "./Component/Details";
import Cart from "./Component/Cart";
import Default from "./Component/Default";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList";

export default class App extends Component{
    render() {
        return(
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={ProductList}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/cart" component={Cart}/>
                    <Route component={Default}/>
                </Switch>
            </React.Fragment>
        )
    }
}
