import React from "react";
import Selector from "../components/MatrixSelector";
import Matrix from "../components/Matrix";
import { RCMain } from "./ResolutionContainerStyle";

const ResolutionContainer = () => {
  return (
    <RCMain>
      <Selector />
      <Matrix />
    </RCMain>
  );
};

export default ResolutionContainer;
