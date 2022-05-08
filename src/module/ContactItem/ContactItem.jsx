import Button from '../Utils/Button/Button';
// import PropTypes from 'prop-types';
import ContactData from './ContactData';
import style from './ContactItem.module.css';
import { TiUserDelete } from 'react-icons/ti';
import { useContactList } from 'helpers/useContactList';
import { useFilter } from 'helpers/useFilter';

const { contact__item } = style;

const Contact = () => {
  const { onDelete } = useContactList();
  const { filteringList } = useFilter();

  return filteringList.map(({ id, name, number, photo }) => (
    <li key={id} className={contact__item}>
      <ContactData name={name} phone={number} photo={photo} />
      <Button
        styleFor="delete"
        onClick={() => {
          onDelete(id);
        }}
        text={<TiUserDelete />}
      />
    </li>
  ));
};

export default Contact;

// Contact.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
