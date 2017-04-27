// @flow

import './explore.css';

import React from "react";
import { connect } from 'react-redux'
import LazyLoad from 'react-lazy-load';

import Search from './Components/Search';
import AppventureCard from './Components/AppventureCard';
import { asyncFetch } from '../../api/Backendless.js';

@connect((store) => {
  return {
    appventures: store.appventures
  };
})

export default class Explore extends React.Component {

  componentWillMount() {
    asyncFetch()
  }

  renderSpinner() {
     return (
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
      )
  }

  renderPage(appventures) {
     var showPage = {
      marginTop: 10,
      opacity: 1
    }

    const mappedAppventures = appventures.map(appventure => 
      <div 
      className='col-sm-6 maxWidth' 
      key={appventure.objectId}>
          <AppventureCard 
          appventure={appventure}
          />
      </div>)

    const fixedMappedAppventures = function(mappedAppventures, iteration, inserts) {
      var clearfix = <div className="clearfix" key={iteration}></div>
      if (iteration === mappedAppventures.length) {
        return mappedAppventures
      } else {
        if (iteration%2 === 0) {
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
        <div className='row' style={showPage}>
          <div className='col-sm-3'>
            <Search/>
          </div>
          <div className='col-sm-9'>
              {calcMappedAppventures}
          </div>
        </div>
      </div>
    )
  }

  render() {

    const textColor = {
      color: '#E45663'
    };

    const appventures = this.props.appventures
    const content = (!appventures.length) ? this.renderSpinner() : this.renderPage(appventures);

    return (
      <div>
        <div className='row'>
          <h1 className='col-xs-12'><span style={textColor}>Explore</span> our appventures and discover fun trails and adventures.</h1>
        </div>
        {content}
      </div>

    );
  }

}
