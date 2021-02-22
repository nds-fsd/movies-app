import React, { useEffect, useState } from 'react';
import data from '../../data/discover-movie.json';
import Movie from '../movie';
import Modal from '../modal';
import styles from './list.module.css';

const List = ({ searchValue }) => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [openModal, setOpenModal] = useState(false);
  // const { results: movies } = data;
  const movies = data.results;
  const [filteredMovies, setFileteredMovies] = useState(movies);

  console.debug('LIST >>>>', selectedMovie, searchValue);

  useEffect(() => {
    if (searchValue) {
      setFileteredMovies(movies.filter(movie => movie.title.toLowerCase().includes(searchValue)));
    }
  }, [searchValue, movies]);

  return (
    <div className={styles._container}>
      {filteredMovies.map(movie => (
        <Movie key={`movie-${movie.id}`} movie={movie} selectMovie={movie => {
          setOpenModal(true);
          setSelectedMovie(movie);
        }} />
      ))}
      {openModal && <Modal open={openModal} handleCloseModal={() => setOpenModal(false)}>
        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${selectedMovie.poster_path}`} />
        <p>{selectedMovie.title }</p>
      </Modal>}
    </div>
  );
};

export default List;
