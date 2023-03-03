import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Post.module.css";

const Post = ({ data }) => {
  const dispatch = useDispatch();
  const changeDone = () => {
    data.isDone = !data.isDone;
    return data;
  };
  const addNewDone = () => {
    changeDone().isDone
      ? dispatch({ type: "CHANGE_DONE", newDone: changeDone() })
      : dispatch({ type: "CHANGE_TODO", newTodo: changeDone() });
  };
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["checkbox-box"]}>
          <input type="checkbox" onClick={addNewDone}></input>
        </div>
        <div className={styles["title-box"]}>
          <p>{data.Title}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
