import React from 'react';


const Actors = ({stars}) => {
  if (!stars) return '';
  return (
  <>
    <h3>Actors</h3>
    
    {stars.map(star => (
      <div key={star} className="movie-star">
      {star}
      </div>
    ))}
  </>
  )
}

const MovieCard = ({ title, director, metascore, stars }) => {
  return (
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <Actors stars={stars} /> 
      </div>
  )
};

export default MovieCard;
