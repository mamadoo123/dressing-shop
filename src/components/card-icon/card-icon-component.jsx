import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as Icon} from '../../assets/shopping-bag.svg';
import toggleCardHidden from '../../redux/card/card-actions';
import './card-icon.scss';

const CardIcon = ({toggleCardHidden}) => (
    <div className="cart-icon" onClick={toggleCardHidden}>
        <Icon className="shopping-icon"/>
        <span className="item-count">{0}</span>
    </div>
);
const mapDispatchToProps = dispatch => ({
    toggleCardHidden: ()=> dispatch(toggleCardHidden())
}) 
export default connect(null, mapDispatchToProps)(CardIcon);