import CardActionTypes from './card-types';

export const toggleCardHidden = () => ({
    type:CardActionTypes.TOGGLE_CARD_HIDDEN
});


export const addItem = item => ({
    type:CardActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CardActionTypes.REMOVE_ITEM,
    payload: item
});

export const decreaseOneQuantity = item => ({
    type: CardActionTypes.DECREASE_ITEM_QUANTITIES_BY_ONE,
    payload: item
})