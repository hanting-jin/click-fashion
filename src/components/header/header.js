import React from 'react';
import {Link} from 'react-router-dom'
import './header.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'
import {connect} from 'react-redux';

import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-drop/cart-dropdown';

const Header = ({currentUser, hidden}) => (

    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {
                currentUser ? 
                // Sign out function, if there is a currentUser
                (<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>)
                : 
                (<Link className="option" to="signin">SIGN IN</Link>)
            }
            <CartIcon/>
        </div>
        {hidden ? null : <CartDropdown/>}
    </div>
    
)

const mapStateToProps = ({user: {currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);