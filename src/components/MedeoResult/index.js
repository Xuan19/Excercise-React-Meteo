import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { Card, Image } from 'semantic-ui-react';
import './medeoResult.scss';

const MedeoResult = ({ medeo, city }) => (
  <div className="temp">
    <h1>{city}</h1>
    {medeo}
  </div>
);

MedeoResult.propTypes = {
  medeo: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

export default MedeoResult;
