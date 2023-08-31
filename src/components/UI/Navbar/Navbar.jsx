import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import AuthContext from '../../../context/AuthContext';

const navItems = [
  { name: 'About', to: '.' },
  { name: 'Posts', to: 'posts' },
];

const addStylesIfActive = ({ isActive }) => {
  if (isActive) {
    return styles.active;
  }
};

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const exitHandler = () => {
    setIsAuth(false);
    localStorage.setItem('isAuth', JSON.stringify(false));
  };

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li className={styles.item} key={item.name}>
            <NavLink className={addStylesIfActive} to={item.to}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div onClick={exitHandler} className={styles.exit}>
        Выйти
      </div>
    </nav>
  );
};

export default Navbar;
