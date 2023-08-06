import React from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  getContactListData = data => {
    const currentContact = {
      name: data.name,
      number: data.number,
      id: nanoid(),
    };
    this.setState(prevState => {
      if (prevState.contacts.length === 0) {
        return {
          contacts: [currentContact],
        };
      } else {
        const including = prevState.contacts.some(contact =>
          contact.name.toLowerCase().includes(data.name.toLowerCase())
        );
        if (including) {
          alert(`${data.name} is already in contacts.`);
          return {
            contacts: [...prevState.contacts],
          };
        } else {
          return {
            contacts: [...prevState.contacts, currentContact],
          };
        }
      }
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  visibleContacts() {
    const visibleContacts = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    return visibleContacts;
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.getContactListData} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} filterData={this.changeFilter} />

        {this.state.filter === null ? (
          <ContactList
            contacts={this.state.contacts}
            delete={this.deleteContact}
          />
        ) : (
          <ContactList
            contacts={this.visibleContacts()}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
