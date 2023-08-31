import loginData from '../auth/loginData';

function correctAuth(login, password) {
  return (
    login.trim() === loginData.login && password.trim() === loginData.password
  );
}

export { correctAuth };
