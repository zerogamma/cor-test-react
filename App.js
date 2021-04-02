import React from "react";
import Heading from "./components/Heading";
import "./style.css";
import { fetch_data } from "./redux/action";
import { useDispatch } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  dispatch(fetch_data());

  return (
    <div>
      <Heading />
    </div>
  );
};
