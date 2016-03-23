import React, { Component, PropTypes } from 'react';

import fetchJSON from "./fetchJSON";
import List from "List";
import consts from "./consts"

import ItemDetails from "ItemDetails"
import HeaderNav from "HeaderNav"

export default class App extends Component {


  static propTypes = {
      children: PropTypes.node,
  };

  static defaultProps = {
      children: {},
  };
 


  render() {
    return (
      <div>
        <HeaderNav />
         {this.props.children}
      </div>
    )
  }
}
