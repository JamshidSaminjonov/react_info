import React from "react";
import { ReactDOM } from "react";
import "./index.css";
// import data from "./data";
import Students from "./data";
class Lesson4Extra extends React.Component {
  constructor(e) {
    super(e);
    this.state = {
      // text: "",
      // language: "",
      // html: false,
      // css: false,
      // js: false,
      // first: "jamshid",
      // last: "saminjonov",
    };
  }
  render() {
    // function changing(e) {
    //   switch (e) {
    //     case "uz":
    //       return "uzbek";
    //     case "ru":
    //       return "rus";
    //     case "en":
    //       return "english";
    //   }
    // }
    // let basa = Students;

    // const multiChange = (key, value) => {
    //   this.setState({ [key]: value });
    // };
    return (
      <>
        <div className="input-change">
          {/* <input
            type="text"
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <p>{this.state.text}</p> */}
          {/* <select
            name="sel"
            id="sel"
            onChange={(e) => this.setState({ language: e.target.value })}
          >
            <option value="uz">Uz</option>
            <option value="en">EN</option>
            <option value="ru">Ru</option>
          </select>
          <p> bu til : {changing(this.state.language)}</p> */}
          {/* <label htmlFor="">
            HTML{" "}
            <input
              type="checkbox"
              onChange={(e) => this.setState({ html: e.target.checked })}
            />
          </label>
          <label htmlFor="">
            CSS{" "}
            <input
              type="checkbox"
              onChange={(e) => this.setState({ css: e.target.checked })}
            />
          </label>
          <label htmlFor="">
            JS{" "}
            <input
              type="checkbox"
              onChange={(e) => this.setState({ js: e.target.checked })}
            />
          </label>
          <p>
            Foydalanuvchi {this.state.html && "html"} {this.state.css && "css"}{" "}
            {this.state.js && "js"}{" "}
            {this.state.html || this.state.css || this.state.js
              ? "ni biladi"
              : "hech narsani bilmaydi"}
          </p> */}
          {/* <table border={1} width={"600px"}>
            <thead>
              <tr>
                <th style={{ position: "sticky", top: 0, left: 0 }}>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>STAUS</th>
                <th>OCCUPATION</th>
                <th style={{ position: "sticky", top: 0, right: 0 }}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {basa.map((v) => {
                return (
                  <tr>
                    <td style={{ position: "sticky", top: 0, left: 0 }}>
                      {v.id}
                    </td>
                    <td>{v.name}</td>
                    <td>{v.age}</td>
                    <td>{v.status}</td>
                    <td>{v.occupation}</td>
                    <td style={{ position: "sticky", top: 0, right: 0 }}>
                      <button>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
          {/* <input
            type="text"
            name="first"
            onChange={(e) => multiChange(e.target.name, e.target.value)}
          />
          <input
            type="text"
            name="last"
            onChange={(e) => multiChange(e.target.name, e.target.value)}
          />
          <p>
            Firstname:{this.state.first} Lastname:{this.state.last}
          </p> */}
        </div>
      </>
    );
  }
}
export default Lesson4Extra;
