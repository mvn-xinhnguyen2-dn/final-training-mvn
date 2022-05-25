import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaHeart, FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const { logout } = useAuth();
  const favs = useSelector((state) => state.fav.value);
  const username = useSelector((state) => state.user.value);
  const statusLogin = useSelector((state) => state.statusLogin.value);

  const status = JSON.parse(localStorage.getItem("statusLoginLocal"));
  const user = JSON.parse(localStorage.getItem("user"));

  localStorage.setItem(
    "statusLoginLocal",
    JSON.stringify(!statusLogin || user?.name ? true : false)
  );

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
                  <NavLink to="/about" activeClassName="active">
                    ABOUT
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
              <li className={`social-item p-15 ${status || false}`}>
                <Link to="/auth/login">
                  <FaSignInAlt />
                  <span className="px-5">Login</span>
                </Link>
              </li>
              <li className={`social-item p-15 ${!status || false}`}>
                <Link to="/admin">
                  {username !== "" ? (
                    <span>
                      {username?.email ? username.email : user?.email}
                    </span>
                  ) : (
                    <span></span>
                  )}
                </Link>
              </li>
              <li className={`social-item p-15 ${!status || false}`}>
                <Link to="/" onClick={() => logout()}>
                  {username.email ? (
                    <>
                      <FaSignOutAlt />
                      <span className="px-5">Logout</span>
                    </>
                  ) : (
                    ""
                  )}
                </Link>
              </li>
              <li className="social-item p-15">
                <Link to="/">
                  <FaHeart />
                  {!!favs.length && (
                    <span className="fav-count">{favs.length}</span>
                  )}
                </Link>
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
