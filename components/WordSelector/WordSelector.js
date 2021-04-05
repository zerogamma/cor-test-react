import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import {
  WSContainer,
  WSLabel,
  WSInput,
  WSConfirm,
  WSShowContainer,
  WSShowButton,
  WSShowSpan
} from "./style";

const WordSelector = () => {
  const currentWord = useSelector(state => state.finder.word);
  const [word, setWord] = useState(currentWord.join(""));
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const newWord = element => {
    setWord([...inputRef.current.value]);

  };

  return (
    <WSContainer>
      <WSLabel>
        Current Word to Find is <WSInput defaultValue={word} ref={inputRef} />
        <WSConfirm type="button" value="Change" onClick={newWord} />
      </WSLabel>
    </WSContainer>
  );
};

export default WordSelector;
