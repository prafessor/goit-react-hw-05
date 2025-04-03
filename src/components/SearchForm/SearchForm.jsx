import toast, { Toaster } from 'react-hot-toast';
import { BsSearch } from 'react-icons/bs';
import css from './SearchForm.module.css';

export default function SearchForm({ value, onSubmit }) {
  const hadleSearchSubmit = evt => {
    evt.preventDefault();

    const query = evt.currentTarget.elements.query.value.trim();
    if (query.length === 0) {
      toast.error('Please enter something in the field', { icon: '❕️' });
      return;
    }
    onSubmit(query);
  };

  return (
    <>
      <form onSubmit={hadleSearchSubmit}>
        <input
          className={css.field}
          type="text"
          name="query"
          defaultValue={value}
        />
        <button className={css.btn}>
          <BsSearch className={css.icon} size="16" />
        </button>
      </form>
      <Toaster position="top-right" />
    </>
  );
}
