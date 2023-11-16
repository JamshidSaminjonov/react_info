import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => (props.isdark ? "black" : "white")};
`;
export const Text = styled.p`
  color: ${(props) => (props.isdark ? "white" : "black")};
`;
export const BtnDark = styled.button`
  background-color: ${(props) => (props.isdark ? "black" : "white")};
  background-color: ${(props) => (props.isdark ? "white" : "black")};
`;
