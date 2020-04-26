import React, { useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Logo from '../Photo/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CountCart } from '../redux/Cart/action'
import firebase from 'firebase/app';
const Navbar = (props) => {
    const actionCountCart = bindActionCreators(CountCart, useDispatch());
    useEffect(() => {
        actionCountCart.getCountCart(props.cart.length);
    }, [props.cart.length])
    const countCart = useSelector(state => state.countCart);
  
    return (
        <div className="navbar" >
            <Link to="/"><img className="logo" src={Logo} alt={"Logo"} /></Link>
            <div className="nav-link2">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/cart"> Cart <span className="cartNum">({countCart})</span></Link>
                <Link className="nav-link" onClick={() => firebase.auth().signOut()}>Logout </Link>
            </div>
        </div>
    );
}

export default Navbar;