import React, { Component } from 'react';
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps"

 /*global google*/

const MapRenderer =
  compose(
    withProps({
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `500px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
      componentDidUpdate(previousProps, _previousState) {
        const DirectionsService = new google.maps.DirectionsService();

        if (this.props.directionInfo !== previousProps.directionInfo) {
          console.log("info", this.props.directionInfo);

          DirectionsService.route({
            origin: this.props.directionInfo.origin,
            destination: this.props.directionInfo.origin,
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: this.props.directionInfo.waypoints,
            optimizeWaypoints: true,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result,
              });
            } else {
              console.error("error fetching directions", status, result);
            }
          });
        }
      }
    })
  ) (
    (props) =>
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: 38.879337, lng: -77.089911 }} // Dischord house
      >
      {props.directions && <DirectionsRenderer directions={props.directions}
      panel={ document.getElementById('panel') } />}
      <div id="panel"></div>
      </GoogleMap>
  )


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directionInfo: null
    }

    this.updateDirections = this.updateDirections.bind(this);
    props.emitter.addListener('updateDirections', this.updateDirections);
  }

  updateDirections(info) {
    info.waypoints = info.steps.split("\n").map(function(loc) {
      return {
        location: loc,
      }
    });

    this.setState({
      directionInfo: info,
    });
  }

  render() {
    return (
      <MapRenderer directionInfo={this.state.directionInfo} />
    )
  }
}

export default Map;
