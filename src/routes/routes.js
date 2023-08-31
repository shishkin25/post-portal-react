import { Navigate } from 'react-router-dom';
import PostPage from '../pages/PostPage';
import PostsPage from '../pages/PostsPage';
import AboutPage from '../pages/AboutPage';
import Login from '../components/Login/Login';

const privateRoutes = [
  { path: 'posts', element: <PostsPage /> },
  { path: 'posts/:id', element: <PostPage /> },
  { path: '', element: <AboutPage />, index: true },
  { path: '*', element: <Navigate to=".." /> },
];

const publicRoutes = [
  { path: 'login', element: <Login /> },
  { path: '*', element: <Navigate to="login" /> },
];

export { privateRoutes, publicRoutes };
