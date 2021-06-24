import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { Card, Image } from 'semantic-ui-react';
import './medeoResult.scss';

const MedeoResult = ({ medeo, city }) => (
  <div className="medeo">
    <div className="city">{city}</div>
    <div className="medeo-temp">{Math.round(medeo).toFixed(2) }°C</div>
  </div>
);

MedeoResult.propTypes = {
  medeo: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

export default MedeoResult;
