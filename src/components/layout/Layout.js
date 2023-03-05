import React, { useState } from "react";
import styles from "./Layout.module.css";
import Nav from "../Navigation/Nav";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";

const Layout = () => {
  const [title, setTitle] = useState("");
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const takeTask = (event) => {
    setTitle(event.target.value);
    setValue(event.target.value);
  };

  const createNewPost = () => {
    const newPost = { Title: title, isDone: false };
    newPost.id = counter;
    setCounter((counter) => counter + 1);
    return newPost;
  };

  const addNewPost = () => {
    if (value === "") {
      alert(`Write task`);
      return;
    }
    dispatch({ type: "ADD_POST", newPost: createNewPost() });
    setValue("");
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
          value={value}
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
