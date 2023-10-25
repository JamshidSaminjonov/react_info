import React from "react";
import { ReactDOM } from "react";
import "./index.css";

class Lesson3 extends React.Component {
  constructor(e) {
    super(e);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <div className="btn-group">
          <button
            className="prev"
            onClick={() => {
              this.setState({ count: this.state.count - 1 });
              console.log(this.state);
            }}
          >
            Prev
          </button>
          <p className="btn-text">{this.state.count}</p>
          <button
            className="next"
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
              console.log(this.state);
            }}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
export default Lesson3;
