import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLoading } from "../../redux/actions";
import styles from "./home.module.css";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import Aside from "../../components/aside/aside";
import Loader from "../../components/loaders/loader";
import { Navigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const loginUsers = useSelector((state) => state.loginUsers);

  useEffect(() => {
    if (loginUsers.length > 0) {
      dispatch(toggleLoading(false));
    }
  }, [loginUsers, dispatch]);

  if(loginUsers.length !== 1 && isLoading === false){
    return <Navigate to="/login" />
  }  
  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <Aside />
          <Main />
        </div>
      )}
    </div>
  );
}

