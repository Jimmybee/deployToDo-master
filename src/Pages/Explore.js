// @flow

import React from "react";
import AppventureSearch from '../Components/Explore/AppventureSearch';
import AppventureDoubleCard from '../Components/Explore/AppventureDoubleCard';
import { asyncFetch } from '../api/Backendless.js';
import { connect } from 'react-redux'

@connect((store) => {
  return {
    appventures: store.appventures
  };
})

export default class Explore extends React.Component {
  componentWillMount() {
    asyncFetch()
  }

  render() {
    // const { query } = this.props.location;
    // const { params } = this.props;
    // const { article } = params;
    // const { date, filter } = query;
    const appventures = this.props.appventures

    if (!appventures.length) {  
        return <h1>No Appventures</h1>
     }

    const mappedAppventures = appventures.map(appventure => <AppventureDoubleCard appventure={appventure}/>)

    return (
      <div>
        <div className='row'>
          <div className='col-xs-1'></div>
          <h1 className='col-xs-11'>Explore</h1>
        </div>
        <AppventureSearch/>
        <div className='row'>
          <AppventureDoubleCard/>
          <div className='col-xs-3'></div>
        </div>
        <div className='row'>
          {mappedAppventures[0]}
          <div className='col-xs-3'></div>
        </div>
      </div>

    );
  }
}

