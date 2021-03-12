import styled from 'styled-components';
import React from 'react';
const StyledHero = styled.section`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    clip-path: polygon(
        0 var(--section-rotate),
        100% 0,
        100% calc(100% - var(--section-rotate)),
        0 100%
    );
    -webkit-clip-path: polygon(
        0 var(--section-rotate),
        100% 0,
        100% calc(100% - var(--section-rotate)),
        0 100%
    );
    margin-top: calc(0px - var(--section-rotate));
    position: relative;
    z-index: 1000;

    .picture-box__img {
        display: block;
        width: 100%;
        height: 110%;
        -o-object-fit: cover;
        object-fit: cover;
    }
    .picture-box__img--1 {
        padding-top: 15%;
    }
    .picture-box__img--2 {
        padding-bottom: 15%;
    }
    .picture-box__img--3 {
        padding-bottom: 27%;
    }
`;

const TourPics = ({ data }) => {
    const imgArys = data.images.map(
        (item) => require(`./../../assets/img/tours/${item}`).default
    );
    const renderItems = imgArys.map((item, index) => {
        return (
            <div className="picture-box">
                <img
                    className={`picture-box__img picture-box__img--${
                        index + 1
                    }`}
                    src={item}
                    alt="tour img"
                    key={index}
                />
            </div>
        );
    });
    return <StyledHero>{renderItems}</StyledHero>;
};

export default TourPics;
