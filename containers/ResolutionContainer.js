import React from "react";
import Selector from "../components/MatrixSelector";
import Matrix from "../components/Matrix";
import Result from "../components/Result";
import { RCMain } from "./ResolutionContainerStyle";

const ResolutionContainer = () => {
  return (
    <RCMain>
      <Selector />
      <Matrix />
      <Result />
    </RCMain>
  );
};

export default ResolutionContainer;
