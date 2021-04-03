import React from "react";
import { useSelector } from "react-redux";

const Matrix = () => {
  const matrix = useSelector(state => state.matrix.selectedMatrix);
  console.log("matrix!");
  console.log(matrix);
  return <div />;
};

export default Matrix;
