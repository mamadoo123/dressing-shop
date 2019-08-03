import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase-utilities';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CardIcon from '../card-icon/card-icon-component';
import CardDropdown from '../card-dropdown/card-dropdown-component'; 
import './header.scss';
import { selectCardHidden } from '../../redux/card/card-selectors';
import { selectCurrentUser} from '../../redux/user/user-selectors';

const Header = ({currentUser, hidden})=>(
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/shop" className="option">Contact</Link>
        {
            currentUser ?
            <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div> 
            :
            <Link className="option" to="/signin">SIGN IN</Link>
        }
        <CardIcon className="option" />
        </div>
        {
            hidden ? null :(<CardDropdown />)
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCardHidden
});


export default connect(mapStateToProps)(Header);
