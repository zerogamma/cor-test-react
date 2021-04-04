import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { select_matrix } from "../../redux/action";
import _ from "lodash";
import { DropdownContent, Dropdown, MSContainer } from "./style";

const MatrixSelector = () => {
  const countMatrix = useSelector(state => state.matrix.countMatrix);
  const dispatch = useDispatch();
  const [selectedMatrix, setSelectedMatrix] = useState(0);

  const changeValue = inp => {
    dispatch(select_matrix(inp.target.value));
    setSelectedMatrix(inp.target.value);
  };

  return (
    <MSContainer>
      <Dropdown value={selectedMatrix} onChange={changeValue}>
        {_.times(countMatrix, i => {
          return <DropdownContent key={i}>{i}</DropdownContent>;
        })}
      </Dropdown>
    </MSContainer>
  );
};

export default MatrixSelector;
