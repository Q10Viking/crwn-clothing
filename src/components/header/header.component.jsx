import './header.style.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

import CardIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {getCurrentUser} from '../../redux/user/user.selectors';
import {getCartHidden} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const Header = ({currentUser,hidden}) => (
    <div className="header">
        <div className="logo-container">
            <Link to="/">
                <Logo />
            </Link>
        </div>
        <div className="options">
            <Link className="option" to="/shop" >SHOP</Link>
            <Link className="option" to="/contact" >CONTACT</Link>
            {
                
                currentUser?
                (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                :
                (<Link className="option" to="/signin" >SIGN IN</Link>)
            }
            <CardIcon />
        </div>
        {
            hidden ? null:<CartDropDown/>
        }
    </div>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: getCurrentUser,
    hidden: getCartHidden
})

export default connect(mapStateToProps)(Header);