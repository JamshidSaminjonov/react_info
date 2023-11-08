import React from "react";
import "./index.css";
import { Body, Paragrf, Wrapper, Box } from "./style";

class Lesson8 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Body>
          <Wrapper>
            <Box type="blue" small="true"></Box>
            <Box type="red" big="true"></Box>
            <Box type="white"></Box>
            <Paragrf>Lorem, ipsum dolor.</Paragrf>
            <Paragrf color="true">Lorem, ipsum dolor.</Paragrf>
          </Wrapper>
        </Body>
      </>
    );
  }
}
export default Lesson8;
