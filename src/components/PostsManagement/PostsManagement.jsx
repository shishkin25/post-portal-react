import PostFilter from '../PostFilter/PostFilter';
import Button from '../UI/Button/Button';
import styles from './PostsManagement.module.css';

const PostsManagement = (props) => {
  const { showModal, filter, setFilter } = props;
  return (
    <div className={styles.container}>
      <PostFilter filter={filter} setFilter={setFilter} />
      <div className={styles.btn}>
        <Button onClick={showModal}>Создать пост</Button>
      </div>
    </div>
  );
};

export default PostsManagement;
