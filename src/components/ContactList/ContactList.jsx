import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.contact_item}>
            {name}: {number}
            <button
              type="button"
              className={css.delete_btn}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
