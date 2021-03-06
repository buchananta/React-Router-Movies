import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import MovieCard from './MovieCard';


const Movie = (props) => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const {addToSavedList} = props;
  useEffect(() => {
    //const id = id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          console.log(response.data);
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = evt => {
    addToSavedList(id); 
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard {...movie} />
      <div onClick={saveMovie} className="save-button">Save</div>
    </div>
  );
}

export default Movie;
