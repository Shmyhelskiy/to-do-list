import React from "react";
import { useSelector } from "react-redux";
import styles from "./Done.module.css";
import Post from "../Post/Post";

const TODO = () => {
  const data = useSelector((state) => state.Done);
  data.forEach((element, index) => (element.id = index));
  return (
    <div className={styles["wrapper"]}>
      {data.map((item) => (
        <Post key={item.id} data={item} />
      ))}
    </div>
  );
};

export default TODO;
