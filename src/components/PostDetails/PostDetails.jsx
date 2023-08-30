import styles from './PostDetails.module.css';
import Loader from '../UI/Loader/Loader';
import Comments from '../Comments/Comments';

const PostDetails = (props) => {
  const { postInfo, comments, areCommentsLoading, commentsError } = props;
  return (
    <div className={styles.container}>
      <div className={styles.id}>ID: {postInfo.id}</div>
      <h2 className={styles.title}>{postInfo.title}</h2>
      <div className={styles.description}>{postInfo.body}</div>
      <h2 className={styles.title}>Комментарии к посту:</h2>
      {commentsError ? (
        <h1 className="informational-text">{commentsError}</h1>
      ) : areCommentsLoading ? (
        <Loader />
      ) : (
        <Comments comments={comments} />
      )}
    </div>
  );
};

export default PostDetails;
