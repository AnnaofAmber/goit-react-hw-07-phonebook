import css from './App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div className={css.main}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <Contacts title="Contacts">
        <Filter />
        <ContactList />
      </Contacts>
    </div>
  );
};
