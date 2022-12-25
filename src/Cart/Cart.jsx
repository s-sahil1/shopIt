import React, { useEffect } from "react";
import { fCart } from "../MainArea/MainArea";
import { useState } from "react";
import Items from "../MainArea/Items";
import './Cart.css';
import CartItem from "./CartItem/CartItem";


function Cart() {
    
    let finNum;
    const [ finalPrice, updateFinalPrice ] = useState(0);
    const [numCart, updateNumCart] = useState(0);
    const [FCart , updateFCart] = useState(fCart);
    let finalCart = fCart;

    useEffect(() => {

        // updateCart(finalCart);
        // console.log(cart);

        let final = 0;       
        let num =0;
        finNum = 0; 
        finalCart.map((item) => {
            let price = parseInt(item[0].price * item[0].quantity);
            final = final + price;
            num = num + parseInt(item[0].quantity);
            finNum = final;

            updateFinalPrice(final);
            updateNumCart(num);

            
        });
        
      });

    const changeQuantity = async(number, id)=>{

        // console.log(number + ' ' + id);

        finalCart.map((item) => {
            if (item[0].id === id) {
                item[0].quantity = number;
            }
        });
        

        finalCart = finalCart.filter((item)=>{
            if(item[0].quantity>0){
                return item;
            }
        });

        await updateFCart((prev)=>{
            return (prev = prev.filter((item)=>{
                if(item[0].quantity>0){
                    return item;
                }
            }));
        });
        await updateFCart((prev)=>{
            return (prev = prev.filter((item)=>{
                if(item[0].quantity>0){
                    return item;
                }
            }));
        });

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
        
    }
    
    return (

        <div className="completeCart">

            <div className="eachItemCart">
                <div className="cart-top">
                    <div>Shopping Cart</div>
                    <div>{numCart} Items</div>
                </div>
                <hr className="h-row"></hr>

                <div className="product-detail-top">
                    <div className="product-detail-head">PRODUCT DETAILS</div>
                    <div>PRICE</div>
                    <div>QUANTITY</div>
                </div>



                {FCart.map((item) => {
                    return (
                        <CartItem image={item[0].image} name={item[0].name} price={item[0].price} id={item[0].id} quant={changeQuantity} quantity={item[0].quantity} />
                    );

                })}
            </div>

            <div className="order-summary">
                <div className="order-summary-title">Order Summary</div>
                <hr></hr>
                <div className="item-summary">
                    <div>ITEMS {numCart}</div>
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