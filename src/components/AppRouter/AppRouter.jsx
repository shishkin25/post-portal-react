import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../routes/routes';
import MainLayout from '../../layouts/MainLayout';
import AuthContext from '../../context/AuthContext';

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      {isAuth ? (
        <Route path="/" element={<MainLayout />}>
          {privateRoutes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </Route>
      ) : (
        publicRoutes.map((route) => <Route {...route} key={route.path} />)
      )}
    </Routes>
  );
};

export default AppRouter;
