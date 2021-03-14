import styled from 'styled-components';
import React from 'react';

const StyledTourMap = styled.section`
    position: relative;
    height: 65rem;
    margin-top: calc(0px - var(--section-rotate));
    background-color:black;
`;

const TourMap = ({ data }) => {
    const locations = JSON.stringify(data.locations);
    return <StyledTourMap></StyledTourMap>;
};

export default TourMap;
