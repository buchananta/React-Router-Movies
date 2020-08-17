import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const url = useRouteMatch();
  console.log(url);
  return (
    <Link to={`movies/${movie.id}`} >
    <MovieCard {...movie} />
    </Link>
  );
}

export default MovieList;
