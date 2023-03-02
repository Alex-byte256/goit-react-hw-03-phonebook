import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css'


class ContactList extends Component{


  render() {
    return(
      <ul className={css.list}>
        {this.props.visContacts.map(el => (
          <li className={css.item} key={el.id}>{el.name} - {el.number}
          <button type='button' onClick={()=> this.props.onDeleteContacts(el.id)}>Delete</button></li>
        ))}
      </ul>
    )
  }

}

ContactList.propTypes = {
  visContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
  }))
}


export default ContactList;
