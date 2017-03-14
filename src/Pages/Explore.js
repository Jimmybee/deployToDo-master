// @flow

import React from "react";
import AppventureSearch from '../Components/Explore/AppventureSearch';
import AppventureDoubleCard from '../Components/Explore/AppventureDoubleCard';
import { dispatchFetch, asyncCreate, asyncFetch } from '../api/Backendless.js';

import store from '../store/store';

export default class Explore extends React.Component {
  componentWillMount() {
    // store.dispatch({type:'CHANGE_IT', payload: 'done'})
    // store.dispatch((dispatch) => {
    //      dispatch({type:'CHANGE_IT', payload: 'done'})
    // })
  }

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

    store.dispatch({type:'CHANGE_IT', payload: 'done'})
