import styles from './Input.module.css';

const Input = (props) => {
  return <input className={styles.item} {...props} />;
};

export default Input;
