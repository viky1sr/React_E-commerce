import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Logo from "../logo.svg";
import {ButtonContainer} from "./Styled";
import {NavWR} from "./Styled";

export default class Navbar extends Component {
    render() {
        return (
                <NavWR className="navbar navbar-expand-sm navbar-dark px-sm-5">
               <Link to="/">
                   <img src={Logo} alt="store" className="navbar-brand" />
               </Link>
               <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                       <Link to="/" className="nav-link" >
                           Products
                       </Link>
                   </li>
               </ul>
               <Link to="/cart" className="ml-auto" >
                   <ButtonContainer>
                       <span className="mr-2">
                       <i className="fas fa-cart-plus" />
                       </span>
                       My Cart
                   </ButtonContainer>
               </Link>
               </NavWR>
        );
    }
}