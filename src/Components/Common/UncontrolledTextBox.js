//@flow

//Requires dispatchValue action to update a state or store 
import React, { Component, PropTypes } from 'react';


const propTypes = {
  dispatchValue: PropTypes.func.isRequired,
};

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
  }

  handleOnKeyPress(e) {
    if (e.charCode === 13) {
      const { dispatchValue } = this.props;
      const value = e.currentTarget.value.trim();
      if (value !== '') {
        dispatchValue({ value });
      }
    }
  }

  render() {
    const { placeholder, defaultValue } = this.props;
    console.log("props:", this.props)
    return (
      <div className="nav-search">
        <i className="icon ion-search" />
        <input
          ref="query"
          className="nav-search-input"
          placeholder={placeholder}
          onKeyPress={this.handleOnKeyPress}
          value={defaultValue.value}
          type="text"
        />
      </div>
    );
  }
}

TextBox.propTypes = propTypes;

export default TextBox;
