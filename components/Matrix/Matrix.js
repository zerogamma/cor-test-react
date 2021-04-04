import React from "react";
import { useSelector } from "react-redux";
import { MContainer, MBox, MRowContainer, MMatrixContaner } from "./style";

const Matrix = () => {
  const matrix = useSelector(state => state.matrix.selectedMatrix);

  return (
    <MContainer>
      <MMatrixContaner>
        {matrix.map(row => (
          <MRowContainer>
            {row.map(column => (
              <MBox>{column}</MBox>
            ))}
          </MRowContainer>
        ))}
      </MMatrixContaner>
    </MContainer>
  );
};

export default Matrix;
