import React from 'react';

const AlertPopup = () => {
  const alertStyle = {
    display: 'flex',
    background: 'white',
    flexDirection: 'column',
    height: '200px',
    width: '300px',
  };

  return (
    <div className="popup">
      <div style={alertStyle}>
        <p>Please enter item</p>
      </div>
    </div>
  );
};

export default AlertPopup;
