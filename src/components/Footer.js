import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo-white.png';

const StyledFooter = styled.div`
`

const Footer = ({loggedin, photo, username}) => {
    return (
        <StyledFooter>
            <p> This is footer</p>
        </StyledFooter>
    );
};

export default Footer;
