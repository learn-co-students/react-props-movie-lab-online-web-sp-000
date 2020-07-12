import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((item, index) => <MovieCard key={index} {...item}/>)
    
    ////WHY spread operator here? "The spread operator lets you essentially drop an array in and get its values.
    //Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments 
    //(for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places 
    //where zero or more key-value pairs (for object literals) are expected.
    //" How could I write without?
    //We want to take this data and, for every object inside, 
    //render a MovieCard component, passing the object data in as props.
    //component:MovieCard 
    //props:key={index}
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
//*1-Your job is to update it so that it passes props from parent to children components correctly.
// In addition, you will implement default props so that 
//'bad/missing data' is properly handled - preventing our user interface from blowing up our visitors' computers


//*2-The MovieShowcase component, then, has access to movieData. We want to take this data and, 
//for every object inside, render a MovieCard component, passing the object data in as props.
// Don't forget to pass all 4 props.


