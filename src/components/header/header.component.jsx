import './header.style.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

import CardIcon from '../cart-icon/cart-icon.component';

const Header = ({currentUser}) => (
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
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);