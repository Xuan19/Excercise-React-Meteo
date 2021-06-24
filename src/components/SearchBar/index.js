import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Segment } from 'semantic-ui-react';

const SearchBar = ({ searchValue, setSearchValue, handleSubmit }) => {
  const manageSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  // une référence permet de repérer un élément du DOM et d'y accéder proprement
  // utiliser la prop spéciale ref sur l'élément
  const refInput = useRef(null);

  // objectif : je veux placer le focus sur l'input après le premier affichage
  // de la page
  useEffect(() => {
    // fonction focus() à appliquer sur l'élément du DOM
    refInput.current.focus();
  }, []);

  return (
    <Segment>
      <Form onSubmit={manageSubmit}>
        <Form.Field>
          <Input
            ref={refInput}
            icon="search"
            placeholder="Tapez une ville"
            iconPosition="left"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  // paramètre : nouvelle valeur de l'input
  setSearchValue: PropTypes.func.isRequired,
  // pas de paramètre
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
