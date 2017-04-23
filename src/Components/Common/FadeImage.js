import React, { Component } from 'react';
import ReactDOM from 'react-dom';


var classNames = require('classnames');



export default class FadeImage extends Component {
  componentWillMount() {
    this.setState( {
      loaded: false
    });
  }

  onImageLoad() {
    this.setState({ loaded: true });
  }

  componentDidMount() {
    var imgTag = ReactDOM.findDOMNode(this.refs.img);
    var imgSrc = imgTag.getAttribute('src');
    // You may want to rename the component if the <Image> definition
    // overrides window.Image
    var img = new window.Image();
    img.onload = this.onImageLoad.bind(this);
    img.src = imgSrc;
  }

  render() {
    var { className, ...props } = this.props;
    var imgClasses = 'image';
    var rootClassName = classNames(className, 'image', {
      'image-loaded': this.state.loaded,
    });
    return (
      <img ref="img" {...props} className={rootClassName} />
    );
  }
}

