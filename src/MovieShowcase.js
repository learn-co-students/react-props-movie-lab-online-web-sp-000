import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(movie => <MovieCard title={movie.title}
                                   MovieCard IMDBRating={movie.IMDBRating}
                                   MovieCard genres={movie.genres}
                                   MovieCard poster={movie.poster}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

// The MovieShowcase component, then, has access to movieData. We want to take this data and, for every object inside, render a MovieCard component, passing the object data in as props. Don't forget to pass all 4 props
//
// We are dynamically generating an array of JSX to render inside our <div> tag.
//
// You can do the same with movieData: map over the data, passing in values from each object as props. See the documentation here for additional information.
