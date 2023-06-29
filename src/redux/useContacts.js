import { useDispatch, useSelector } from 'react-redux';
import * as operations from './operations';
import * as actions from './slice';
import { selectContacts, selectFilter } from './selectors';
import { useCallback } from 'react';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getContacts = useCallback(
    () => dispatch(operations.getContacts()),
    [dispatch]
  );

  const addContact = newContact => dispatch(operations.addContact(newContact));
  const deleteContact = id => dispatch(operations.deleteContact(id));
  const changeFilter = value => dispatch(actions.changeFilter(value));

  return {
    contacts,
    filter,
    addContact,
    deleteContact,
    changeFilter,
    getContacts,
  };
};
