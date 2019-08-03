import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as Icon} from '../../assets/shopping-bag.svg';
import {toggleCardHidden} from '../../redux/card/card-actions';
import './card-icon.scss';
import { selectCardItemsCount } from '../../redux/card/card-selectors';

const CardIcon = ({toggleCardHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCardHidden}>
        <Icon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
);
const mapDispatchToProps = dispatch => ({
    toggleCardHidden: ()=> dispatch(toggleCardHidden())
});
const mapStateToProps = state => ({
    itemCount: selectCardItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);