import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <li className={css.contact_item}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.delete_btn}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
