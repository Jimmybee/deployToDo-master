// @flow

import React, { Component } from 'react';

export default class AppventureSummary extends React.Component {

  render() {

    const { item, componentDisplayed } = this.props;
    var classNames = item.component === componentDisplayed ? "sideNavListBtn selected" : "sideNavListBtn"

    return (
        <li className="sideNavListItem">
          <button className={classNames} onClick={() => this.showStep(item.component)}>{item.title}</button>
        </li>
    );
  }

   showStep(component){
    const { showStep } = this.props;
    showStep(component)
  }

}
