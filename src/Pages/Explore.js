// @flow

import React from "react";
import AppventureSearch from '../Components/Explore/AppventureSearch';
import AppventureDoubleCard from '../Components/Explore/AppventureDoubleCard';


export default class Explore extends React.Component {
  render() {
    // const { query } = this.props.location;
    // const { params } = this.props;
    // const { article } = params;
    // const { date, filter } = query;

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
          <AppventureDoubleCard/>
          <div className='col-xs-3'></div>
        </div>
      </div>

    );
  }
}
