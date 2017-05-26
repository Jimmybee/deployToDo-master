// @flow

import React, { Component } from 'react';

export default class AppventureSummary extends React.Component {

  render() {

    const { item, componentDisplayed } = this.props;
    // var classNames = item.component === componentDisplayed ? "sideNavListBtn selected" : "sideNavListBtn"
    var classNames = item.component === componentDisplayed ? "sideNavListItem selected" : "sideNavListItem"

    return (
        <li className={classNames}>
          <button className={"sideNavListBtn"} onClick={() => this.showStep(item.component)}>{item.title}</button>
        </li>
    );
  }

   showStep(component){
    const { showStep } = this.props;
    showStep(component)
  }

}
