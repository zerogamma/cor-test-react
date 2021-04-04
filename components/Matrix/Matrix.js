import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { find_word } from "../../redux/action";
import { MContainer, MBox, MRowContainer, MMatrixContaner } from "./style";

const Matrix = () => {
  const matrix = useSelector(state => state.matrix.selectedMatrix);
  const dispatch = useDispatch();
  dispatch(find_word(matrix));

  return (
    <MContainer>
      <MMatrixContaner>
        {matrix.map((row, i) => (
          <MRowContainer key={i}>
            {row.map((column, j) => (
              <MBox key={`${i}-${j}`}>{column}</MBox>
            ))}
          </MRowContainer>
        ))}
      </MMatrixContaner>
    </MContainer>
  );
};

export default Matrix;
