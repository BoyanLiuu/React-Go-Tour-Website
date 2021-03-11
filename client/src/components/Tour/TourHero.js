import styled from 'styled-components';
import React from 'react';
import clock from '../../assets/img/tourPageIcons/clock.svg';
import mapPin from '../../assets/img/tourPageIcons/map-pin.svg';
const StyledHero = styled.section`
    position: relative;
    height: 38vw;
    clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - var(--section-rotate)),
        0 100%
    );
    -webkit-clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - var(--section-rotate)),
        0 100%
    );

    .header__hero {
        height: 100%;
    }

    .header__hero-img {
        -o-object-fit: cover;
        object-fit: cover;
        height: 100%;
        width: 100%;
        -o-object-position: 50% 25%;
        object-position: 50% 25%;
    }

    .header__hero-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: -webkit-gradient(
            linear,
            left top,
            right bottom,
            from(#7dd56f),
            to(#28b487)
        );
        background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
        opacity: 0.85;
    }

    .heading-box {
        position: absolute;
        bottom: 13vw;
        left: 50%;
        top: 35%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .heading-primary {
        color: #fff;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 5rem;
        text-align: center;
        width: 70%;
        margin: 0 auto;
    }

    .heading-primary span {
        padding: 1rem 1.5rem;
        line-height: 1;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        background-image: -webkit-gradient(
            linear,
            left top,
            right bottom,
            from(rgba(125, 213, 111, 0.85)),
            to(rgba(40, 180, 135, 0.85))
        );
        background-image: linear-gradient(
            to bottom right,
            rgba(125, 213, 111, 0.85),
            rgba(40, 180, 135, 0.85)
        );
    }

    .heading-box__group {
        color: #f7f7f7;
        margin-top: 3rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .heading-box__detail {
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.15);
    }
    .heading-box__detail:not(:last-child) {
        margin-right: 4rem;
    }
`;

const TourHero = ({ data }) => {
    const imgCover = require(`./../../assets/img/tours/${data.imageCover}`)
        .default;
    return (
        <StyledHero>
            <div className="header__hero">
                <div className="header__hero-overlay" />
                <img
                    className="header__hero-img"
                    src={imgCover}
                    alt={data.name}
                />
            </div>
            <div className="heading-box">
                <h1 className="heading-primary">
                    <span>{data.name} Tour</span>
                </h1>
                <div className="heading-box__group">
                    <div className="heading-box__detail">
                        <img src={clock} alt="clock" />
                        <span className="heading-box__text">
                            {data.duration} days
                        </span>
                    </div>
                    <div className="heading-box__detail">
                        <img src={mapPin} alt="map pin" />
                        <span className="heading-box__text">
                            {data.startLocation.description}
                        </span>
                    </div>
                </div>
            </div>
        </StyledHero>
    );
};

export default TourHero;
