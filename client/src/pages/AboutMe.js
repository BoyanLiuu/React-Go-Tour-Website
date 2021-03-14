import styled from 'styled-components';
import React from 'react';
import {
    SideMenu,
    Setting,
    Booking,
    MyReviews,
    Billing,
} from './../components/index';

const StyledAboutMe = styled.div`
    padding: 8rem 6rem;
    .inner-div {
        max-width: 120rem;
        margin: 0 auto;
        min-height: 100vh;
        border-radius: 3px;
        overflow: hidden;
        -webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.07);
        box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.07);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;

        .user-view__content {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            padding: 7rem 0;
        }
    }
`;
// <Booking />
// <MyReviews />
// <Billing />
function AboutMe() {
    return (
        <StyledAboutMe>
            <div className="inner-div">
                <SideMenu />
                <div className="user-view__content">
                    <Setting />
                </div>
            </div>
        </StyledAboutMe>
    );
}

export default AboutMe;
