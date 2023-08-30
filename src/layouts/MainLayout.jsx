import { Outlet } from 'react-router-dom';
import Navbar from '../components/UI/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
