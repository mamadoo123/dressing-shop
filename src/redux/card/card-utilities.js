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