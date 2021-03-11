import styled from 'styled-components';
import React from 'react';
//import svg icons
import calendar from '../../assets/img/tourPageIcons/calendar.svg';
import trendingUp from '../../assets/img/tourPageIcons/trending-up.svg';
import user from '../../assets/img/tourPageIcons/user.svg';
import star from '../../assets/img/tourPageIcons/star.svg';

import tempPhoto from '../../assets/img/users/user-12.jpg';
const StyledDesc = styled.section``;

const TourDesc = ({ data }) => {
    return (
        <>
            <StyledDesc>
                <div class="overview-box">
                    <div class="overview-box__group">
                        <h2 class="heading-secondary">Quick facts</h2>
                        <div class="overview-box__detail">
                            <img
                                className="header__hero-img"
                                src={calendar}
                                alt="calendar"
                            />
                            <span class="overview-box__label">Next date</span>
                            <span class="overview-box__text">June 2021</span>
                        </div>
                        <div class="overview-box__detail">
                            <img
                                className="header__hero-img"
                                src={trendingUp}
                                alt="trending up"
                            />
                            <span class="overview-box__label">Difficulty</span>
                            <span class="overview-box__text">medium</span>
                        </div>
                        <div class="overview-box__detail">
                            <img
                                className="header__hero-img"
                                src={user}
                                alt="user"
                            />
                            <span class="overview-box__label">
                                Participants
                            </span>
                            <span class="overview-box__text">15 people</span>
                        </div>
                        <div class="overview-box__detail">
                            <img
                                className="header__hero-img"
                                src={star}
                                alt="star"
                            />
                            <span class="overview-box__label">Rating</span>
                            <span class="overview-box__text">4.8 / 5</span>
                        </div>
                    </div>
                    <div class="overview-box__group">
                        <h2 class="heading-secondary ">Your tour guides</h2>
                        <div class="overview-box__detail">
                            <img
                                class="overview-box__img"
                                src={tempPhoto}
                                alt="Miyah Myles"
                            />
                            <span class="overview-box__label">Lead guide</span>
                            <span class="overview-box__text">Miyah Myles</span>
                        </div>
                        <div class="overview-box__detail">
                            <img
                                class="overview-box__img"
                                src={tempPhoto}
                                alt="Jennifer Hardy"
                            />
                            <span class="overview-box__label">Tour guide</span>
                            <span class="overview-box__text">
                                Jennifer Hardy
                            </span>
                        </div>
                    </div>
                </div>
                <div class="description-box">
                    <h2 class="heading-secondary">
                        About The Sea Explorer tour
                    </h2>
                    <p class="description__text">
                        Consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                    <p class="description__text">
                        Irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </p>
                </div>
            </StyledDesc>
        </>
    );
};

export default TourDesc;
