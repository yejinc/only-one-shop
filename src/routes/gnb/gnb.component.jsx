import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as OpensLogo } from "../../assets/logo.svg";
import { ReactComponent as UserIcon } from "../../assets/icon-user.svg";
import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";
import { ReactComponent as MenuIcon } from "../../assets/icon-menu.svg";
import { ReactComponent as LogInIcon } from "../../assets/icon-login.svg";
import { ReactComponent as LogOutIcon } from "../../assets/icon-logout.svg";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const GNB = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <header className="gnb">
        <h1 className="gnb-left">
          <Link className="logo-wrapper" to="/">
            <OpensLogo className="logo" />
          </Link>
        </h1>

        <nav className="gnb-nav sm-hidden">
          <h2 className="visually-hidden">menu</h2>

          <ul className="nav-list">
            <Link className="nav-list-item" to="/all">
              All
            </Link>
            <Link className="nav-list-item" to="/clothing">
              Clothing
            </Link>
            <Link className="nav-list-item" to="/accessories">
              Accessories
            </Link>
          </ul>
        </nav>

        <div className="gnb-right">
          {currentUser ? (
            <div className="logout">
              <LogOutIcon className="icon-logout" onClick={signOutHandler} />
            </div>
          ) : (
            <Link className="login" to="/log-in">
              <LogInIcon className="icon-login" />
            </Link>
          )}

          <Link className="cart" to="/cart">
            <CartIcon className="icon-cart" />
          </Link>
          <Link className="menu sm-only" to="/menu">
            <MenuIcon className="icon-menu" />
          </Link>
        </div>
      </header>

      <Outlet />
    </Fragment>
  );
};

export default GNB;
