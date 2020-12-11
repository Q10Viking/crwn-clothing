import {createSelector} from 'reselect';

const getShop = state => state.shop;

const shopSelector = createSelector(
    getShop,
    shop => shop.collections
)

const selectCollectionsForPreview = createSelector(
    shopSelector,
    collections => Object.keys(collections).map( key => collections[key])
)


const collectionSelector = category => createSelector(
    shopSelector,
    collections => collections[category]

)


export {
    shopSelector,
    collectionSelector,
    selectCollectionsForPreview
} ;