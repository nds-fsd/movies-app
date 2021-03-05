import React, { useEffect, useState } from 'react';
import { request } from '../../utils/request.utils';
import Modal from '../modal';

const MovieModal = ({ openModal, handleClose, idMovie }) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    if (idMovie) {
      request({ url: `movie/${idMovie}`, onSuccess: setMovie});
    }
  }, [idMovie]);

  return (
    <Modal open={openModal} handleCloseModal={handleClose}>
      {movie ? (
        <>
          <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} />
          <p>{movie.title}</p>
        </>
      ) : <p>Loading</p>}
    </Modal>
  );
};

export default MovieModal;
