import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(item => <MovieCard poster={item.poster} title={item.title} IMDBRating={item.IMDBRating} genres={item.genres}/>)
    // return movieData.map((info, id) => <MovieCard key={id} {...info}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
