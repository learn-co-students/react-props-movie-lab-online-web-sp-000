import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    let data = movieData.map((movie) => {
      var {title, genres, poster, IMDBRating} = movie
      return <MovieCard key={title} title={title} genres={genres} poster={poster} IMDBRating={IMDBRating}/>

    })
    return data
  }
  

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
