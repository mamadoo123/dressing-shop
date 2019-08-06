import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectTotalPrice, selectCardItems} from '../../redux/card/card-selectors';
import './checkout-page.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item-component';
import StripeButton from '../../components/stripe-button/stripe-button-component';

const CheckoutPage = ({cardItems, totalPrice})=>(
<div className="checkout-page">
    <div className="checkout-header">
        <div className="header-block">
            <span>Product</span>
        </div>
        <div className="header-block">
            <span>Description</span>
        </div>
        <div className="header-block">
            <span>Quantity</span>
        </div>
        <div className="header-block">
            <span>Price</span>
        </div>
        <div className="header-block">
            <span>Remove</span>
        </div>
    </div>
    {
        cardItems.map(cardItem => (
            <CheckoutItem key={cardItem.id} cardItem={cardItem}/> ))
    }
    <div className="total">Total: ${totalPrice}</div>
    <StripeButton price={totalPrice}/>
    <div className="test-warning">
        *Pleaseuse this card info to try the payment in my app*
        <br />
        card number: 4242 - 4242 - 4242 - 4242 EXP: 01/20 CVV: 123
    </div>
</div>
)

const mapStateToProps = createStructuredSelector({
    cardItems: selectCardItems,
    totalPrice: selectTotalPrice
})
export default connect(mapStateToProps)(CheckoutPage)