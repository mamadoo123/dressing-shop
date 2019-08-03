import {createSelector} from 'reselect';
//=======Input Selector==============
const selectCard = state => state.card;
//=======Output Selector=============
export const selectCardItems = createSelector(
    [selectCard],
    card => card.cardItems
);

export const selectCardItemsCount = createSelector(
    [selectCardItems],
    cardItems => cardItems.reduce(
        (accumulatedQuantity, cardItem)=> accumulatedQuantity + cardItem.quantity
        ,0)
);

export const selectCardHidden = createSelector(
    [selectCard],
    card => card.hidden
);

export const selectTotalPrice = createSelector(
    [selectCardItems],
    cardItems => cardItems.reduce(
        (accumulatedPrice, cardItem)=> accumulatedPrice + cardItem.price * cardItem.quantity
        ,0)
)