import React, { useState } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { WSContainer } from "./style";

const WordSelector = () => {
  const countMatrix = useSelector(state => state.matrix.countMatrix);

  return <WSContainer />;
};

export default WordSelector;
