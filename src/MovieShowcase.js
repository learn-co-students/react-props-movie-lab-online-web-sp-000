import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(card => {
      return (
        <li>
          <MovieCard title={card.title} IMDBRating={card.IMDBRating} genres={card.genres} poster={card.poster} />
        </li>
      )
  })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
