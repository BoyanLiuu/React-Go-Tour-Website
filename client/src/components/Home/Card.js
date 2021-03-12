import styled from 'styled-components';
import React from 'react';

import { Link } from 'react-router-dom';
import icon_flag from '../../assets/img/tourPageIcons/flag.svg';
import icon_user from '../../assets/img/tourPageIcons/user.svg';
import icon_map_pin from '../../assets/img/tourPageIcons/map-pin-green.svg';
import icon_calendar from '../../assets/img/tourPageIcons/calendar.svg';


const StyledCard = styled.div`
    border-radius: 3px;
    overflow: hidden;
    -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
    background-color: #fff;
    -webkit-transition: 0.3s all;
    transition: 0.3s all;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;

    .card__header {
        position: relative;
    }

    .card__picture {
        position: relative;
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
        clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
        height: 22rem;
    }

    .card__picture-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: -webkit-gradient(linear, left top, right bottom,from(#7dd56f),to(#28b487));
        background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
        opacity: 0.7;
    }

    .card__picture-img {
        -o-object-fit: cover;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    .card__details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 1.75rem;
        grid-column-gap: 2rem;
        padding: 2.5rem 3rem;
    }

    .card__sub-heading {
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 700;
        grid-column: 1 / -1;
    }
    .card__text {
        grid-column: 1 / -1;
        font-size: 1.5rem;
        font-style: italic;
        margin-top: -1rem;
        margin-bottom: 0.75rem;
    }
    .card__data {
        font-size: 1.3rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .card__icon {
        margin-right: 0.7rem;
        height: 2rem;
        width: 2rem;
    }

    .card__footer {
        background-color: #f7f7f7;
        padding: 2.5rem 3rem;
        border-top: 1px solid #f1f1f1;
        font-size: 1.4rem;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        margin-top: auto;
    }

    .card__footer-value {
        font-weight: 700;
    }
    
    .card__footer-text {
        color: #999;
    }

    .card__ratings {
        grid-row: 2 / 3;
    }

    .btn-small,
    .btn {
        grid-row: 1 / 3;
        justify-self: end;
        -ms-flex-item-align: center;
        align-self: center;
    }

`

const Card = ({data}) => {

    return (
        <StyledCard>
            <div className="card__header">
                <div className="card__picture">
                    <div className="card__picture-overlay">&nbsp;</div>
                    <img className="card__picture-img" 
                        src={require(`../../assets/img/tours/${data.imageCover}`).default} alt="__"/>
                </div>

                <h3 className="heading-tertirary">
                    <span>{data.name}</span>
                </h3>

            </div>

            <div className="card__details">
                <h4 className="card__sub-heading">
                     {data.difficulty} {data.duration} day tour
                </h4>

                <p className="card__text">{data.summary}</p>
                
                <div className="card__data">
                    <img className="card__icon" src={icon_map_pin}/>
                    <span> {data.startLocation.description}</span>
                </div>

                <div className="card__data">
                    <img className="card__icon" src={icon_calendar}/>                 
                    <span>
                        {new Date(data.startDates[0])
                            .toLocaleString('en-US', {month: 'long', year: 'numeric'})}
                    </span>

                </div>

                <div className="card__data">
                    <img className="card__icon" src={icon_flag}/>
                    <span>{data.locations.length} stops</span>
                </div>

                <div className="card__data">
                    <img className="card__icon" src={icon_user}/>
                    <span>{data.maxGroupSize} people</span>
                </div>
            </div>
            
            <div className="card__footer">
                <p>
                    <span className="card__footer-value">${data.price} </span>
                    <span className="card__footer-text">per person</span>
                </p>

                <p className="card__ratings">
                    <span className="card__footer-value">{data.ratingsAverage} </span>
                    <span className="card__footer-text">rating ({data.ratingsQuantity})</span>
                </p>
                
                <Link className="btn btn--green btn--small" href={`/tour/${data.id}`}>Details</Link>

            </div>

        </StyledCard>
    );
};

export default Card;
