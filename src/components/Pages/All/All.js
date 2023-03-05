import React from "react";
import styles from "./All.module.css";
import { useSelector } from "react-redux";
import Post from "../Post/Post";

const All = () => {
  const data = useSelector((state) => state);
  return (
    <div className={styles["wrapper"]}>
      {data.Todo.map((item) => (
        <Post key={item.id} data={item} />
      ))}
      {data.Done.map((item) => (
        <Post key={item.id} data={item} />
      ))}
    </div>
  );
};

export default All;
