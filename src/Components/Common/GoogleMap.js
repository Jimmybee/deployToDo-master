import {GoogleApiWrapper} from 'google-maps-react'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Container extends React.Component {

  render() {


    return (
      <div>
      	<Map google={this.props.google}/>
      </div>
    )
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyAOBxlw64KDySert353RpCENs9_fSV-6jY",
  version: "3"
})(Container)


class Map extends React.Component {
  componentDidMount() {
    this.loadMap();
  }

   componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
  	const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div ref='map' style ={style}>
        Loading map...
      </div>
    )
  }
}