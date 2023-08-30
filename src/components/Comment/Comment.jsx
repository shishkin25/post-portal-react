import styles from './Comment.module.css';
import avatar from '../../assets/avatar.png';

const Comment = ({ comment }) => {
  return (
    <div className={styles.container}>
      <div className={styles.author}>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.email}>{comment.email}</div>
      </div>
      <div className={styles.text}>{comment.body}</div>
    </div>
  );
};

export default Comment;
