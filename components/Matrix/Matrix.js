import React from "react";
import { useSelector } from "react-redux";
import { MContainer, MBox } from "./style";

const Matrix = () => {
  const matrix = useSelector(state => state.matrix.selectedMatrix);
  console.log("matrix!");
  console.log(matrix);
  return (
    <MContainer>
      {
        matrix.map(row => {
          row.map(column => {
            return <MBox>{column}</MBox>
          })
        })
      }
    </MContainer>
  );
};

export default Matrix;
