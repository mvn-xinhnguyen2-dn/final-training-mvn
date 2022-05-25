import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useField from "../../../hooks/useField";
import { DataTutor } from "../../../data";
import loginImg from "../../../assets/images/login-img.png";
import { message } from "antd";
import { getInfoUser } from "../../../store/userSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const { login } = useAuth();
  const email = useField("email");
  const password = useField("password");
  const dispatch = useDispatch();

  const data = [
    {
      email: "xinh@gmail.com",
      password: "123456",
    },
    {
      email: "admin@gmail.com",
      password: "123456",
    },
  ];

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const findInfo = data.find((item) => {
      return item.email === email.value && item.password === password.value;
    });

    if (findInfo === undefined) {
      message.error("Email or Password does not exist!");
      return;
    } else {
      message.success("Logged in successfully");
      login(email.value, password.value);
      dispatch(getInfoUser(findInfo));
    }
  };

  return (
    <div className="page-main-login">
      <div className="container flex py-30">
        <DataTutor />
        <div className="login-image col-7">
          <img src={loginImg} alt="img" />
        </div>
        <div className="login-form col-5">
          <h2 className="center">Login</h2>
          <form onSubmit={(e) => handleOnSubmit(e)}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="name123@gmail.com..."
              required
              {...email}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              placeholder="Password"
              required
              {...password}
            />
            <button type="submit" className="btn login-submit mt-20">
              Login
            </button>
            <Link to="/auth/forgot-pasword" className="btn">
              Forgot Password
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
