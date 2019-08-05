import {createSelector} from 'reselect';
const selectStateCollections = state => state.collections;

export const selectCollections = createSelector(
    [selectStateCollections],
    data => data.collections
);

export const selectCollection = collectionRouteParam => createSelector(
    [selectCollections],
    collections => collections[collectionRouteParam] 
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(
        key => collections[key]
    )
)