import Header from './components/header';
import List from './components/list';
import styles from './app.module.css';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className={styles._container}>
      <Header handleSearchValue={value => setSearchValue(value)} />
      <List searchValue={searchValue} />
    </div>
  );
}

export default App;
