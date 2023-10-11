import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setErrors, toggleLoading } from "../../redux/actions";
import styles from "./home.module.css";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import Aside from "../../components/aside/aside";
import Loader from "../../components/loaders/loader";
import PassNoValid from "../../components/redirections/passNoValid";

export default function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const loginUsers = useSelector((state) => state.loginUsers);
  const invalidCredentials = useSelector(state => state.invalidCredentials);

  useEffect(() => {
    if (loginUsers.length > 0) {
      dispatch(toggleLoading(false));
    }
  }, [loginUsers, dispatch]);

  if(loginUsers.length !== 1 && isLoading === false){
    dispatch(setErrors("Email y/o contraseña invalidos"))
    dispatch(toggleLoading(true))
  }  
  return (
    <div className={styles.container}>
      { invalidCredentials === false && isLoading ? (
        <Loader />
      ) : loginUsers.length > 0 && loginUsers[0].token ? (
        <div>
          <Header />
          <Aside />
          <Main />
        </div>
      ) :  <PassNoValid />}
    </div>
  );
}



