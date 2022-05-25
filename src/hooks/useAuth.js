import { useState } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { getStatusLogin } from "../store/loginSlice";

const useAuth = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [isLogger, setIsLogger] = useState(!!user);
  const history = useHistory();
  const dispatch = useDispatch();

  const login = (email, password) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem("user", JSON.stringify({ email }));
        setUser({ email });
        setIsLogger(true);
        history.push("/admin/accounts");
        res({ email });
      }, 1000);
      dispatch(getStatusLogin(!isLogger));
    });
  };
  const logout = () => {
    localStorage.removeItem("user");
    setIsLogger(false);
    history.push("/");
    message.success("Logout in successfully");
    dispatch(getStatusLogin(isLogger));
  };
  return { isLogger, login, logout };
};

export default useAuth;
