import React from 'react';
import {connect} from 'react-redux';

import ButtonComponent from '../button-component/button-component';
import CardItem from '../card-item/card-item-component';

import './card-dropdown.scss';

const CardDropdown = ({cardItems}) => (
    <div className="card-dropdown">
        <div className="card-items">
        { 
          cardItems.map(cardItem =>(<CardItem key={cardItem.id} item={cardItem}/>)) 
        }
        </div>
        <ButtonComponent>Go To Checkout</ButtonComponent>
    </div>
);
const mapStateToProps = state => ({
    cardItems: state.card.cardItems
})
export default connect(mapStateToProps)(CardDropdown)