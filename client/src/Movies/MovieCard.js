import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import Movie from './Movie'



const MovieCard = props => {
console.log('MovieCard.js -> %cprops:', 'color: Indigo', props)
let  params  = {...props}
params=Array.from(params)
const [id, setId] =useState(params.id)
  
  // const id = props.match.params.id;


 console.log('MovieCard.js -> %cprops:', 'color: Teal', props)

 let {title,director, metascore,stars} = props.movie
 console.log('MovieCard.js -> %cprops.movie:', 'color: lightSeaGreen', props.movie)


  return(
    <section className = "container">
      <div className="movie-card">
    <Link to="/movies/${id)">

  <h2>{title} </h2>
  <div className="movie-director">
    Director: <em>{director}</em>
  </div>
  <div className="movie-metascore">
    Metascore: <strong>{metascore}</strong>
  </div>
  <h3>Actors</h3>
  <div className="movie-stars">
    <strong>{stars}</strong>
  </div>

</Link>
</div>

</section>
     
)

};

export default MovieCard;
