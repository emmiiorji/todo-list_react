import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ id }) => <header id={id}><h1>Todos</h1></header>;

Header.propTypes = {
  id: PropTypes.string.isRequired,
};
