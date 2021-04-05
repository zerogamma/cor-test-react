import React, { useState } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { WSContainer, WSLabel, WSInput } from "./style";

const WordSelector = () => {
  const currentWord = useSelector(state => state.finder.word);

  return (
    <WSContainer>
      <WSLabel> Current Word to Find is {}</WSLabel>
      <WSInput />
    </WSContainer>
  );
};

export default WordSelector;
