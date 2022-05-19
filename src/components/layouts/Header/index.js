import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaHeart, FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const favs = useSelector((state) => state.fav.value);
  const { isLogger , logout } = useAuth();

  const user = JSON.parse(localStorage.getItem("user"));
  const data = JSON.parse(localStorage.getItem("accounts"))

  let findName=[{name: ""}]
  if (isLogger===true) {
    findName = data.find((item) => {
        return user.email === item.email 
      });
  }

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
            <ul className="social-list mt-10 flex">
              <li className={`social-item p-15 ${!isLogger}`}>
                <Link to="/auth/login" >
                  <FaSignInAlt />
                </Link>
              </li>
              <li className={`social-item p-15 ${isLogger}`}>
                <Link to="/admin/account">
                  {isLogger ? (<span>Hi {findName.name}!</span>) : <span></span>}
                </Link>
              </li>
              <li className="social-item p-15">
                <Link to="/" onClick={() => logout()}>
                  <FaSignOutAlt />
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
