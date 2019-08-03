import CardActiontypes from './card-types';
import {addItemToCard, removeItemFromCard, decreaseItemQuantitiesByOne} from './card-utilities';

const INITIAL_STATE = {
    hidden: true,
    cardItems:[]
}

const cardReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case CardActiontypes.TOGGLE_CARD_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }; 
        case CardActiontypes.ADD_ITEM:
            return{
                ...state,
                cardItems:addItemToCard(state.cardItems, action.payload)
            };
        case CardActiontypes.REMOVE_ITEM:
            return{
                ...state,
                cardItems:removeItemFromCard(state.cardItems, action.payload)
            };
        case CardActiontypes.DECREASE_ITEM_QUANTITIES_BY_ONE:
            return{
                ...state,
                cardItems:decreaseItemQuantitiesByOne(state.cardItems, action.payload)
            }
        default:
            return state;
    }
}

export default cardReducer;