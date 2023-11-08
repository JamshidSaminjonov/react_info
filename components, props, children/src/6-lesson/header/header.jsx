import React from "react";
import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { menyu, count } = this.props;
    // console.log(this.props);
    return (
      <>
        <ul style={{ backgroundColor: "grey" }}>
          {menyu.map((v) =>
            v == "send" ? (
              <li>
                {v}

                <span>{count}</span>
              </li>
            ) : (
              <li>{v}</li>
            )
          )}
        </ul>
      </>
    );
  }
}
export default Header;
