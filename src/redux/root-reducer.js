import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directory from './directory/directory.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directory
})