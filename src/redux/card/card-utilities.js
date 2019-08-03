export const addItemToCard = (cardItemsArr, addedItem) =>{
    const ifItemExists = cardItemsArr.find(
        item => item.id === addedItem.id
    );

    if(ifItemExists){
        return cardItemsArr.map(
            item => item.id === addedItem.id ? 
                {...item, quantity: item.quantity +1} : 
                item 
        );
    }
        return [...cardItemsArr, {...addedItem, quantity: 1}];
}

export const removeItemFromCard = (cardItemsArr, removedItem) =>{
    return cardItemsArr.filter(item => item.id !== removedItem.id)
}

export const decreaseItemQuantitiesByOne = (cardItemsArr, decreasingItem)=>{
    if(decreasingItem.quantity <= 1){
        return cardItemsArr.filter(item => item.id !== decreasingItem.id)
    }
    return cardItemsArr.map(
        item => item.id === decreasingItem.id ? 
            {...item, quantity: item.quantity -1} : 
            item 
    );

}