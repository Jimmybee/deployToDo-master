import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Container extends React.Component {

  render() {
    
   const style = {
      width: '50vw',
      height: '50vh'
    }

    return (
      <div>
      	<Map
          style={style} 
          google={this.props.google}
          centerAroundCurrentLocation={true}
        >
          <Marker
          name={'SOMA'}
          position={{lat: 37.778519, lng: -122.405640}} />
        </Map>
      </div>
    )
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyAOBxlw64KDySert353RpCENs9_fSV-6jY",
  version: "3"
})(Container)


// class Map extends React.Component {
//   componentDidMount() {
//     this.loadMap();
//   }

//    componentDidUpdate(prevProps, prevState) {
//     if (prevProps.google !== this.props.google) {
//       this.loadMap();
//     }
//   }

//   loadMap() {
//     if (this.props && this.props.google) {
//       // google is available
//       const {google} = this.props;
//       const maps = google.maps;

//       const mapRef = this.refs.map;
//       const node = ReactDOM.findDOMNode(mapRef);

//       let zoom = 12;
//       let lat = 37.774929;
//       let lng = -122.419416;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = Object.assign({}, {
//         center: center,
//         zoom: zoom,
//         zoomControl: true,
//         centerAroundCurrentLocation: true,
//       })
//       this.map = new maps.Map(node, mapConfig);
//     }
//   }

//   render() {
//   	const style = {
//       width: '50vw',
//       height: '50vh'
//     }
//     return (
//       <div ref='map' style ={style}>
//         Loading map...
//       </div>
//     )
//   }
// }