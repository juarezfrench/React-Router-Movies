import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import Movie from './Movie'



const MovieCard = props => {
console.log('MovieCard.js -> %cprops:', 'color: Indigo', props)

  
  // const id = props.match.params.id;


 console.log('MovieCard.js -> %cprops:', 'color: Teal', props)

 let {title,director, metascore,stars} = props.movie


  return(
    <section className = "container">
      <div className="movie-card">
    <Link to="/movies/${id)">

  <h2>{props.movie.title}</h2>
  <div className="movie-director">
    Director: <em>{props.movie.director}</em>
  </div>
  <div className="movie-metascore">
    Metascore: <strong>{props.movie.metascore}</strong>
  </div>
  <h3>Actors</h3>
  <div className="movie-stars">
    <strong>{props.movie.stars}</strong>
  </div>

</Link>
</div>

</section>
     
)

};

export default MovieCard;
