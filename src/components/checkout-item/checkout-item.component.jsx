import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {clearCartItem,removeCartItem,addItem} from '../../redux/cart/cart.actions'


const CheckoutItem = ({cartItem,clearItem,removeCartItem,addCartItem}) => {
    
    const {name,price,quantity,imageUrl} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="product"/>
            </div>

            <span className="name">{name}</span>
            <div className="quantity">
                <span className="operate"   onClick={ () => removeCartItem(cartItem) }>&#10134;</span>
                <span className="value">{quantity}</span>
                <span className="operate"   onClick={ () => addCartItem(cartItem) }>&#10133;</span>
            </div>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>
                <span>&#10005;</span>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearCartItem(item)),
    removeCartItem: item => dispatch(removeCartItem(item)),
    addCartItem: item => dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);