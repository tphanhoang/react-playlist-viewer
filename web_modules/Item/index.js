import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  propTypes: {
  	name: PropTypes.string
  }
  render() {
    return (
      <div className="item">
        {this.props.name}
      </div>
    );
  }
}
