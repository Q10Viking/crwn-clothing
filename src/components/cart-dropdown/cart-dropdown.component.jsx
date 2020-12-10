import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {getCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartDropDown = ({cartItems,history,dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            dispatch(toggleCartHidden());
            history.push('/checkout');
        }}> GO TO CHECK </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: getCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));
    

