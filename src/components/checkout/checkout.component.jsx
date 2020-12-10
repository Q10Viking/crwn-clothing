import './checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {getTotal,getCartItems} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../checkout-item/checkout-item.component';

const Checkout = ({total,cartItems}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price &#128525;</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }
        <div className="total">TOTAL ${total}</div>
    </div>
)


const mapStateToProps = createStructuredSelector({
    total: getTotal,
    cartItems: getCartItems
})

export default connect(mapStateToProps)(Checkout);