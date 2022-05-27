import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Tag } from "antd";
import useAuth from '../../../../hooks/useAuth';

export default function ManageAccounts() {
  const user = JSON.parse(localStorage.getItem("user"));
  const data = JSON.parse(localStorage.getItem("accounts"));
  const { isLogger, logout } = useAuth();


  let findName = [{ name: "" }];
  if (isLogger === true) {
    findName = data.find((item) => {
      return user.email === item.email;
    });
  }
  return (
    <>
    <Layout>
      <div className='page-account'>
        <div className='account'>
          <img src="https://wallpaperaccess.com/full/5064949.jpg" alt="background" />
          <div className='account-info flex'>
            <img className='account-avatar' alt='avatar' src="https://img.freepik.com/free-vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol-neumorphic-ui-ux-white-user-interface-web-button-neumorphism-vector-eps-10_399089-2757.jpg?w=2000"/>
            <div className='account-text'>
              <p>Name: {findName.name}</p>
              <p>Username: {user.email}</p>
              <p>Gender: {findName.gender ===0 ? "Male" : "Female"}</p>
              <Tag className="tag ml-0" color="green">Update info</Tag>
              <Tag className="tag" color="geekblue"><Link to="/auth/forgot-pasword">Change password</Link></Tag>
              <Tag className="tag" color="orange" onClick={() => logout()}>Logout</Tag>
            </div>

          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}
