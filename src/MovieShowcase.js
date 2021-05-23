import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return (
      movieData.map((data, index) => {
        return (
          <div key={index}>
            <MovieCard poster={data.poster} title={data.title} genres={data.genres} IMDBRating={data.IMDBRating} />
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
