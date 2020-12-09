import './header.style.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

import CardIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../card-dropdown/cart-dropdown.component';

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
                (<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>)
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

const mapStateToProps = ({user: {currentUser},cart:{hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);