import React from "react";

class Lesson2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      name: "shox",
      age: 34,
      count: 8,
      change() {
        this.color === "red" ? (this.color = "green") : (this.color = "red");
      },
    };

    // console.log("contructor yurdi");
  }

  render() {
    // console.log("render yurdi");
    return (
      <>
        {
          /* <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              color:
                this.color === "red"
                  ? (this.color = "green")
                  : (this.color = "red"),
            })
          }
          style={{ color: this.state.color }}
        >
          click me {this.state.count}
        // </button> */ add.Component
        }
      </>
    );
  }
}
export default Lesson2;
