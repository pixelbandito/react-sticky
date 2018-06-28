import React from 'react';

const PlaceholderP = (props) => (
  <p
    {...props}
    style={{
      height: '300px',
      backgroundColor: 'pink',
      margin: '10px 0',
      padding: '20px',
      ...props.style,
    }}
  />
);

export default PlaceholderP;
