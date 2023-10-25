import css from './ContactList.module.css';
import { Contact } from 'components/Contact/Contact';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getContacts, getFilter } from 'redux/selectors';
const onFilteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = onFilteredContacts(contacts, filter);

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <Contact
          id={contact.id}
          key={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};
