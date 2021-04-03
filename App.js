import React from "react";
import MainContainer from "./containers/MainContainer";
import "./style.css";
import { fetch_data } from "./redux/action";
import { useDispatch } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  dispatch(fetch_data());

  return <MainContainer />;
};
