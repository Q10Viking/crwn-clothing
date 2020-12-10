import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {getCartItems} from '../cart-item/cart-item.selector';

const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomButton> GO TO CHECK </CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: getCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);
    

