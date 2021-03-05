import { useState } from 'react';
import Header from './components/header';
import List from './components/list';
import GenreFilter from './components/genreFilter';
import styles from './app.module.css';

function App() {
  const [searchValues, setSearchValues] = useState([]);
  const [idGenre, setIdGenre] = useState();

  return (
    <div className={styles._container}>
      <Header setFilteredData={values => setSearchValues(values)} />
      <GenreFilter onSelect={setIdGenre} />
      <List selectedGenre={idGenre} moviesAfterFilter={searchValues}  />
    </div>
  );
}

export default App;
