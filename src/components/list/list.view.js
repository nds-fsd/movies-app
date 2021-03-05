import React, { useEffect, useState } from 'react';
import Movie from '../movie';
import MovieModal from '../movieModal';
import styles from './list.module.css';
import { request } from '../../utils/request.utils';

const List = ({ moviesAfterFilter, selectedGenre }) => {
  const [movies, setMovies] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [filteredMovies, setFileteredMovies] = useState();

  useEffect(() => {
    request({ url: 'discover/movie', onSuccess: setMovies });
  }, []);

  useEffect(() => {
    if (movies) {
      setFileteredMovies(movies.results);
    }
  }, [movies]);

  useEffect(() => {
    if (moviesAfterFilter) {
      setFileteredMovies(moviesAfterFilter.results);
    }
  }, [moviesAfterFilter]);

  useEffect(() => {
    if (selectedGenre) {
      setFileteredMovies(movies.results.filter(movie => {
        console.debug(movie.genre_ids, selectedGenre);
        return movie.genre_ids.includes(parseInt(selectedGenre, 10));
      }));
    }
  }, [selectedGenre, movies]);

  return filteredMovies ? (
    <div className={styles._container}>
      {filteredMovies.map(movie => (
        <Movie key={`movie-${movie.id}`} movie={movie} selectMovie={movie => {
          setOpenModal(true);
          setSelectedMovie(movie.id);
        }} />
      ))}
      {openModal && <MovieModal openModal idMovie={selectedMovie} handleClose={() => setOpenModal(false)} />}
    </div>
  ) : <p>Loading</p>;
};

export default List;
