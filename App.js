import React from "react";
import "./style.css";
import { fetch_data } from "./redux/action";
import { useDispatch } from "react-redux";
import MainContainer from "./containers/MainContainer";

export const App = () => {
  const dispatch = useDispatch();
  dispatch(fetch_data());

  return <MainContainer />;
};
