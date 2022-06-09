import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaHeart,
  FaGithub,
  FaUserCheck,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Menu, Dropdown, Tag } from "antd";

export default function Header() {
  const { logout } = useAuth();
  const favs = useSelector((state) => state.fav.value);
  const username = useSelector((state) => state.user.value);
  const statusLogin = useSelector((state) => state.statusLogin.value);
  const user = JSON.parse(localStorage.getItem("user"));
  const favsList = JSON.parse(localStorage.getItem("favsList"));
  const dataClasses = JSON.parse(localStorage.getItem("classes"));

  const favItems = (
    <Menu
      items={
        favsList?.length !==0 ? 
        favsList?.map((item) => {
          const itemHeart = dataClasses.find((info)=>{
            return info.id===item
          })
          let classFavs ="";
          classFavs = (
            {
              key: {item},
              label: (
                <Link to={`/admin/manage-classes/${item}`}> 
                  Class: {itemHeart.classname} {itemHeart.status?<Tag color="green">Available</Tag>:<Tag color="volcano">Disvailable</Tag>} <br/> 
                  Address: {itemHeart.street}, {itemHeart.district}.<br/>
                </Link>
              ),
            }
          )
          return classFavs;
        }) :
        [{
          key:"abc",
          label: (
            <span>Empty!!!</span>
          ),
        }]
      }
    />
  );

  localStorage.setItem("statusLoginLocal", JSON.stringify(statusLogin));

  return (
    <>
      <header className="page-header">
        <div className="container-fluit flex">
          <div className="header-left mt-10 col-3">
            <NavLink to="/" exact activeClassName="active">
              <div className="brand-title">
                <h2 className="brand-name mb-0">GIA SƯ BẢO NGỌC</h2>
                <p className="mb-0">UY TÍN - CHẤT LƯỢNG</p>
              </div>
            </NavLink>
          </div>
          <div className="header-right col-9 flex">
            <nav className="header-right-nav">
              <ul className="header-right-nav-list mt-10 flex">
                <li className="header-right-nav-item p-15 mr-10">
                  <NavLink to="/" exact activeClassName="active">
                    HOME
                  </NavLink>
                </li>
                <li className="header-right-nav-item p-15 mr-10">
                  <NavLink to="/admin" activeClassName="active">
                    ADMIN
                  </NavLink>
                </li>
              </ul>
            </nav>
            <ul className="social-list mt-10 flex ">
              <li className={`social-item p-15 ${!statusLogin}`}>
                <Link to="/auth/login">
                  <FaSignInAlt />
                  <span className="px-5">Login</span>
                </Link>
              </li>
              <li className={`social-item p-15 ${statusLogin}`}>
                <Link to="/admin">
                  {statusLogin ? (
                    <>
                      <FaUserCheck />
                      <span className="px-5">
                        {username?.email ? username.email : user?.email}
                      </span>
                    </>
                  ) : (
                    <></>
                  )}
                </Link>
              </li>
              <li className={`social-item p-15 ${statusLogin}`}>
                <Link to="/" onClick={() => logout()}>
                  {statusLogin ? (
                    <>
                      <FaSignOutAlt />
                      <span className="px-5">Logout</span>
                    </>
                  ) : (
                    <></>
                  )}
                </Link>
              </li>
              <li className="social-item p-15">
                <Dropdown overlay={favItems} placement="bottomRight" arrow={{ pointAtCenter: true }} trigger={['click']}>
                  <a href="/" onClick={(e) => e.preventDefault()}>
                    <FaHeart />
                    {favsList?.length > 0 ? (
                      <span className="fav-count">
                        {favsList?.length || favs?.length}
                      </span>
                    ) : (
                      <></>
                    )}
                  </a>
                </Dropdown>
              </li>
              <li className="social-item p-15">
                <a href="https://github.com/mvn-xinhnguyen2-dn/final-training-mvn">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
