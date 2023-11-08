import React from "react";
import "./body.css";
import delateItem from "./delete.png";

class Body extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="massage">
          {this.props.massage.map((v, i) => (
            <div className="items">
              <div className="item">{v}</div>
              <img
                src={delateItem}
                id={i}
                alt="yuq"
                width={"20px"}
                onClick={() => this.props.counter(v)}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Body;
