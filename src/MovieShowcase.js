import React from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

class MovieShowcase extends React.Component {

  generateMovieCards = (movieData) => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movieObj, i) => <MovieCard key = {i} poster={movieObj.poster} title={movieObj.title} IMDBRating = {movieObj.IMDBRating} genres={movieObj.genres}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards(movieData)}
      </div>
    )
  }
}

export default MovieShowcase 
