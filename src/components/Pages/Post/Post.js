import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Post.module.css";

const Post = ({ data }) => {
  const dispatch = useDispatch();
  const addNewDone = () => {
    !data.isDone
      ? dispatch({ type: "CHANGE_DONE", newDone: data })
      : dispatch({ type: "CHANGE_TODO", newTodo: data });
  };
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["checkbox-box"]}>
          <input
            type="checkbox"
            onChange={addNewDone}
            checked={data.isDone}
          ></input>
        </div>
        <div className={styles["title-box"]}>
          <p>{data.Title}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
