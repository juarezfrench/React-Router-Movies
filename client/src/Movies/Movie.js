import React, { useState, useEffect } from 'react';
import axios from 'axios';
 import { Link } from 'react-router-dom';
import MovieCard  from './MovieCard.js';

const Movie = (props) => {

  const [movie, setMovie] = useState(null);
  console.log('Movie.js -> %cProps:', 'color: violet', props)

  const id = props.match.params.id;

  console.log('Movie.js -> %cid:', 'color: blue', id)
  // change ^^^ that line and grab the id from the URL
  // You will NEED to add a dependency array to this effect hook
  useEffect(() => {
  
        axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  // return (
  //   <MovieCard movie={movie} {...props} />
  // [title, director, metascore,stars] = movie
  
  return (  // [title, director, metascore,stars] = movie
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
            {star} </MovieCard>
              ))}
             <Link to="/">
   
             <button Name="save-button">Home</button>
          </Link>
     
     
     
       </div>
      </section>  
 
  );
 
}

export default Movie;