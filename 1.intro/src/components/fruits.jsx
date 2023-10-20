import React from "react";
import "./fruits.css";
class Fruit extends React.Component {
  render() {
    let href = this.props.href;
    let color = this.props.color;
    console.log(color);
    let title = this.props.title;
    return (
      <>
        <div className="card">
          <div className="img" style={{ backgroundColor: color }}>
            <img src={href} alt="yuq" />
          </div>
          <p>{title}</p>
        </div>
      </>
    );
  }
}

export default Fruit;
