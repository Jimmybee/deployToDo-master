import React from 'react'
import ReactDOM from 'react-dom'

import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import './autocomplete.css';

export class Container extends React.Component {

  render() {

    const { placeFound, initialLocation } = this.props
    return (
      <div>
        <MapWrapper 
          style={{width: '1170px', height: '400px', position: 'relative', padding: '20px'}}
          google={this.props.google} 
          placeFound={placeFound} 
          initialLocation={initialLocation}/>
      </div>
    )
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyD9SZOqhWyFHdJg1vtyJhLDY5YJUe_dl_0",
  version: "3"
})(Container)

const Contents = React.createClass({
  getInitialState() {
    return {
      place: null,
      position: null
    }
  },

  onSubmit: function(e) {
    e.preventDefault();
  },

  componentDidMount: function() {
    this.renderAutoComplete();
  },

  componentDidUpdate(prevProps) {
    const {google, map} = this.props;
    if (map !== prevProps.map) {
      this.renderAutoComplete();
    }


  },

  renderAutoComplete: function() {
    const {google, map} = this.props;

    if (!google || !map) return;

    const aref = this.refs.autocomplete;
    const node = ReactDOM.findDOMNode(aref);

    var autocomplete = new google.maps.places.Autocomplete(node);
    autocomplete.bindTo('bounds', map);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      this.props.placeFound(place.geometry.location);

      this.setState({
        place: place,
        position: place.geometry.location
      })
    })

  },

  mapClicked: function(mapProps, map, clickEvent) {
      this.setState({
        place: null,
        position: clickEvent.latLng
      })
      this.props.placeFound(clickEvent.latLng);
  },

  onReady: function() {
    const {google, initialLocation} = this.props;
    if (typeof initialLocation != 'undefined') {
      var myLatLng = new google.maps.LatLng(initialLocation.latitude, initialLocation.longitude)
      this.setState({
          place: null,
          position: myLatLng
      })
    }
  },

            // <div>Lat: {position && position.lat()}</div>
            // <div>Lng: {position && position.lng()}</div>
  render: function() {
    const props = this.props;
    const {position} = this.state;


    return (
      <div className="flexWrapper">
        <div className="left">
          <form onSubmit={this.onSubmit}>
            <img className="flexWrapper" src={require('../../images/SearchText.svg')}/>
            <input
              ref='autocomplete'
              type="text"
              placeholder="Enter a location" />
          </form>
        </div>
        <div className="right">
          <Map {...props}
              ref='map'
              onClick={this.mapClicked}
              onReady={this.onReady}
              style={{width: '50%', height: '400px', position: 'relative', padding: '20px'}}
              center={this.state.position}
              // centerAroundCurrentLocation={this.props.appventure.location === null}
              >
              {position !== null ?  <Marker position={this.state.position} /> : null}
          </Map>
        </div>
      </div>
    )
  }
})

const MapWrapper = React.createClass({
  render: function() {
    const props = this.props;
    const {google, placeFound} = this.props;

    return (
      <div>
      <Map google={google}
          className=""
          visible={false}
          style={{width: '50%', height: '400px', position: 'relative', padding: '20px'}}
          placeFound={placeFound}>
            <Contents {...props} />
      </Map>
      </div>
    );
  }
})

