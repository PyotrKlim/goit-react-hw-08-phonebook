import css from './FilterContacts.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/slice';

const FilterContacts = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.FilterContacts}>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input type="text" onChange={onFilterChange} value={filter} />
    </div>
  );
};

export default FilterContacts;
