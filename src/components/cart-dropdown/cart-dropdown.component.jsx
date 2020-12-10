import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {getCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
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

const mapStateToProps = createStructuredSelector ({
    cartItems: getCartItems
})

export default connect(mapStateToProps)(CartDropDown);
    

