import React from "react";
import { useSelector } from "react-redux";
import { RContainer, RLabel, RResult } from "./style";

const Result = () => {
  const findedWord = useSelector(state => state.finder.finded_word);
  const word = useSelector(state => state.finder.word);
  return (
    <RContainer>
      <RLabel>
        There are <RResult>{findedWord}</RResult> {`"${word.join("")}"`} word
        combination in this Alphabet Soup try to find them!
      </RLabel>
    </RContainer>
  );
};

export default Result;
