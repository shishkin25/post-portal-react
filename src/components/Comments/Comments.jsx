import styles from './Comments.module.css';
import Comment from '../Comment/Comment';

const Comments = (props) => {
  const { comments } = props;
  return (
    <div className={styles.container}>
      {comments.map((comment) => (
        <div className={styles.item} key={comment.id}>
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  );
};

export default Comments;
