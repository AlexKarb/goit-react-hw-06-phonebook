import SearchForm from '../SearchForm/SearchForm';
import ContactItem from '../ContactItem/ContactItem';
// import PropTypes from 'prop-types';
import { useContactList } from 'helpers/useContactList';

const ContactsList = () => {
  const { allContacts } = useContactList();

  return allContacts?.length === 0 ? (
    <div>No contacts</div>
  ) : (
    <>
      <SearchForm />
      <ul>
        <ContactItem />
      </ul>
    </>
  );
};

export default ContactsList;

// ContactsList.propTypes = {
//   // contactsList: PropTypes.array.isRequired,
//   filter: PropTypes.string,
//   onDelete: PropTypes.func.isRequired,
// };
