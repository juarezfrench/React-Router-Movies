import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Movie from './Movie'

const MovieCard = props => {
	let params = { ...props };
	console.log("MovieCard.js -> %cprops:", "color: hotPink", props);
	// params=Array.from(params)
	// const [id, setId] =useState(params.id)

	// const id = props.movie.id;

	console.log("MovieCard.js -> %cprops:", "color: Teal", props);

	let { title, director, metascore, stars} = props.movie;
	console.log(
		"MovieCard.js -> %cprops.movie:",
		"color: lightSeaGreen",
		props.movie
	);

	console.log("MovieCard.js -> %cprops:", "color: Indigo", props);

	return (
		<section className="container">
			<Link to="/movies/${id)">
				<div className="movie-card">
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
				</div>
			</Link>
		</section>
	);
};

export default MovieCard;
