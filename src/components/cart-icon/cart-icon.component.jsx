import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';

import {getCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
const CardIcon = ({toggleHidden,itemCount}) => (
    <div className="cart-icon" onClick={toggleHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: getCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(CardIcon)