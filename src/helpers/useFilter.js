import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contacts, filter, setFilter } from 'redux/reducer/contactReducer';

export const useFilter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(filter);
  const allContacts = useSelector(contacts);

  const setFilterValue = e => dispatch(setFilter(e.target.value.toLowerCase()));

  const filteringList = useMemo(() => {
    const filterByName = allContacts.filter(({ name }) =>
      name.includes(filterValue)
    );
    return filterByName.length === 0 ? allContacts : filterByName;
  }, [allContacts, filterValue]);

  return { filteringList, filterValue, setFilterValue };
};
