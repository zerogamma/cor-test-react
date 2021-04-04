import React from "react";
import { useSelector } from "react-redux";
import {} from "./style";

const Result = () => {
  const toFind = useSelector(state => state.finder.finded_word);
  console.log(toFind);
  return <div />;
};

export default Result;
