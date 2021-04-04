import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import { ACMain, AHButton, AContainer } from "./AssignmentContainerStyle";

const AssignmentContainer = () => {
  const [visibility, setvisibility] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setvisibility(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [visibility]);

  return (
    <ACMain>
      <AHButton
        value="Assignment hide/show"
        type="button"
        onClick={() => setvisibility(!visibility)}
      />
      <AContainer visible={visibility}>
        <Heading />
      </AContainer>
    </ACMain>
  );
};

export default AssignmentContainer;
