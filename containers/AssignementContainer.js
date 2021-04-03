import React, { useState } from "react";
import Heading from "../components/Heading";
import { ACMain, AHButton, AContainer } from "./AssignementContainerStyle";

const AssignementContainer = () => {
  const [visibility, setvisibility] = useState(false);

  return (
    <ACMain>
      <AHButton
        value="Enunciado hide/show"
        type="button"
        onClick={() => setvisibility(!visibility)}
      />
      <AContainer visible={visibility}>
        <Heading />
      </AContainer>
    </ACMain>
  );
};

export default AssignementContainer;
