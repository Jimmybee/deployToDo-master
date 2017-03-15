// @flow

import React from "react";
import AppventureSearch from '../Components/Explore/AppventureSearch';
import AppventureDoubleCard from '../Components/Explore/AppventureDoubleCard';
import AppventureCard from '../Components/Explore/AppventureCard';
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
    var marginTop = {
      marginTop: 10
    }

   var greenOutline = {
    outlineStyle: 'solid',
    outlineWidth: 1,
    outlineColor: 'green'
  }

    // const { query } = this.props.location;
    // const { params } = this.props;
    // const { article } = params;
    // const { date, filter } = query;
    const appventures = this.props.appventures

    if (!appventures.length) {  
        return <h1>No Appventures</h1>
     }

    const mappedAppventures = appventures.map(appventure => <div className='col-sm-6 maxWidth'><AppventureCard appventure={appventure}/></div>)
    const clearfix = <div className="clearfix"></div>
    const mappedAppventuresLength = mappedAppventures.length

    const fixedMappedAppventures = function(mappedAppventures, iteration, inserts) {
      console.log(iteration, '/', mappedAppventuresLength)

      if (iteration == mappedAppventures.length) {
        return mappedAppventures
      } else {
        if (iteration%2 == 0) {
          console.log('mod 0')
          mappedAppventures.splice(iteration + inserts, 0, clearfix)
          return fixedMappedAppventures(mappedAppventures, iteration + 1, inserts + 1)
        } else {
          return fixedMappedAppventures(mappedAppventures, iteration + 1, inserts)
        }
      }
    }

    const calcMappedAppventures = fixedMappedAppventures(mappedAppventures, 1, 0)

    return (
      <div>
        <div className='row'>
          <h1 className='col-xs-12'>Explore</h1>
        </div>
        <AppventureSearch/>
        <div className='row' style={marginTop}>
          <div className='col-sm-9' style={greenOutline}>
              {calcMappedAppventures}
          </div>
          <div className='col-sm-3' style={greenOutline}></div>
        </div>
      </div>

    );
  }
}

