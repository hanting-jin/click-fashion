import React from 'react';

import './cart.scss';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
            <span className="item-details">{name}</span>
            <span className="price">{quantity} × ${price}</span>
        </div>
    </div>
)

export default CartItem;