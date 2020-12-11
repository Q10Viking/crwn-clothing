import {createSelector} from 'reselect';

const MAP_CATEGORY_TO_ID = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const getShop = state => state.shop;

const shopSelector = createSelector(
    getShop,
    shop => shop.collections
)


const collectionSelector = category => createSelector(
    shopSelector,
    collections =>
        collections.filter(collection => collection.id === MAP_CATEGORY_TO_ID[category])
)


export {
    shopSelector,
    collectionSelector
} ;