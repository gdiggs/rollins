import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap  } from "react-google-maps"

const Map =
  compose(
    withProps({
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `500px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  ) (
    (props) =>
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: 38.879337, lng: -77.089911 }} // Dischord house
      ></GoogleMap>
  )

export default Map;
