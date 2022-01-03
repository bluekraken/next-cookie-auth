import Link from "next/link";

import { logoutUser } from "../lib/auth";

import styles from "../styles/Layout.module.css";

const Layout = ({ title, children, auth }) => {
  const { user = {} } = auth || {};

  return (
    <div className={styles.root}>
      <nav className={styles.navbar}>
        <span>
          Welcome, <strong>{user.name || "Guest"}</strong>
        </span>

        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          {user.email ? (
            <>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
              <button onClick={logoutUser} className={styles.button}>
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">
              <a>Login</a>
            </Link>
          )}
        </div>
      </nav>

      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Layout;
