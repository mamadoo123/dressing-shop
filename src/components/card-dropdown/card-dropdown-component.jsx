import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';

import './card-dropdown.scss';

import ButtonComponent from '../button-component/button-component';
import CardItem from '../card-item/card-item-component';
import { selectCardItems } from '../../redux/card/card-selectors';
import { toggleCardHidden } from '../../redux/card/card-actions';

const CardDropdown = ({cardItems, history, dispatch}) => (
    <div className="card-dropdown">
        <div className="card-items">
        { cardItems.length ?
          cardItems.map(cardItem =>(<CardItem key={cardItem.id} item={cardItem}/>)):
          <span className="empty-message">your card is empty</span> 
        }
        </div>
        <ButtonComponent onClick={()=> {
            history.push('/checkout');
            dispatch(toggleCardHidden());
            }}>
            Go To Checkout</ButtonComponent>
    </div>
);
const mapStateToProps =createStructuredSelector({
    cardItems: selectCardItems
});

export default withRouter(connect(mapStateToProps)(CardDropdown))