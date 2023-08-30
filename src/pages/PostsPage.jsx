import { useEffect, useMemo, useRef, useState } from 'react';
import usePosts from '../hooks/usePosts';
import Posts from '../components/Posts/Posts';
import PostForm from '../components/PostForm/PostForm';
import Modal from '../components/UI/Modal/Modal';
import Loader from '../components/UI/Loader/Loader';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import Pagination from '../components/UI/Pagination/Pagination';
import styles from './PostsPage.module.css';
import PostsManagement from '../components/PostsManagement/PostsManagement';

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sortKey: 'id', searchQuery: '' });
  const [isActiveModal, setIsActiveModal] = useState(false);
  const searchedAndSortedPosts = usePosts(
    posts,
    filter.sortKey,
    filter.searchQuery
  );
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const postsWrapper = useRef(null);

  const postsPages = useMemo(() => {
    const array = [];
    const countOfPages = Math.ceil(totalPages / limit);

    for (let i = 0; i < countOfPages; i++) {
      array.push(i + 1);
    }

    return array;
  }, [totalPages, limit]);

  const [fetchPosts, isLoading, postsError] = useFetching(async (page) => {
    const response = await PostService.getAllPosts(page);
    setPosts(response.data);
    setTotalPages(response.headers['x-total-count']);
  });

  const addPostHandler = (post) => {
    setPosts([...posts, post]);
    setIsActiveModal(false);

    setTimeout(() => {
      if (postsWrapper.current) {
        postsWrapper.current.scrollTop = postsWrapper.current.scrollHeight;
      }
    }, 0);
  };

  const deletePostHandler = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  const choosePageHandler = (page) => {
    setPage(page);
    fetchPosts(page);
  };

  const showModalHandler = () => {
    setFilter({ ...filter, searchQuery: '' });
    setIsActiveModal(true);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <div className={styles.wrapper}>
        {postsError ? (
          <h1 className="informational-text">{postsError}</h1>
        ) : (
          <>
            <PostsManagement
              showModal={showModalHandler}
              filter={filter}
              setFilter={setFilter}
            />
            {isLoading ? (
              <Loader />
            ) : (
              <div className={styles.postsWrapper} ref={postsWrapper}>
                <Posts
                  posts={searchedAndSortedPosts}
                  title="Posts"
                  deletePost={deletePostHandler}
                />
              </div>
            )}
            <Pagination
              pages={postsPages}
              activePage={page}
              choosePage={choosePageHandler}
            />
          </>
        )}
        <Modal isVisible={isActiveModal} setIsVisible={setIsActiveModal}>
          <PostForm addPost={addPostHandler} deletePost={deletePostHandler} />
        </Modal>
      </div>
    </div>
  );
}

export default PostsPage;
