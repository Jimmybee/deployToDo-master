// @flow

import React, { Component } from 'react';

export default class AppventureSummary extends React.Component {

  render() {

    const { item, componentDisplayed } = this.props;
    // var classNames = item.component === componentDisplayed ? "sideNavListBtn selected" : "sideNavListBtn"
    var classNames = item.component === componentDisplayed ? "sideNavListItem selected" : "sideNavListItem"
    // var menuIndicator = item.component === componentDisplayed ? {} : null

    return (
        <li className={classNames}>
          <img src={require('../../images/stepMenuItemIndicator.svg')}/>
          <button className={"sideNavListBtn"} onClick={() => this.showStep(item.component)}>{item.title}</button>
        </li>
    );
  }

   showStep(component){
    const { showStep } = this.props;
    showStep(component)
  }

}
