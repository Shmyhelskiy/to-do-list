import React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./Routes.module.css";
import TODO from "../Pages/TO-DO/TO-DO";
import Done from "../Pages/Done/Done";
import All from "../Pages/All/All";
import Layout from "../layout/Layout";
import trash from "../../store/Image/trash.png";

export const appRoutes = {
  TODO: {
    id: 1,
    path: "/",
    element: <TODO />,
  },
  Done: {
    id: 2,
    path: "/done",
    element: <Done />,
  },
  All: {
    id: 3,
    path: "/all",
    element: <All />,
  },
};

const Routes = () => {
  const dispatch = useDispatch();

  const cleanList = () => {
    dispatch({ type: "CLEAN_LIST" });
  };

  return (
    <div>
      <ReactRouterRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TODO />}></Route>
          <Route path="/done" element={<Done />}></Route>
          <Route path="/all" element={<All />}></Route>
        </Route>
      </ReactRouterRoutes>
      <div className={styles["circle"]} onClick={cleanList}>
        <img src={trash} alt="trash" />
      </div>
    </div>
  );
};

export default Routes;
