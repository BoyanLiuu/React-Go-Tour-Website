import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo-white.png';



const Header = ({loggedin, photo, username}) => {
    return (
        <StyledHeader>
            <nav className="nav nav--tours">
                <Link className="nav__el" to={'/'}> All tours</Link>
            </nav>

            <img src={logo} alt="logo"/>
            {
                loggedin ?
                <nav className="nav nav--user"> 
                    <Link  className="nav__el nav__el--logout">
                        Log out
                    </Link >
                    <Link  className="nav__el" to={"/me"}>
                        <img src={photo} alt="user photo"/>
                        <span> {username.split(' ')[0]} </span>
                    </Link >
                </nav>:
                <nav className="nav nav--user">
                    <Link  className="nav__el" to={"/login"}> Log in </Link>
                    <Link  className="nav__el nav__el--cta" to={"#"}> Sign up </Link>
                </nav>
            }
        </StyledHeader>
    );
};

export default Header;
