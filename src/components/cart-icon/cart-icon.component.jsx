import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
const CardIcon = ({toggleHidden,itemCount}) => (
    <div className="cart-icon" onClick={toggleHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => {
    const itemCount = cartItems.reduce((accumulatorQuantity,currentCartItem) => (
        accumulatorQuantity + currentCartItem.quantity
    ),0);
    return {itemCount};
}

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(CardIcon)