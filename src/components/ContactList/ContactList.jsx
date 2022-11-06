import PropTypes from 'prop-types';
import { ButtonList, ListLi } from './ContactList.styled';

const ContactList = ({ contacts, visibleContacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.length === 0 && (
        <li style={{ color: 'rgba(0, 0, 0, 0.3)' }}>
          Your contact list is empty :(
        </li>
      )}
      {visibleContacts.map(contact => (
        <ListLi key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonList onClick={() => onDeleteContact(contact.id)}>
            Delete
          </ButtonList>
        </ListLi>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
