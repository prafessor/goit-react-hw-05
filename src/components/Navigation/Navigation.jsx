import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.wrapper}>
          <ul className={css.list}>
            <li>
              <NavLink to="/" className={getLinkStyles}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={getLinkStyles}>
                Movies
              </NavLink>
            </li>
          </ul>
          <div className={css.logo}>Moviex</div>
        </nav>
      </div>
    </header>
  );
}
