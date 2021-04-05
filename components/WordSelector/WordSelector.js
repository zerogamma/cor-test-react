import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { new_word, find_word } from "../../redux/action";
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
  const currentMatrix = useSelector(state => state.matrix.selectedMatrix);
  const [word, setWord] = useState(currentWord.join(""));
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const checkRef = useRef(null);
  const [check, setCheck] = useState(false);

  const newWord = () => {
    setWord([...inputRef.current.value]);
    dispatch(new_word([...inputRef.current.value]));
  };

  useEffect(() => {
    dispatch(find_word(currentMatrix));
  }, [currentWord]);

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
