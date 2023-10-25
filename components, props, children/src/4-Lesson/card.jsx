import React from "react";
import { ReactDOM } from "react";

class Cards extends React.Component {
  constructor(param) {
    super(param);
    this.state = {
      name: "shox",
    };
  }
  render() {
    let { color, title, href, cardColor } = this.props;
    // console.log(color, title, href, cardColor);
    return (
      <>
        <div
          className="card"
          style={{
            borderRadius: "30px",
            backgroundColor: "#fff",
            textAlign: "center",
            width: "200px",
          }}
        >
          <div
            className="circle-color"
            style={{
              borderRadius: "50%",
              height: "150px",
              width: "150px",
              backgroundColor: color,
              margin: "20px auto",
            }}
          >
            <img
              src={href}
              alt="yuq"
              width={"100px"}
              height={"100px"}
              style={{ padding: "20px" }}
            />
          </div>
          <p style={{ fontSize: "30px", padding: "0 10px" }}>{title}</p>
        </div>
      </>
    );
  }
}
export default Cards;
