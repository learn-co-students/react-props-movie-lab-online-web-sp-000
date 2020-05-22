import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
//style={{backgroundImage: `url(${prop})`}} //! should this have remained 'prop', as well as the one above?
