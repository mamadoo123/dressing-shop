import CardActionTypes from './cart-types';

export const toggleCardHidden = () => ({
    type:CardActionTypes.TOGGLE_CARD_HIDDEN
});


export const addItem = item => ({
    type:CardActionTypes.ADD_ITEM,
    payload: item
});