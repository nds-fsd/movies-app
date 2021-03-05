import React, { useEffect, useState } from 'react';
import { request } from '../../utils/request.utils';
import styles from './header.module.css';

const Header = ({ setFilteredData }) => {
  const [searchValue, setSearchValue] = useState('');

  const search = () => {
    if (searchValue) {
      request({
        url: `search/movie`,
        params: `query=${searchValue}`,
        onSuccess: data => setFilteredData(data),
      });
    }
  };

  return (
    <div className={styles._container}>
      <input name="search" onChange={e => setSearchValue(e.target.value)} />
      <button onClick={() => search(searchValue)}>Search</button>
    </div>
  );
};

export default Header;
