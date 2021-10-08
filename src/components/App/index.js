// == Import npm
import React, { useState } from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';
import {
  Route, Redirect, Link,
} from 'react-router-dom';
// == Import
import logo from 'src/assets/images/weather3.png';
import SearchBar from 'src/components/SearchBar';
import MeteoResult from 'src/components/meteoResult';
import classNames from 'classnames';
import slugifySearch from 'src/utils';


import './app.scss';
import axios from 'axios';

// == Composant
const App = () => {
  const [search, setSearch] = useState('');
  const [meteo, setMeteo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('');

  const cssClass = classNames('app', { 'app--warm': meteo > 15 });

  const loadmeteo = () => {
    setLoading(true);

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=98b7465353d383f3d0f3bc4a284a48ae`)
      .then((response) => {
        //console.log(response.data.main.temp);
        setMeteo(response.data.main.temp - 273.15);
        setCity(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // on masque le loader
        setLoading(false);
      });
  };
//
  return (
    <div className={cssClass}>
      <header className="logo">
        <Link to="/"><img className="logo-img" src={logo} alt="" /></Link>
      </header>
      <Route
        path="/"
        //exact
      >
        <SearchBar
          searchValue={search}
          setSearchValue={setSearch}
          handleSubmit={loadmeteo}
        />
      </Route>
      {loading && <Redirect to={`/meteo/${slugifySearch(search)}`} />}
      <Route
        path="/meteo/:slug"
      >
        <MeteoResult meteo={meteo} city={city}/>
      </Route>

      {loading && (
      <Dimmer active>
        <Loader size="small" />
      </Dimmer>
      )}
    </div>
  );
};

// == Export
export default App;
