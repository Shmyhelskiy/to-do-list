import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { appRoutes } from "../routes/Routes";
import styles from "./Nav.module.css";
import "./Nav.css";
import todo from "../../store/Image/todo.png";
import done from "../../store/Image/done.png";
import all from "../../store/Image/all.png";

const Nav = () => {
  const data = useSelector((state) => state);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["contaiter"]}>
        <div className={styles["contaiter-nav"]}>
          <div>
            <img src={todo} className={styles["image"]} alt="todo" />
          </div>
          <NavLink to={appRoutes.TODO.path} className={styles["link"]}>
            TO-DO ({data.Todo.length})
          </NavLink>
        </div>
        <div className={styles["contaiter-nav"]}>
          <div>
            <img src={done} className={styles["image"]} alt="done" />
          </div>
          <NavLink to={appRoutes.Done.path} className={styles["link"]}>
            Done ({data.Done.length})
          </NavLink>
        </div>
        <div className={styles["contaiter-nav"]}>
          <div>
            <img src={all} className={styles["image"]} alt="all" />
          </div>
          <NavLink to={appRoutes.All.path} className={styles["link"]}>
            ALL ({data.Done.length + data.Todo.length})
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
