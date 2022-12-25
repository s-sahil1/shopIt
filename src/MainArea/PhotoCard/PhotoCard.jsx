import React from "react";
import './PhotoCard.css';
import { useState } from "react";

function PhotoCard(props) {
    const [cart, updateCart] = useState([]);

    function handleClick() {
        props.onAdd(props.id);
        const newId = props.id;
        updateCart((prevId) => {
            return [...prevId, newId];
        });

    }


    return (
        <div className="PhotoCard">
            <div className="Image">
                <img src={props.image} />
            </div>
            <div className="Image-Description">{props.name}</div>
            <div className="Price">$ {props.price}</div>
            <div className="CartDiv"><button onClick={handleClick} className="AddCart">Add to cart</button></div>
        </div>
    );

}

export default PhotoCard;