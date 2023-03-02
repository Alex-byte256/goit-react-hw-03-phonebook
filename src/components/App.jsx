import ContactForm from './PhoneBook/ContactForm ';
import { Component } from 'react';
import { nanoid } from 'nanoid'
import Filter from './PhoneBook/Filter/Filter';
import ContactList from './ContactList/ContactList';



class  App extends Component{
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if(parsedContacts){
      this.setState({contacts: parsedContacts});
    }

  }

  componentDidUpdate(prevProps, prevState) {

    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem("contacts",JSON.stringify(this.state.contacts))
    }
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const index = this.state.contacts.find(item => item.name === event.target.name.value);
    if (index) {
      alert("Контакт з таким іменем уже присутній")
      return;
    }
    this.setState({
      contacts: [...this.state.contacts,
        { name:event.target.name.value,number:event.target.number.value, id: nanoid(10) }
      ]});

  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  deleteContact = (contactId) => {
      this.setState(prevState =>({
        contacts: prevState.contacts.filter(el => el.id !== contactId),
      }))
  }


  render() {

    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(el=>el.name.toLowerCase().includes(normalizedFilter))

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit}  />
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <h2>Contacts </h2>
        <ContactList visContacts={visibleContacts} onDeleteContacts={this.deleteContact}/>
      </div>
    );
  }
};



export default App;
