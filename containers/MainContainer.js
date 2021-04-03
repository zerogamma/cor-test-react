import React from "react";
import AssignementContainer from "./AssignementContainer";
import ResolutionContainer from "./ResolutionContainer";
import { MCMain } from "./MainContainer";

const MainContainer = () => {
  return (
    <MCMain>
      <AssignementContainer />
      <ResolutionContainer />
    </MCMain>
  );
};

export default MainContainer;
