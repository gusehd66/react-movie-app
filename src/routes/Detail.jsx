import React, { useEffect } from 'react';
import './Detail.css';

function Detail(props) {

  useEffect(() => {
    const { location, history } = props;

    if (location.state === undefined) {
      history.push('/');
    }
  });
  const { state } = props.location;
  if (state) {
    return (
      <div className="movie__details">
        <img src={state.lgPoster} alt={state.title} title={state.title} />
        <div className="movie__details__data">
          <h1 className="movie__details__title">{state.title}</h1>
          <h2 className="movie__details__year">{state.year}</h2>
          <h2 className="movie__details__rating">Rating: <span>{state.rating}</span>/10</h2>
          <h2 className="movie__details__runTime">Runtime: <span>{state.runTime}</span> minute</h2>
          <ul className="movie__details__genres">
            <h2>Genre</h2>
            {state.genres.map((genre, index) => {
              return <li key={index} className="movie__details__genre">{genre}</li>
            })}
          </ul>
          <h2>Summary</h2>
          <p className="movie__details__summary">{state.summary.slice(0, 180)}...</p>
        </div>
      </div >
    )
  } else {
    return null;
  }

}

export default Detail;