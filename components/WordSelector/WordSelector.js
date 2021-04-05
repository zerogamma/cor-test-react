import React, { useState } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { WSContainer, WSLabel, WSInput } from "./style";

const WordSelector = () => {
  const currentWord = useSelector(state => state.finder.word);
  const [word, setWord] = useState(currentWord.join(""));

  return (
    <WSContainer>
      <WSLabel>
        Current Word to Find is{" "}
        <WSInput value={word} onChange={e => setWord(e.target.value)} />
      </WSLabel>
    </WSContainer>
  );
};

export default WordSelector;
