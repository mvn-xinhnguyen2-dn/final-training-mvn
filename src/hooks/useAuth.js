import { message } from "antd";
import { getDatabase, ref, update } from "firebase/database";
import { auth } from "../index";
import { signOut } from "firebase/auth";

const useAuth = () => {
  const db = getDatabase();
  const logout = () => {
    update(ref(db, "users/" + auth.currentUser.uid), {
      status: false,
    });
    signOut(auth)
      .then(() => {
        message.success("Logout in successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return { logout };
};

export default useAuth;
