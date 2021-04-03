import React from "react";
import { useSelector, useDispatch } from "react-redux";

const MatrixSelector = () => {
  const countMatrix = useSelector(state => state.countSelector);
  const dispatch = useDispatch();
};

export default MatrixSelector;
