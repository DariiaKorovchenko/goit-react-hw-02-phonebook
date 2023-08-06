import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, filterData }) => {
  return (
    <div className={css.filter_form}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        className={css.filter_input}
        type="text"
        id="filter"
        value={value}
        onChange={filterData}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  filterData: PropTypes.func.isRequired,
};
