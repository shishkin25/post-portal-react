import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import styles from './Post.module.css';

const Post = (props) => {
  const { post, index, deletePost } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          {post.id}. {post.title}
        </div>
        <div className={styles.description}>{post.body}</div>
      </div>
      <div className={styles.btnsWrapper}>
        <div className={styles.btn}>
          <Button onClick={() => navigate(`${post.id}`)}>Открыть</Button>
        </div>
        <div className={styles.btn}>
          <Button onClick={(e) => deletePost(post.id)}>Удалить</Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
