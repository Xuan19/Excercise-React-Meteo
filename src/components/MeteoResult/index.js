import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { Card, Image } from 'semantic-ui-react';
import './meteoResult.scss';

const meteoResult = ({ meteo, city }) => (
  <div className="meteo">
    <div className="city">{city}</div>
    <div className="meteo-temp">{Math.round(meteo).toFixed(2) }°C</div>
  </div>
);

meteoResult.propTypes = {
  meteo: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

export default meteoResult;
