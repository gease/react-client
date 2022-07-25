import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import './css/header.css';

const Header =  ({loggedIn}) => {
    if (loggedIn) {
        return (
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/secret'>Secret page</NavLink>
                <NavLink to='/logout'>Logout</NavLink>
            </nav>
        )
    }
    else {
        return (
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.status.loggedIn
    }
}

export default connect(mapStateToProps)(Header);
