import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as OpensLogo } from "../../assets/logo.svg";
import { ReactComponent as UserIcon } from "../../assets/icon-user.svg";
import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";
import { ReactComponent as MenuIcon } from "../../assets/icon-menu.svg";

const GNB = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="gnb">
          <h1 className="gnb-left">
            <Link className="logo-wrapper" to="/">
              <OpensLogo className="logo" />
            </Link>
          </h1>

          <nav className="gnb-nav sm-hidden">
            <h2 className="visually-hidden">menu</h2>

            <ul className="gnb-nav-list">
              <Link className="gnb-nav-item" to="/all">
                All
              </Link>
              <Link className="gnb-nav-item" to="/clothing">
                Clothing
              </Link>
              <Link className="gnb-nav-item" to="/accessories">
                Accessories
              </Link>
            </ul>
          </nav>

          <div className="gnb-right">
            <Link className="user" to="/login">
              <UserIcon className="icon-user" />
            </Link>
            <Link className="cart" to="/cart">
              <CartIcon className="icon-cart" />
            </Link>
            <Link className="menu" to="/menu">
              <MenuIcon className="icon-menu" />
            </Link>
          </div>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default GNB;
