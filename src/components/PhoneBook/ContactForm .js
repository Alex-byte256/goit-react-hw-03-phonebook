import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

class ContactForm extends Component{

      state = {
        name: '',
        number: ''
      }

  handleOnChange = (e) => {
    this.setState( ({
      [e.target.name]: e.target.value
    }))
  }

  handleOnSubmit = (e) => {
    this.props.onSubmit(e)
    this.setState({name:'' , number:''})
  }


      render() {
        return(
          <>
            <form className={css.form} onSubmit={this.handleOnSubmit}  >
              <input
                value={this.state.name }
                onChange={this.handleOnChange}
                type="text"
                name="name"
                placeholder="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <input
                value={this.state.number }
                onChange={this.handleOnChange}
                type="tel"
                name="number"
                placeholder="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
             <button type={'submit'}>Добавити контакт</button>
            </form>
          </>
        )
      }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func
}

export default ContactForm;
