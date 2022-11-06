import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Wrapper } from './App.styled';

export const App = () => {
  const defaultValue = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState([...defaultValue]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));

    if (storageContacts) {
      setContacts(storageContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    // console.log(contacts);
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findContact) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts(contact, ...contacts);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.contacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Wrapper>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={contacts}
        visibleContacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Wrapper>
  );
};

// const componentDidMount =() => {
//   const storageContacts = JSON.parse(localStorage.getItem('contacts'));

//   if (storageContacts) {
//     this.setState({ contacts: storageContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   const { contacts } = this.state;
//   if (contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//     console.log(contacts);
//   }
// }

// getVisibleContacts = () => {
//   const { filter, contacts } = this.state;

//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// addContact = (name, number) => {
//   const { contacts } = this.state;
//   const contact = {
//     id: nanoid(),
//     name,
//     number,
//   };
//   const findContact = contacts.find(
//     contact => contact.name.toLowerCase() === name.toLowerCase()
//   );
//   if (findContact) {
//     alert(`${name} is already in contacts.`);
//   } else {
//     this.setState(prevState => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
//   }
// };

// deleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

// changeFilter = e => {
//   this.setState({
//     filter: e.currentTarget.value,
//   });
// };

// render() {
//   const { filter, contacts } = this.state;
//   const { addContact, deleteContact, changeFilter, getVisibleContacts } =
//     this;

// }
