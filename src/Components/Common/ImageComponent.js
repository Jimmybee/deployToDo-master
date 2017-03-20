// @flow

import React, { Component } from 'react';

// const imageStyle = {
//   maxWidth: '100%',
//   height: 'auto'
// };


class ImageComponent extends Component {

  render() {
           return (
        	 <div><img src={require('./screenAppventures.png')} alt="boohoo" className="img-responsive" /></div>
    );
  }
}


export default ImageComponent;