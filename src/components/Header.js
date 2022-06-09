import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ id }) => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };

  const headingStyle = {
    fontSize: '6rem',
    fontWeight: '600',
    marginBottom: '2rem',
    lineHeight: '1em',
    color: '#ececec',
    textTransform: 'lowercase',
    textAlign: 'center',
  };

  return (
    <header id={id} className={headerStyle}>
      <h1 style={headingStyle}>Todos</h1>
    </header>
  );
};

Header.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Header;
