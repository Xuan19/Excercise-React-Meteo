import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Segment } from 'semantic-ui-react';

const SearchBar = ({ searchValue, setSearchValue, handleSubmit }) => {
  const manageSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  // https://reactjs.org/docs/hooks-reference.html#useref
  // une référence permet de repérer un élément du DOM et d'y accéder proprement
  // utiliser la prop spéciale ref sur l'élément
  const refInput = useRef(null);

  // objectif : je veux placer le focus sur l'input après le premier affichage
  // de la page
  useEffect(() => {
    // console.log('on va placer le focus sur l\'input');
    // console.log(refInput.current);

    // fonction focus() à appliquer sur l'élément du DOM
    // on pourrait récupérer l'input avec getElementById... mais pas bien, on
    // court-circuiterait le DOM virtuel de React => utiliser une référence
    // une_reference.current permet d'accéder à l'élément référencé (valable
    // seulement après le premier rendu du composant)
    refInput.current.focus();
  }, []);

  return (
    <Segment>
      <Form onSubmit={manageSubmit}>
        <Form.Field>
          <Input
            ref={refInput}
            icon="search"
            placeholder="Rechercher..."
            iconPosition="left"
            value={searchValue}
            onChange={(event) => {
              // console.log(event.target.value);
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
