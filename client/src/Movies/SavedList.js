import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';


const SavedList = props => {
  const history = useHistory();
  //why I can't just call useHistory().push('/') is unclear
  //and I'm still forgetting events need to be callbacks :/
  const routeToHome = () => history.push('/');  
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink 
          to={`/movies/${movie.id}`}
          key={movie.id}
          className="saved-movie">{movie.title}</NavLink>
      ))}
      <div onClick={routeToHome} className="home-button">Home</div>
    </div>
  );
}
export default SavedList;
