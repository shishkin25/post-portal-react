import Post from '../Post/Post';
import styles from './Posts.module.css';

const Posts = (props) => {
  const { posts, title, deletePost } = props;

  if (!posts.length) {
    return <h1 className="informational-text">Посты не найдены</h1>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.list}>
        {posts.map((post, index) => (
          <Post
            post={post}
            index={index}
            key={post.id}
            deletePost={deletePost}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
