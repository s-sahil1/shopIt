import React, { useEffect } from "react";
import { finalCart } from "../MainArea/MainArea";
import { useState } from "react";
import Items from "../MainArea/Items";
import './Cart.css';
import CartItem from "./CartItem/CartItem";


function Cart() {
    let num = finalCart.length;
    let finNum;
    const [ finalPrice, updateFinalPrice ] = useState(0);

    useEffect(() => {
        let final = 0;       
        finNum = 0; 
        finalCart.map((item) => {
            let price = parseInt(item[0].price * item[0].quantity);
            final = final + price;
            finNum = final;

            updateFinalPrice(final);
        });
        
      });

    const changeQuantity = (number, id)=>{

        console.log(number + ' ' + id);

        finalCart.map((item) => {
            if (item[0].id === id) {
                item[0].quantity = number;
            }
        });

        finalCart.filter((item)=>{
            return(item[0].quantity > 1);
        });

        // console.log(finalCart[0]);

        calcPrice();


    }
    const calcPrice = ()=> {
        let final = 0;       
        finNum = 0; 
        finalCart.map((item) => {
            let price = parseInt(item[0].price * item[0].quantity);
            final = final + price;
            finNum = final;

            updateFinalPrice(final);
        });
        console.log(finNum);
        
    }

    
    return (

        <div className="completeCart">

            <div className="eachItemCart">
                <div className="cart-top">
                    <div>Shopping Cart</div>
                    <div>{num} Items</div>
                </div>
                <hr className="h-row"></hr>

                <div className="product-detail-top">
                    <div className="product-detail-head">PRODUCT DETAILS</div>
                    <div>PRICE</div>
                    <div>QUANTITY</div>
                </div>



                {finalCart.map((item) => {
                    return (
                        <CartItem image={item[0].image} name={item[0].name} price={item[0].price} id={item[0].id} quant={changeQuantity} />
                    );

                })}
            </div>

            <div className="order-summary">
                <div className="order-summary-title">Order Summary</div>
                <hr></hr>
                <div className="item-summary">
                    <div>ITEMS {num}</div>
                    <div>${finalPrice}</div>
                </div>


                <div className="shipping-price">

                    <div >Shipping</div>
                    <div>$4</div>
                </div>
                <hr></hr>

                <div className="total-price-summary">
                    <div>Total Price</div>
                    <div>${finalPrice+4}</div>
                </div>

                <div><button className="checkout-button">CHECKOUT</button></div>

            </div>
        </div>
    );


}

export default Cart;