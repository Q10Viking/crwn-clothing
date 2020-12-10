import {createSelector} from 'reselect';

const getShop = state => state.shop;

const shopSelector = createSelector(
    getShop,
    shop => shop.collections
)

export default shopSelector;