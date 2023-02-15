import useField from "../../../hooks/useField";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";
import { useHistory } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaLock, FaUser } from "react-icons/fa";
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
        const credential = FacebookAuthProvider.credentialFromResult(result);
        // eslint-disable-next-line no-unused-vars
        const accessToken = credential.accessToken;
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
          <h3 className="center">SIGN IN</h3>
          <form onSubmit={(e) => handleOnSubmit(e)}>
            <div className="flex align-items-center justify-content-center my-20">
              <label htmlFor="email">
                <FaUser />
              </label>
              <input
                id="email"
                name="email"
                placeholder="name123@gmail.com..."
                required
                {...email}
              />
            </div>
            <div className="flex align-items-center justify-content-center mb-10">
              <label htmlFor="password">
                <FaLock />
              </label>
              <input
                id="password"
                name="password"
                placeholder="Password"
                required
                {...password}
              />
            </div>
            <button type="submit" className="btn login-submit flex justify-content-center my-20">
              LOGIN
            </button>
          </form>
          <div className="center">
            <p>Or login with</p>
            <Button
              icon={<FaFacebookF className="mr-5" />}
              onClick={() => loginFacebook()}
              className="btn-facebook mt-5 mr-10"
            >FACEBOOK</Button>
            <Button
              icon={<FaGoogle className="mr-5" />}
              onClick={() => loginGoogle()}
              className="btn-google mt-5"
            >GOOGLE</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
