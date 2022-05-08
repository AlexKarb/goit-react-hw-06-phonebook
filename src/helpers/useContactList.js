import { useDispatch, useSelector } from 'react-redux';
import { contacts, remove, save } from 'redux/reducer/contactReducer';

export const useContactList = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(contacts);

  const onSave = contact => {
    dispatch(save(contact));
  };

  const onDelete = id => {
    dispatch(remove(id));
  };

  return { allContacts, onSave, onDelete };
};
