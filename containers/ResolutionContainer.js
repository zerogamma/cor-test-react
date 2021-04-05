import React from "react";
import Selector from "../components/MatrixSelector";
import Matrix from "../components/Matrix";
import Result from "../components/Result";
import WordSelector from "../components/WordSelector";
import { RCMain } from "./ResolutionContainerStyle";

const ResolutionContainer = () => {
  return (
    <RCMain>
      <WordSelector />
      <Selector />
      <Matrix />
      <Result />
    </RCMain>
  );
};

export default ResolutionContainer;
