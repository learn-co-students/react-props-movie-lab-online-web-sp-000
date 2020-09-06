import React, { Component } from 'react';

export default class CardFront extends Component { // Below you will see our use of inserting our poster prop into the div.

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}/>
    )
  }
}
