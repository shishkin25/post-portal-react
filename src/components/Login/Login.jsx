import { useContext, useState, useEffect } from 'react';
import styles from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../context/AuthContext';
import { correctAuth } from '../../functions/functions';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const [loginInfo, setLoginInfo] = useState({ login: '', password: '' });
  const [showMessage, setShowMessage] = useState(false);

  const authHandler = (e) => {
    e.preventDefault();

    if (correctAuth(loginInfo.login, loginInfo.password)) {
      setIsAuth(true);
      localStorage.setItem('isAuth', JSON.stringify(true));
    } else {
      setLoginInfo({ login: '', password: '' });
      setShowMessage(true);
    }
  };

  useEffect(() => {
    let timeoutId;
    if (showMessage) {
      timeoutId = setTimeout(() => {
        setShowMessage(false);
      }, 1300);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showMessage]);

  return (
    <div className="app">
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.title}>Вход</div>
          <Input
            value={loginInfo.login}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, login: e.target.value })
            }
            placeholder="Введите логин"
          />
          <Input
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            placeholder="Введите пароль"
          />
          <Button
            onClick={authHandler}
            disabled={!loginInfo.login || !loginInfo.password}
          >
            Войти
          </Button>
          {showMessage && (
            <div style={{ color: 'red', marginTop: '15px' }}>
              Неверный логин или пароль
            </div>
          )}
        </form>
        <div className={styles.info}>{'логин:123 | пароль:123'}</div>
      </div>
    </div>
  );
};

export default Login;
