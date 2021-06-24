/*
permet d'obtenir un slug à partir d'une chaîne de caractères => chaîne de
caractères simplifiée, qui passera bien comme URL (notamment remplacement des
espaces par des tirets)
*/
import slugify from 'slugify';

const slugifySearch = (title) => (
  slugify(title, {
    lower: true,
  })
);

export default slugifySearch;
