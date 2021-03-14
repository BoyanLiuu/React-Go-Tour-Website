/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import React from 'react';
import briefcase from './../../assets/img/AboutMePageIcons/briefcase.svg';
import creditCard from './../../assets/img/AboutMePageIcons/credit-card.svg';
import setting from './../../assets/img/AboutMePageIcons/setting.svg';
import star from './../../assets/img/AboutMePageIcons/star.svg';
const StyledSideMenu = styled.div`
    -webkit-box-flex: 32rem;
    -ms-flex: 32rem 0 0px;
    flex: 32rem 0 0;
    background-image: -webkit-gradient(
        linear,
        left top,
        right bottom,
        from(#7dd56f),
        to(#28b487)
    );
    background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
    padding: 4rem 0;

    .side-nav {
        list-style: none;
    }
    .side-nav li {
        margin: 1rem 0;
        border-left: 0 solid #fff;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    .side-nav--active,
    .side-nav li:hover {
        border-left: 4px solid #fff !important;
    }
    .side-nav--active a {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    .side-nav a:link,
    .side-nav a:visited {
        padding: 1rem 4rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #fff;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 400;
        text-decoration: none;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    .side-nav a:hover,
    .side-nav a:active {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }

    .side-nav img {
        height: 1.9rem;
        width: 1.9rem;
        fill: #f7f7f7;
        margin-right: 2rem;
    }
`;

const SideMenu = ({ data }) => {
    return (
        <StyledSideMenu className="user-view">
            <nav className="user-view__menu">
                <ul className="side-nav">
                    <li className="side-nav--active">
                        <a href="#">
                            <img
                                src={setting}
                                className="sidebar-icon"
                                alt="setting"
                            />
                            Settings
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src={briefcase}
                                className="sidebar-icon"
                                alt="briefcase"
                            />
                            My bookings
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src={star}
                                className="sidebar-icon"
                                alt="star"
                            />
                            My reviews
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src={creditCard}
                                className="sidebar-icon"
                                alt="credit Card"
                            />
                            Billing
                        </a>
                    </li>
                </ul>
            </nav>
        </StyledSideMenu>
    );
};

export default SideMenu;
