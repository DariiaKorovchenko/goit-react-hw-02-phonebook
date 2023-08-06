import React from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

export class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  getContactData = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  formSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      contacts: [],
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <form className={css.main_form} onSubmit={this.formSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className={css.form_input}
            id="name"
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.getContactData}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="tel">Number</label>
          <input
            className={css.form_input}
            id="tel"
            type="tel"
            value={this.state.number}
            name="number"
            onChange={this.getContactData}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
