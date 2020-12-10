import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {clearItem} from '../../redux/cart/cart.actions'


const CheckoutItem = ({cartItem,dispatch}) => {
    
    const {name,price,quantity,imageUrl} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="product"/>
            </div>

            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => dispatch(clearItem(cartItem))}>
                <span>&#10005;</span>
            </div>
        </div>
    )
};


export default connect()(CheckoutItem);