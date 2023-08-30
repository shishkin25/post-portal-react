import styles from './Modal.module.css';

const Modal = (props) => {
  const { children, isVisible, setIsVisible } = props;

  let classes = isVisible
    ? `${styles.container} ${styles.active}`
    : styles.container;

  return (
    <div className={classes} onClick={() => setIsVisible(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
