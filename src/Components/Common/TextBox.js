//@flow

//Requires dispatchValue action to update a state or store 
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


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
    const { placeholder } = this.props;
    return (
      <div className="nav-search">
        <i className="icon ion-search" />
        <input
          ref="query"
          className="nav-search-input"
          placeholder={placeholder}
          onKeyPress={this.handleOnKeyPress}
          type="text"
        />
      </div>
    );
  }
}

TextBox.propTypes = propTypes;

export default TextBox;
