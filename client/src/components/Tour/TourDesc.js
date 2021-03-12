import styled from 'styled-components';
import React from 'react';
//import svg icons
import calendar from '../../assets/img/tourPageIcons/calendar.svg';
import trendingUp from '../../assets/img/tourPageIcons/trending-up.svg';
import user from '../../assets/img/tourPageIcons/user.svg';
import star from '../../assets/img/tourPageIcons/star.svg';

import tempPhoto from '../../assets/img/users/user-12.jpg';
const StyledDesc = styled.section`
    background-color: #fcfcfc;
    margin-top: calc(0px - var(--section-rotate));
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    & > * {
        padding: 0 8vw;
        padding-top: 14vw;
        padding-bottom: calc(1vw + var(--section-rotate));
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
    }

    .overview-box {
        background-color: #f7f7f7;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .overview-box__group:not(:last-child) {
        margin-bottom: 7rem;
    }

    .heading-secondary {
        font-size: 2.25rem;
        text-transform: uppercase;
        font-weight: 700;
        background-image: -webkit-gradient(
            linear,
            left top,
            right top,
            from(#7dd56f),
            to(#28b487)
        );
        background-image: linear-gradient(to right, #7dd56f, #28b487);
        -webkit-background-clip: text;
        color: transparent;
        letter-spacing: 0.1rem;
        line-height: 1.3;
        display: inline-block;
    }
    .overview-box__detail {
        font-size: 1.5rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-weight: 400;
    }
    .overview-box__detail img {
        margin-right: 1.25rem;
    }
    .overview-box__detail:not(:last-child) {
        margin-bottom: 2.25rem;
    }
    .overview-box__label {
        font-weight: 700;
        margin-right: 2.25rem;
        text-transform: uppercase;
        font-size: 1.4rem;
    }
    .overview-box__text {
        text-transform: capitalize;
    }
    .overview-box__img {
        border-radius: 50%;
        height: 3.5rem;
        margin-right: 1.25rem;
    }
    .overview-box__icon {
        height: 2.25rem;
        width: 2.25rem;
    }
    .description-box .description {
        margin-right: 5rem;
    }
    .description-box .description__text {
        font-size: 1.7rem;
    }
    .description-box .description__text:not(:last-child) {
        margin-bottom: 2rem;
    }
`;

const TourDesc = ({ data }) => {
    const descriptionItems = data.description.split('\n').map((item, key) => (
        <p className="description__text" key={key}>
            {item}
        </p>
    ));
    console.log(data.description.split('\n'));
    return (
        <>
            <StyledDesc>
                <div className="overview-box">
                    <div>
                        <div className="overview-box__group">
                            <h2 className="heading-secondary ma-bt-lg">
                                Quick facts
                            </h2>
                            <div className="overview-box__detail">
                                <img
                                    className="overview-box__icon"
                                    src={calendar}
                                    alt="calendar"
                                />
                                <span className="overview-box__label">
                                    Next date
                                </span>
                                <span className="overview-box__text">
                                    June 2021
                                </span>
                            </div>
                            <div className="overview-box__detail">
                                <img
                                    className="overview-box__icon"
                                    src={trendingUp}
                                    alt="trending up"
                                />
                                <span className="overview-box__label">
                                    Difficulty
                                </span>
                                <span className="overview-box__text">
                                    {data.difficulty}
                                </span>
                            </div>
                            <div className="overview-box__detail">
                                <img
                                    className="overview-box__icon"
                                    src={user}
                                    alt="user"
                                />
                                <span className="overview-box__label">
                                    Participants
                                </span>
                                <span className="overview-box__text">
                                    {data.maxGroupSize} people
                                </span>
                            </div>
                            <div className="overview-box__detail">
                                <img
                                    className="overview-box__icon"
                                    src={star}
                                    alt="star"
                                />
                                <span className="overview-box__label">
                                    Rating
                                </span>
                                <span className="overview-box__text">
                                    {data.ratingsAverage} / 5
                                </span>
                            </div>
                        </div>
                        <div className="overview-box__group">
                            <h2 className="heading-secondary ma-bt-lg">
                                Your tour guides
                            </h2>
                            <div className="overview-box__detail">
                                <img
                                    className="overview-box__img"
                                    src={tempPhoto}
                                    alt="Miyah Myles"
                                />
                                <span className="overview-box__label">
                                    Lead guide
                                </span>
                                <span className="overview-box__text">
                                    Miyah Myles
                                </span>
                            </div>
                            <div className="overview-box__detail">
                                <img
                                    className="overview-box__img"
                                    src={tempPhoto}
                                    alt="Jennifer Hardy"
                                />
                                <span className="overview-box__label">
                                    Tour guide
                                </span>
                                <span className="overview-box__text">
                                    Jennifer Hardy
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description-box">
                    <h2 className="heading-secondary ma-bt-lg">
                        About {data.name}
                    </h2>
                    {descriptionItems}
                </div>
            </StyledDesc>
        </>
    );
};

export default TourDesc;
