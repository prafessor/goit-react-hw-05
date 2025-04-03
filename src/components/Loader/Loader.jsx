import PulseLoader from 'react-spinners/PulseLoader';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.container}>
      <PulseLoader color="#494949" />
    </div>
  );
}
