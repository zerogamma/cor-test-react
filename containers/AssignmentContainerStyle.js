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
  border-left: 1px solid;
  height: 100%;
  padding-top: 30px;
  transform: translateX(${props => (props.visible ? "0%" : "100%")});
  transition: transform ease-out 0.5s;
`;

export const AHButton = styled.input`
  position: absolute;
  top: 28px;
  right: 25px;
  z-index: 900;
  border: none;
  color: darkgray;
`;
