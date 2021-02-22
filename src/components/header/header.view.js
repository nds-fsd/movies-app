import React, { useState } from 'react';
import styles from './header.module.css';

const Header = ({ handleSearchValue }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles._container}>
      <input name="search" onChange={e => setSearchValue(e.target.value)} />
      <button onClick={() => handleSearchValue(searchValue)}>Search</button>
    </div>
  );
};

export default Header;
