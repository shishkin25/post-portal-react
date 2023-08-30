import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Идет загрузка</div>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
