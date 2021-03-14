import styled from 'styled-components';
import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

const StyledTourMap = styled.section`
    position: relative;
    height: 65rem;
    margin-top: calc(0px - var(--section-rotate));
    background-color:black;
`;

const TourMap = ({ data }) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaXZ5eGllMDAwMiIsImEiOiJjazBiOWQzd2IwcnZyM2NxbGEyNTJodzM4In0.r2j-kun6tv9h5aUw2hBagA';

    var map = new mapboxgl.Map({
    container: 'map_container',
    style: 'mapbox://styles/mapbox/streets-v11'
    });

    const locations = JSON.stringify(data.locations);
    return <StyledTourMap>
        <div id="map_container">{map}</div>
    </StyledTourMap>;
};

export default TourMap;
