import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetching from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import PostDetails from '../components/PostDetails/PostDetails';
import Button from '../components/UI/Button/Button';
import styles from './PostPage.module.css';

const PostPage = (props) => {
  const [postInfo, setPostInfo] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const [fetchPost, isPostLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getPostById(id);
    setPostInfo(response.data);
  });

  const [fetchComments, areCommentsLoading, commentsError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentsByPostId(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPost(id);
    fetchComments(id);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.back}>
          <Button onClick={() => navigate('..', { relative: 'path' })}>
            Вернуться назад
          </Button>
        </div>
        {postError ? (
          <h1 className="informational-text">{postError}</h1>
        ) : isPostLoading ? (
          <Loader />
        ) : (
          <PostDetails
            postInfo={postInfo}
            comments={comments}
            areCommentsLoading={areCommentsLoading}
            commentsError={commentsError}
          />
        )}
      </div>
    </div>
  );
};

export default PostPage;
