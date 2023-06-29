import PropTypes from 'prop-types';

import { useContacts } from 'redux/useContacts';

export const ContactsItem = ({ name, number, id }) => {
  const { deleteContact } = useContacts();

  const onClick = () => {
    deleteContact(id);
  };

  return (
    <>
      <li>
        {name}: {number}
        <button type="button" onClick={onClick}>
          Delete
        </button>
      </li>
    </>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
