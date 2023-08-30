import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

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
    </nav>
  );
};

export default Navbar;
