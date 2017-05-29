// @flow

import React, { Component } from 'react';

export default class MenuItem extends React.Component {

  render() {

    const { item, componentDisplayed } = this.props;
    // var classNames = item.component === componentDisplayed ? "sideNavListBtn selected" : "sideNavListBtn"
    var classNames = item.component === componentDisplayed ? "selected" : ""
    // var menuIndicator = item.component === componentDisplayed ? {} : null

    console.log(item.component, componentDisplayed, classNames)
    return (
        <li className={classNames}>
          <img className={classNames} src={require('../../images/stepMenuItemIndicator.svg')}/>
          <button className={"sideNavListBtn"} onClick={() => this.showStep(item.component)}>{item.title}</button>
        </li>
    );
  }

   showStep(component){
    const { showStep } = this.props;
    showStep(component)
  }

}

//          <i className="fa fa-check"></i>
