import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './styles/App.css';
import AppRouter from './components/AppRouter/AppRouter';
import AuthContext from './context/AuthContext';

function App() {
  const [isAuth, setIsAuth] = useState(() =>
    JSON.parse(localStorage.getItem('isAuth'))
  );

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
