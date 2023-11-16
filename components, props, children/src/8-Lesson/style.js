import styled, { css } from "styled-components";

const Body = styled.body`
  margin: 0;
  box-sizing: border-box;
  padding: 0;
`;
const Paragrf = styled.p`
  color: ${({ color }) => color && "red"};
`;
export const Box = styled.div`
  width: 200px;
  height: 200px;
  color: red;
  background-color: ${(props) => props.type};
  margin-left: 30px;
`;
export const Wrapper = styled.div`
  background-color: coral;
  padding: 20px;
  display: flex;
`;
export { Body, Paragrf };
