import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import MovieCard from './MovieCard'

const Movie = (props) => {
  const [movie, setMovie] = useState(null);
  const id = props.match.params.id;

  useEffect(() => {

    // const id = {id};
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
          console.log('Movie.js -> %cresponse.data:', 'color: magenta', response.data)
       
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  console.log('Movie.js -> %cmovie:', 'color: coral', movie)
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }
 

  if (!movie) {
 
    return <div>Loading movie information...</div>;
  }

  // const { title, director, metascore, stars } = movie;
  return (
  
    <section className="save-wrapper">
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <div className="movie-director">
          Director: <em>{movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{movie.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {movie.stars.map(star => (
          <MovieCard key={movie.star} className="movie-star">
            {star}
          </MovieCard>
        ))}
      </div>
      <Link to="/" >
      <div className="save-button">Home</div>
      </Link>
    </section>
);
}
  

export default Movie;
