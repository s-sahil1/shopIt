import React, { useEffect } from "react";
import './CartItem.css';
import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

function CartItem(props) {

    let [count, setCount] = useState(1);
    let quantity = props.quantity;
    const price = parseInt(props.price);
    const id = parseInt(props.id);
    let [cost, setCost] = useState();

    useEffect(()=>{
        const update = async()=>{
            await setCount(quantity);
            await setCost(quantity*price);
        }

        update();

    },[quantity,price])


    function incrementCount() {
        if (count >= 10) {
            setCount(10);
        }
        else {


            count = count + 1;
            setCount(count);
            setCost(count * price);
        }

        props.quant(count,id);

    }
    function decrementCount() {

        if (count <= 0) {
            setCount(0);
            setCost(0);
        }
        else {

        count = count - 1;
        setCount(count);
        setCost(count * price);
        }




        // setCost((count - 1) * price);

        if (count === 0) {
            setCost(0);
        }

        props.quant(count,id);
    }
    return (

        <div className="cart-items">

            <div className="cart-item-photo">
                <img src={props.image} />
            </div>

            <div className="cart-item-name">{props.name}</div>

            {/* {console.log(props.name +'n'+ cost+' final '+ count)} */}

            <div className="cart-item-price">$ {cost}</div>

            <div className="quantity">

                <AiOutlinePlusCircle fontSize={'1.5rem'} onClick={incrementCount} />
                <div>{count}</div>
                <AiOutlineMinusCircle fontSize={'1.5rem'} onClick={decrementCount} />
            </div>

        </div>
    );
}

export default CartItem;