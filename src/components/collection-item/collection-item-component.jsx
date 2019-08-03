import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/card/card-actions';

import './collection-item.scss';

import ButtonComponent from '../button-component/button-component';


const CollectionItem = ({item, addItem}) => {
    const {name, imageUrl, price} = item;
    return(
    <div className="collection-item">
        <div 
            className="image"
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <ButtonComponent inverted onClick={()=>addItem(item)}>
        Add To Card
        </ButtonComponent>
    </div>
    );   
}

const mapDispatchToProps = dispatch => ({
    addItem: item=>dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem)