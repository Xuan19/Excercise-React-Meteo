// == Import npm
import React, { useState } from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';
import { Route, Switch, Redirect } from 'react-router-dom';
// == Import
import SearchBar from 'src/components/SearchBar';
import MedeoResult from 'src/components/MedeoResult';

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
      })
      .finally(() => {
        // on masque le loader
        setLoading(false);
      });
  };

  return (
    <div className="app">
      <Route
        path="/"
        exact
      >
        <SearchBar
          searchValue={search}
          setSearchValue={setSearch}
          handleSubmit={loadMedeo}
        />
      </Route>
      {loading && <Redirect to={`/medeo/${search}`} />}
      <Route
        path="/medeo/:slug"
      >
        <MedeoResult medeo={medeo} search={search} />
      </Route>

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
