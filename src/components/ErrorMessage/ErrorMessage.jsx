import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.container}>
      <p className={css.title}>Oops something went wrong...</p>
      <span className={css.message}>Please reload the page!</span>
    </div>
  );
}
