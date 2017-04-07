import React from 'react'
import ReactDOM from 'react-dom'

import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import styles from './autocomplete.css'


export class Container extends React.Component {

  render() {
    
   const style = {
      width: '50vw',
      height: '50vh'
    }

    return (
      <div>
        <MapWrapper google={this.props.google}/>
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

      this.setState({
        place: place,
        position: place.geometry.location
      })
    })

  },

  mapClicked: function(mapProps, map, clickEvent) {
      console.log(mapProps)
      console.log(map)
      console.log(clickEvent)
      this.setState({
        place: null,
        position: clickEvent.latLng
      })

  },

  onReady: function() {
    console.log("ready")
  },

  render: function() {
    const props = this.props;
    const {position} = this.state;

    const center = new this.props.google.maps.LatLng(51, 0)
    {console.log(this.state.position)}

    return (
      <div className={styles.flexWrapper}>
        <div className={styles.left}>
          <form onSubmit={this.onSubmit}>
            <input
              ref='autocomplete'
              type="text"
              placeholder="Enter a location" />
            <input
              className={styles.button}
              type='submit'
              value='Go' />
          </form>
          <div>
            <div>Lat: {position && position.lat()}</div>
            <div>Lng: {position && position.lng()}</div>
          </div>
        </div>
        <div className={styles.right}>
          <Map {...props}
              ref='map'
              onClick={this.mapClicked}
              onReady={this.onReady}
              containerStyle={{
                position: 'relative',
                height: '50vh',
                width: '50%'
              }}
              center={this.state.position}
              centerAroundCurrentLocation={true}>
              <Marker position={this.state.position} />
          </Map>
        </div>
      </div>
    )
  }
})

const MapWrapper = React.createClass({
  render: function() {
    const props = this.props;
    const {google} = this.props;

    return ( 
            <Contents {...props} />
    );
  }
})

