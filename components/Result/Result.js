import React from "react";
import { useSelector } from "react-redux";
import { RContainer, RLabel } from "./style";

const Result = () => {
  const toFind = useSelector(state => state.finder.finded_word);
  return (
    <RContainer>
      <RLabel>
        There are {toFind} "OIE" word combination in this Alphabet Soup try to
        find them!
      </RLabel>
    </RContainer>
  );
};

export default Result;
