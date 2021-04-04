import React from "react";
import AssignementContainer from "./AssignementContainer";
import ResolutionContainer from "./ResolutionContainer";
import Header from "../components/Header";

import { MCMain } from "./MainContainerStyle";

const MainContainer = () => {
  return (
    <MCMain>
      <AssignementContainer />
      <ResolutionContainer />
    </MCMain>
  );
};

export default MainContainer;
