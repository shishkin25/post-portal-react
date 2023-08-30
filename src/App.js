import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import PostsPage from './pages/PostsPage';
import MainLayout from './layouts/MainLayout';
import AboutPage from './pages/AboutPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<AboutPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
