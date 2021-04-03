import React from "react";
import AssignementContainer from "./AssignementContainer";
import ResolutionContainer from "./ResolutionContainer";
import { cMain } from "./MainContainer";

const MainContainer = () => {
  return (
    <cMain>
      <AssignementContainer />
      <ResolutionContainer />
    </cMain>
  );
};

export default MainContainer;
