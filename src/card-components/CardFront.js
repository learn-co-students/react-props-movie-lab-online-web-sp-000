import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    const img = `${this.props.poster}`;

    console.log(img);
    return (
      <div className="card-front" style={{backgroundImage: `url(${img})`}}>
      </div>
    )
  }
}
