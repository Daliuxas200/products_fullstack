import React from 'react';
import Pagination from './Pagination';
import NavSelect from './NavSelect';

const Navigation = ({
  page,
  maxPages,
  loading,
  changePage,
  changeSearchParam,
}) => {
  return (
    <nav className="navigation">
      <Pagination
        page={page}
        maxPages={maxPages}
        loading={loading}
        changePage={changePage}
      />
      <div className="navigation__group">
        <NavSelect
          changeSearchParam={changeSearchParam}
          name={'sort'}
          options={[
            { value: 'price', formatted: 'Price descending' },
            { value: '-price', formatted: 'Price ascending' },
          ]}
        />
        <NavSelect
          changeSearchParam={changeSearchParam}
          name={'limit'}
          options={[
            { value: '20', formatted: '20' },
            { value: '50', formatted: '50' },
            { value: '100', formatted: '100' },
          ]}
        />
      </div>
    </nav>
  );
};

export default Navigation;
