import React, { useEffect, useState } from 'react';
import { request } from '../../utils/request.utils';

const GenreFilter = ({ onSelect }) => {
  const [genres, setGenres] = useState();

  useEffect(() => {
    request({ url: 'genre/movie/list', onSuccess: data => setGenres(data.genres)});
  }, []);
  return genres ? (
    <select onChange={event => onSelect(event.target.value)}>
      {genres.map(genre => {
        return (<option value={genre.id}>{genre.name}</option>);
      })}
    </select>
  ) : <p>Loading</p>;
};

export default GenreFilter;
