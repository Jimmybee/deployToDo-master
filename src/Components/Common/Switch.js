import {
  default as React,
  PropTypes } from "react";

import './switch.css'

export default class Switch extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {

    const { input, switchName } = this.props;

    const openEnabledClass = input.value ? "openEnabled" : "";
    const closedEnabledClass = input.value ? "" : "closedEnabled";

    return(
      <div className="switch">
        <label>{switchName}</label>
        <button className={openEnabledClass} onClick={ this.handleTrue.bind(this) }>Yes</button>
        <button className={closedEnabledClass}  onClick={ this.handleFalse.bind(this) }>No</button>
      </div>
    );
  }

  handleTrue(){
    const { handleEnabled, fieldName } = this.props;
    handleEnabled(true, fieldName)
  }

  handleFalse(){
    const { handleEnabled, fieldName } = this.props;
    handleEnabled(false, fieldName)
  }

}
