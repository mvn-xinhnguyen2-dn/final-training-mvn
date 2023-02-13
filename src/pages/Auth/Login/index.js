import useField from "../../../hooks/useField";
import { GoogleButton } from "react-google-button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";
import { useHistory } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import loginImg from "../../../assets/images/login-img.png";
import { message, Button } from "antd";
import { auth } from "../../../index";

export default function Login() {
  const email = useField("email");
  const password = useField("password");
  const history = useHistory();
  const db = getDatabase();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        let lgDate = new Date();
        update(ref(db, "users/" + user.uid), {
          last_login: lgDate,
          status: true,
          email: email.value,
        })
          .then(() => {
            message.success("Welcome!!!");
            history.push("/admin/accounts");
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch(() => {
        message.error("Email or Password does not exist!");
      });
  };

  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const loginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        message.success("Welcome!!!");
        let lgDate = new Date();
        update(ref(db, "users/" + user.uid), {
          last_login: lgDate,
          status: true,
          email: user.email,
        });
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        message.error(credential);
      });
  };

  const providerFacebook = new FacebookAuthProvider();
  const loginFacebook = () => {
    signInWithPopup(auth, providerFacebook)
      .then((result) => {
        const user = result.user;
        message.success("Welcome!!!");
        let lgDate = new Date();
        update(ref(db, "users/" + user.uid), {
          last_login: lgDate,
          status: true,
          email: user.displayName,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  return (
    <div className="page-main-login">
      <div className="container flex py-30">
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
          </form>
          <GoogleButton onClick={() => loginGoogle()} className="mt-10" />
          <Button
            icon={<FaFacebook className="mr-5" />}
            onClick={() => loginFacebook()}
            className="mt-10"
          >
            Login by Facebook
          </Button>
        </div>
      </div>
    </div>
  );
}
