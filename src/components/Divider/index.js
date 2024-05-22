import React from 'react'

const Seperator = ({ color }) => {
  return (
    <hr style={{ border: 0, borderTop: `2px solid ${color}`, width: '40px' }} />
  );
};

export default Seperator