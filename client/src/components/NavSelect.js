import React from 'react';

const NavSelect = ({ name, options, changeSearchParam }) => {
  return (
    <select
      name={name}
      id={name}
      onChange={changeSearchParam}
      className="select"
    >
      {options.map((opt) => {
        return (
          <option key={opt.value} value={opt.value}>
            {opt.formatted}
          </option>
        );
      })}
    </select>
  );
};

export default NavSelect;
