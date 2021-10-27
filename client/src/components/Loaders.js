import React from 'react';

const Loaders = ({ count }) => {
  const loaders = [];
  for (let x = 0; x < count; x++) {
    loaders.push(<li className="loader" key={x} />);
  }
  return <>{loaders}</>;
};

export default Loaders;
