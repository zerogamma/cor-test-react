import React from "react";
import AssignmentContainer from "./AssignmentContainer";
import ResolutionContainer from "./ResolutionContainer";
import Header from "../components/Header";

import { MCMain } from "./MainContainerStyle";

const MainContainer = () => {
  return (
    <>
      <Header />
      <MCMain>
        <AssignmentContainer />
        <ResolutionContainer />
      </MCMain>
    </>
  );
};

export default MainContainer;
