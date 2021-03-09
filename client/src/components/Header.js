import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo-white.png';

const StyledHeader = styled.header`
    width:100%;
    height:8rem;
    background-color:var(--header-color);
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding:0 2.4rem;
    .nav__logo{
        height:3.5rem;
    }
    .nav__items{
        display:flex;
        justify-content:space-between;
        width: 15rem;
        .nav__item{
            color: #f7f7f7;
            text-transform: uppercase;
            font-size: 1.6rem;
            text-decoration: none;
            transition: all 0.2s;
            font-weight: 300;
            background: none;
            border: none;
            cursor: pointer;
        }
       
    }


`

const Header = () => {
    return (
        <StyledHeader>
            <Link to={'/'}><img className="nav__logo" src={logo} alt="logo"/></Link>
            <nav className="nav__items">
                <Link  className="nav__item" to={'/login'}> Log in </Link>
                <Link  className="nav__item" to={"/signup"}> Sign up </Link>
            </nav>
        </StyledHeader>
    );
};

export default Header;
