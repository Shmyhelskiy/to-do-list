import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../routes/Routes";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["contaiter"]}>
        <Link to={appRoutes.TODO.path} className={styles["link"]}>
          TO-DO
        </Link>
        <Link to={appRoutes.Done.path} className={styles["link"]}>
          Done
        </Link>
        <Link to={appRoutes.All.path} className={styles["link"]}>
          ALL
        </Link>
      </div>
    </div>
  );
};

export default Nav;
