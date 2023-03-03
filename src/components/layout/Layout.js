import React, { useState } from "react";
import styles from "./Layout.module.css";
import Nav from "../Navigation/Nav";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
const Layout = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const takeTask = (event) => {
    setTitle(event.target.value);
  };

  const createNewPost = () => {
    const newPost = { Title: title, isDone: false };
    return newPost;
  };

  const addNewPost = () => {
    if (title === "") {
      alert(`Write task`);
      return;
    }
    dispatch({ type: "ADD_POST", newPost: createNewPost() });
  };
  return (
    <div>
      <div className={styles["header"]}>
        <h2>To-Do List</h2>
      </div>
      <div className={styles["search"]}>
        <input
          className={styles["input"]}
          placeholder="Add Task"
          type="text"
          onChange={takeTask}
        />
        <button className={styles["button"]} onClick={addNewPost}>
          CREATE
        </button>
      </div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;