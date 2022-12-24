import React from "react";
import { TiThMenu } from 'react-icons/ti';
import { GoHome } from 'react-icons/go';
import { FiShoppingCart } from 'react-icons/fi';
import { VscAccount } from 'react-icons/vsc';
import { FiLogOut } from 'react-icons/fi';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (

        <div className="HeaderTop">
            <div className="App_Name  menu">
                <div><TiThMenu fontSize={'2rem'} /></div>
                <div>SHOP-IT</div>
            </div>

            <div className="Menu-Items  menu">

                <Link className="menu-link" to={`/`}>
                    <div className="Home-Menu  menu">
                        <div><GoHome fontSize={'2rem'} /></div>
                        <div>HOME</div>
                    </div>

                </Link>
                <Link className="menu-link" to={`/cart`}>
                    <div className="Cart  menu">
                        <div><FiShoppingCart fontSize={'2rem'} /></div>
                        <div>Cart</div>

                    </div>
                </Link>
            </div>

            <div className="Account_Settings  menu">
                <div className="Account  menu">
                    <div><VscAccount fontSize={'2rem'} /></div>
                    <div>Account</div>
                </div>
                <div className="Logout  menu">
                    <div><FiLogOut fontSize={'2rem'} /></div>
                    <div>LogOut</div>

                </div>
            </div>
        </div>
    );


}

export default Header;