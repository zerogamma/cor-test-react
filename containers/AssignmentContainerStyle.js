import styled from "styled-components";

export const ACMain = styled.div`
  position: 5;
`;

export const AContainer = styled.div`
  position: fixed;
  width: 40%;
  top: 0;
  right: 0;
  background-color: #fff;
  padding-left: 20px;
  border-left: 1px solid #dadce0;
  height: 100%;
  padding-top: 60px;
  transform: translateX(${props => (props.visible ? "0%" : "100%")});
  transition: transform ease-out 0.5s;
`;

export const AHButton = styled.input`
  position: absolute;
  top: 28px;
  right: 25px;
  z-index: 900;
  border: none;
  outline: none;
  color: darkgray;
  cursor: pointer;
`;
