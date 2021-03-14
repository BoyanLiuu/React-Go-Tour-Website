import styled from 'styled-components';
import React from 'react';
import logo from './../../assets/img/logo-white.png';
const StyledTourCTA = styled.section`
    margin-top: calc(0px - var(--section-rotate));
    padding: 3rem;
    padding-bottom: 11rem;
    padding-top: calc(15rem + var(--section-rotate));
    background-color: #f7f7f7;

    .cta {
        position: relative;
        max-width: 105rem;
        margin: 0 auto;
        overflow: hidden;
        background-color: #fff;
        padding: 9rem 5rem 9rem 21rem;
        border-radius: 2rem;
        -webkit-box-shadow: 0 3rem 8rem 0.5rem rgba(0, 0, 0, 0.15);
        box-shadow: 0 3rem 8rem 0.5rem rgba(0, 0, 0, 0.15);
    }

    .cta__img {
        height: 15rem;
        width: 15rem;
        position: absolute;
        left: 0;
        top: 50%;
        border-radius: 50%;
        -webkit-box-shadow: 1rem 0.5rem 3rem rgba(0, 0, 0, 0.15);
        box-shadow: 1rem 0.5rem 3rem rgba(0, 0, 0, 0.15);
    }

    .cta__img--logo {
        padding: 2rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        background: -webkit-gradient(
            linear,
            left top,
            right bottom,
            from(#7dd56f),
            to(#28b487)
        );
        background: linear-gradient(to right bottom, #7dd56f, #28b487);
        z-index: 10;
        -webkit-transform: translate(-35%, -50%);
        transform: translate(-35%, -50%);
    }
    .cta__img--logo img {
        width: 100%;
    }
    .cta__img--1 {
        -webkit-transform: translate(-10%, -50%) scale(0.97);
        transform: translate(-10%, -50%) scale(0.97);
        z-index: 9;
    }
    .cta__img--2 {
        -webkit-transform: translate(15%, -50%) scale(0.94);
        transform: translate(15%, -50%) scale(0.94);
        z-index: 8;
    }
    .cta__content {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr auto;
        grid-gap: 0.7rem;
        grid-auto-flow: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .cta__text {
        font-size: 1.9rem;
        font-weight: 400;
    }
`;

const TourMap = ({ data }) => {
    const firstImg = require(`./../../assets/img/tours/${data.images[1]}`)
        .default;

    const secImg = require(`./../../assets/img/tours/${data.images[2]}`)
        .default;
    return (
        <StyledTourCTA>
            <div className="cta">
                <div className="cta__img cta__img--logo">
                    <img src={logo} alt="Natours logo" />
                </div>

                <img
                    src={firstImg}
                    className="cta__img cta__img--1"
                    alt="Tour 1"
                />
                <img
                    src={secImg}
                    className="cta__img cta__img--2"
                    alt="Tour 2"
                />
                <div className="cta__content">
                    <h2 className="heading-secondary">
                        What are you waiting for?
                    </h2>
                    <p className="cta__text">
                        {data.duration} days. 1 adventure. Infinite memories.
                        Make it yours today!
                    </p>
                    <button
                        className="btn btn--green span-all-rows"
                        id="book-tour">
                        Book tour now!
                    </button>
                </div>
            </div>
        </StyledTourCTA>
    );
};

export default TourMap;
