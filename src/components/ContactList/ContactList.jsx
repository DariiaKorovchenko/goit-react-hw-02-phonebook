import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            name={name}
            number={number}
            id={id}
            key={id}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
