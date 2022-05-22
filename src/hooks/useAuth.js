import { useState } from "react";
import { useHistory } from "react-router-dom";
import { message } from 'antd';

const useAuth = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [isLogger, setIsLogger] = useState(!!user);
  const history = useHistory();

  const login = (email, password) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify({ email }));
        setUser({ email });
        setIsLogger(true);
        history.push('/admin/accounts');
        res({ email });
      }, 1000);
    });
  }
  const logout = () => {
    localStorage.removeItem('user');
    setIsLogger(false);
    history.push('/');
    message.success("Logout in successfully")

  }
  return { isLogger, login, logout }
}

export default useAuth;
