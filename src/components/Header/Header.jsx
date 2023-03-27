import React from 'react';
import "./Header.css";
import logo from "../../images/Logo.svg"

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='list'>
            <a href="/shop">Shop</a>
            <a href="/order">Orders</a>
            <a href="/inventory">Manage Inventory</a>
            <a href="/login">Log In</a>
            </div>
        </nav>
    );
};

export default Header;