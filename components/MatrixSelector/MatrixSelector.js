import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DropdownContent, Dropdown } from "./style";
import { select_matrix } from "../../redux/action";
import _ from "lodash";

const MatrixSelector = () => {
  const countMatrix = useSelector(state => state.matrix.countMatrix);
  const dispatch = useDispatch();
  const [selectedMatrix, setSelectedMatrix] = useState(0);

  const changeValue = inp => {
    dispatch(select_matrix(inp.target.value));
    setSelectedMatrix(inp.target.value);
  };

  return (
    <Dropdown value={selectedMatrix} onChange={changeValue}>
      {_.times(countMatrix, i => {
        return <DropdownContent key={i}>{i}</DropdownContent>;
      })}
    </Dropdown>
  );
};

export default MatrixSelector;
