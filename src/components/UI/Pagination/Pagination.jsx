import styles from './Pagination.module.css';

const Pagination = (props) => {
  const { pages, activePage, choosePage } = props;
  return (
    <div className={styles.container}>
      {pages.map((page) => (
        <div
          className={
            page === activePage
              ? `${styles.page} ${styles.active}`
              : styles.page
          }
          onClick={() => choosePage(page)}
          key={page}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
