import styled from 'styled-components';
import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import pin from '../../assets/img/pin.png';

const StyledTourMap = styled.section`
    position: relative;
    height: 65rem;
    margin-top: calc(0px - var(--section-rotate));
    background-color: black;

    .pin_img{
        width: 3rem;
    }
`;

const TourMap = ({ data }) => {
    console.log(data.locations);

    const [viewport, setViewport] = useState({
        latitude: data.locations[0].coordinates[1],
        longitude: data.locations[0].coordinates[0],
        width: "inherit",
        height: "inherit",
        zoom: 7
    });
   
    return <StyledTourMap>
        <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiaXZ5eGllMDAwMiIsImEiOiJjazBiOWQzd2IwcnZyM2NxbGEyNTJodzM4In0.r2j-kun6tv9h5aUw2hBagA"
        mapStyle="mapbox://styles/ivyxie0002/ck0b9h3h03rgw1crhxjo7vs0t"
        onViewportChange={ viewport => {
            setViewport(viewport);
        }}
        >
            {
              data.locations.map((coord) => (
                  <Marker key={coord._id} latitude={coord.coordinates[1]} longitude={coord.coordinates[0]}>
                      <img className="pin_img" src={pin} alt={`location pin for day ${coord.day}. Coordinate: [${coord.coordinates[0]}, ${coord.coordinates[1]}]`}/>
                  </Marker>
              ))
            }
        </ReactMapGL>
    </StyledTourMap>;
};

export default TourMap;
