import styled from 'styled-components';
import React from 'react';
import starColor from '../../assets/img/tourPageIcons/star.svg';
import starNoColor from '../../assets/img/tourPageIcons/starNoColor.svg';
const StyledReview = styled.section`
    margin-top: calc(0px - var(--section-rotate));
    padding: calc(5rem + var(--section-rotate)) 0;
    position: relative;
    z-index: 1000;
    background: -webkit-gradient(
        linear,
        left top,
        right bottom,
        from(#7dd56f),
        to(#28b487)
    );
    background: linear-gradient(to right bottom, #7dd56f, #28b487);
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
    .reviews {
        padding: 5rem 0;
        display: grid;
        grid-column-gap: 6rem;
        grid-auto-flow: column;
        overflow-x: scroll;
        -ms-scroll-snap-type: x mandatory;
        scroll-snap-type: x mandatory;
    }
    .reviews__card {
        width: 30rem;
        padding: 4rem;
        background-color: #f7f7f7;
        border-radius: 3px;
        -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
        box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
        scroll-snap-align: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .reviews:before,
    .reviews:after {
        content: '';
        width: 2rem;
    }
    .reviews__avatar {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 2rem;
    }
    .reviews__avatar-img {
        height: 4.5rem;
        border-radius: 50%;
        margin-right: 1.5rem;
    }
    .reviews__user {
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
    }
    .reviews__text {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        font-style: italic;
        font-weight: 400;
    }
    .reviews__rating {
        margin-top: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
`;

const TourReview = () => {
    const reviewData = [
        {
            review:
                'Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti mattis praesent feugiat eu nascetur a tincidunt',
            rating: 5,
            photo: 'user-7.jpg',
            name: 'name1',
        },
        {
            review:
                'Pulvinar taciti etiam aenean lacinia natoque interdum fringilla suspendisse nam sapien urna!',
            rating: 4,
            photo: 'user-2.jpg',
            name: 'name2',
        },
        {
            review:
                'Sem feugiat sed lorem vel dignissim platea habitasse dolor suscipit ultricies dapibus',
            rating: 3,
            photo: 'user-3.jpg',
            name: 'name3',
        },
        {
            review:
                'Blandit varius nascetur est felis praesent lorem himenaeos pretium dapibus tellus bibendum consequat ac duis',
            rating: 5,
            photo: 'user-4.jpg',
            name: 'name4',
        },
        {
            review:
                'Tempor pellentesque eu placerat auctor enim nam suscipit tincidunt natoque ipsum est.',
            rating: 5,
            photo: 'user-5.jpg',
            name: 'name5',
        },
        {
            review:
                'Magna magnis tellus dui vivamus donec placerat vehicula erat turpis',
            rating: 5,
            photo: 'user-6.jpg',
            name: 'name6',
        },
    ];

    const reviewList = reviewData.map((item, index) => {
        const imgCover = require(`./../../assets/img/users/${item.photo}`)
            .default;

        const reviewStar = () => {
            const res = [];
            for (let i = 0; i < 5; i++) {
                if (item.rating > i)
                    res.push(<img key={i} src={starColor} alt="color" />);
                else res.push(<img key={i} src={starNoColor} alt="No color" />);
            }
            return res;
        };
        return (
            <div className="reviews__card" key={index}>
                <div className="reviews__avatar">
                    <img
                        className="reviews__avatar-img"
                        src={imgCover}
                        alt={`review-${index}`}
                    />
                    <h6 className="reviews__user">{item.name}</h6>
                </div>
                <p className="reviews__text">{item.review}</p>
                <div className="reviews__rating">{reviewStar()}</div>
            </div>
        );
    });
    return (
        <StyledReview>
            <div className="reviews">{reviewList}</div>
        </StyledReview>
    );
};

export default TourReview;
