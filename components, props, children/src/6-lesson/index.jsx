import React from "react";
import Header from "./header/header";
import Body from "./body/body";
let base = [
  "Assalomu alaykum",
  "Qalaysizlar?",
  "Bugundan o'zgaramiz nim adeysizlar!",
];
class Lesson6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menyu: ["menyu", "contact", "servise", "blog", "send"],
      massage: base,
      count: base.length,
    };
  }
  render() {
    const counter = (e) => {
      this.setState({ count: this.state.massage.length - 1 });
      let res = this.state.massage.filter((v) => v != e);
      this.setState({ massage: res });
    };

    return (
      <>
        <Header menyu={this.state.menyu} count={this.state.count} />
        <Body massage={this.state.massage} counter={counter} />
      </>
    );
  }
}
export default Lesson6;
