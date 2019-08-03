import React from 'react';

import './checkout-item.scss';

const CheckoutItem = ({cardItem:{imageUrl, name, quantity, price}}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={imageUrl}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button">&#x2df;</div>
    </div>
)

export default CheckoutItem;