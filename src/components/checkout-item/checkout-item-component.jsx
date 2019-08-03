import React from 'react';
import {connect} from 'react-redux';
import './checkout-item.scss';
import {removeItem, addItem, decreaseOneQuantity} from '../../redux/card/card-actions';

const CheckoutItem = ({cardItem, removeItem, addItem, decreaseOneQuantity}) => {
    const {imageUrl, name, quantity, price} = cardItem;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={imageUrl}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=> decreaseOneQuantity(cardItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=> addItem(cardItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=>removeItem(cardItem)}>&#x2df;</div>
    </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem:          item => dispatch(removeItem(item)),
    addItem:             item => dispatch(addItem(item)),
    decreaseOneQuantity: item => dispatch(decreaseOneQuantity(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem)