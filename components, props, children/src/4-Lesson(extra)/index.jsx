import React from "react";
import { ReactDOM } from "react";
import "./index.css";

class Lesson4Extra extends React.Component {
  constructor(e) {
    super(e);
    this.state = {
      text: "",
      language: "",
    };
  }
  render() {
    function changing(e) {
        this.setState({})  
      switch (e) {
        case "uz":
          return "uzbek";
        case "ru":
          return "rus";
        case "en":
          return "english";
      }
    }
    return (
      <>
        <div className="input-change">
          {/* <input
            type="text"
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <p>{this.state.text}</p> */}
          <select
            name="sel"
            id="sel"
            onChange={(e) => this.setState({language:changing(e.target.value))}}
          >
            <option value="uz">Uz</option>
            <option value="en">EN</option>
            <option value="ru">Ru</option>
          </select>
          <p> bu til : {this.state.language}</p>
        </div>
      </>
    );
  }
}
export default Lesson4Extra;
