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
  WSShowSpan,
  WSToggle
} from "./style";

const WordSelector = () => {
  const currentWord = useSelector(state => state.finder.word);
  const [word, setWord] = useState(currentWord.join(""));
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const checkRef = useRef(null);
  const [check, setCheck] = useState(false);

  const newWord = () => {
    setWord([...inputRef.current.value]);
  };

  const enableChange = element => {
    setCheck(element.target.checked);
    element.target.checked
      ? (inputRef.current.disabled = false)
      : (inputRef.current.disabled = true);
  };

  return (
    <WSContainer>
      <WSLabel>
        Current Word to Find is{" "}
        <WSInput defaultValue={word} ref={inputRef} check={check} disabled />
        <WSConfirm
          type="button"
          value="Change"
          onClick={newWord}
          check={check}
        />
        <WSShowContainer>
          <WSToggle>
            <WSShowButton
              type="checkbox"
              ref={checkRef}
              onClick={enableChange}
            />
            <WSShowSpan check={check} />
          </WSToggle>
        </WSShowContainer>
      </WSLabel>
    </WSContainer>
  );
};

export default WordSelector;
