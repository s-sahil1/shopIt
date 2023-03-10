import React, { useState } from "react";
import './MainArea.css';
import PhotoCard from "./PhotoCard/PhotoCard";
import Items from "./Items";
import { BsCart } from 'react-icons/bs';
import CartItem from "../Cart/CartItem/CartItem";
import { Link } from "react-router-dom";
var fCart;

function MainArea(props) {
    let num = 0;
    const { cartClicked, updateCartClicked } = useState('false');
    const [cart, updateCart] = useState([]);

    const addToCart = (id) => {
        const item = Items.filter((item) => {
            return (item.id === id)
        });



        updateCart((prevItem) => {
            return [...prevItem, item];
        });
        props.final(cart);
    }
    fCart = cart;
    // console.log(cart);
    num = cart.length;


    const Collapsible = () => {

    }


    return (
        <div className="Main_Area">

            <Collapsible />
            <Link className="menu-link" to={`/cart`}>
            <div className="addCartMenu">
                <div className="addCartPic" ><BsCart fontSize={'2.3rem'} /><div className="numberItems">{num}</div></div>
            </div>
            </Link>


            <div className="Photo-Cards">

                {Items.map((item) => {
                    return (
                        <span className="each-card tilt"><PhotoCard name={item.name} image={item.image} price={item.price} id={item.id} onAdd={addToCart} /></span>
                    );
                })}

            </div>


        </div>
    );
} 

export default MainArea;
export { fCart };