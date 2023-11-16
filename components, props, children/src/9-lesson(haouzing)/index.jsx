import React from "react";
import { Container, Text, BtnDark } from "./style1";

class StyledComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isdark: true,
    };
  }
  render() {
    return (
      <div>
        <Container>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            est maxime fuga officia odit quae voluptatum vero asperiores
            voluptate cum dignissimos, fugiat quam necessitatibus, ducimus
            inventore doloribus nam, possimus animi veritatis commodi nobis
            eaque nulla molestias recusandae! Amet iusto ullam repellendus
            perspiciatis voluptates sequi, fugiat maiores sapiente ipsa odit
            pariatur?
          </Text>
          <BtnDark
            onClick={() => this.setState({ isdark: !this.state.isdark })}
          >
            {this.state.isdark ? "Dark" : "Moon"}
          </BtnDark>
        </Container>
        salom
      </div>
    );
  }
}

export default StyledComponents;
