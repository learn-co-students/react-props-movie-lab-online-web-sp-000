import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {debugger
    return movieData.map((movie) => 
    {debugger
      this.props.title = movie.title,
      this.props.IMDBRting = movie.IMDBRating,
      this.props.genres = movie.genres,
      this.props.poster = movie.poster
    }) 
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards().map((movie, index) => {
        return (
          movie
        )})}
      </div>
    )
  }
}
