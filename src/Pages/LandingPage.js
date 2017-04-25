// @flow

import React from "react";
import ImageComponent from '../Components/Common/ImageComponent';
import IosDownloadBttn from '../Components/Common/IosDownloadBttn';


export default class LandingPage extends React.Component {
  render() {
    // const { query } = this.props.location;
    // const { params } = this.props;
    // const { article } = params;
    // const { date, filter, appventureId } = query;

    // console.log("params")
    // console.log(params)
    // console.log(appventureId)

    return (
      <div>
        <h1 className='text-center'>Appventures</h1>
        <div className='row'>
        <div className="col-sm-4">
          <ImageComponent/>
        </div>
        <div className="col-sm-8">
           <div className="textSnippet">
              <h3> City Adventures </h3>
              <h4> Secret routes. Clever clues. Historical insights. </h4>
              <IosDownloadBttn/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
