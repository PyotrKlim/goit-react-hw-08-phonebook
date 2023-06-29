import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { useContacts } from 'redux/useContacts';

const ContactsList = () => {
  const { filter, contacts } = useContacts();

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul>
      {getFilteredContacts().map(({ name, number, id }) => (
        <ContactsItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};

export default ContactsList;
