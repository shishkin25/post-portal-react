import { useMemo } from 'react';

const useSortedPosts = (posts, sortKey) => {
  function getSortedPosts(posts, sortKey) {
    return [...posts].sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1));
  }

  const sortedPosts = useMemo(() => {
    return getSortedPosts(posts, sortKey);
  }, [sortKey, posts]);

  return sortedPosts;
};

const usePosts = (posts, sortkey, searchQuery) => {
  const sortedPosts = useSortedPosts(posts, sortkey);

  const searchedAndSortedPosts = useMemo(() => {
    return [...sortedPosts].filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  return searchedAndSortedPosts;
};

export default usePosts;
