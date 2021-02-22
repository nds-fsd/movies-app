import React from 'react';
import Rating from './rating';
import styles from './movie.module.css';

const Movie = ({ movie, selectMovie = () => {} }) => {
  return (
    <div className={styles._container} onClick={() => selectMovie(movie)}>
      <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} />
      <p>{movie.title}</p>
      <Rating rating={movie.vote_average} />
    </div>
  );
};

export default Movie;
