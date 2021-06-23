// == Import npm
import React, { useState } from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

// == Import
import SearchBar from 'src/components/SearchBar';
// import MedeoResult from 'src/components/MedeoResult';

import './app.scss';
import axios from 'axios';

// == Composant
const App = () => {
  const [search, setSearch] = useState('');
  const [medeo, setMedeo] = useState('');
  const [loading, setLoading] = useState(false);

  const loadMedeo = () => {
    setLoading(true);

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=98b7465353d383f3d0f3bc4a284a48ae`)
      .then((response) => {
        console.log(response.data.main.temp);
        setMedeo(response.data.main.temp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <SearchBar
        searchValue={search}
        setSearchValue={setSearch}
        handleSubmit={loadMedeo}
      />
      {loading && (
      <Dimmer active>
        <Loader size="large" />
      </Dimmer>
      )}
    </div>
  );
};

// == Export
export default App;
