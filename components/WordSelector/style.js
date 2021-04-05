import styled from "styled-components";

export const WSContainer = styled.div``;

export const WSLabel = styled.div`
  display: flex;
`;

export const WSInput = styled.input`
  margin: 0 8px;
  padding-left: 10px;
  width: 75px;
`;

export const WSConfirm = styled.input`
  margin-right: 8px;
`;

export const WSShowContainer = styled.label`
  cursor: pointer;
  color: #394a56;
  margin-left: auto;
`;

export const WSShowButton = styled.input`
  display: none;
`;

export const WSShowSpan = styled.div`
  height: 100%;
  width: 200%;
  background: #76bef5;
  border-radius: 15px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;
  ${props =>
    props.check === true
      ? "transform: translate3d(25%, 0, 0);"
      : "   transform: translate3d(-75%, 0, 0);"}
`;

export const WSToggle = styled.div`
  isolation: isolate;
  height: 20px;
  width: 40px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
`;
