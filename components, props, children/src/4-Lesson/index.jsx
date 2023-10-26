import React from "react";
import { ReactDOM } from "react";
import Cards from "./card";
import apple from "../../../1.intro/src/assets/apple.png";
import bananas from "../assets/bananas.png";
import blueberry from "../assets/blueberry.png";
import cherries from "../assets/cherries.png";
import dragon_fruit from "../assets/dragon-fruit.png";
import lemon from "../assets/lemon.png";
import orange from "../assets/orange.png";
import passion_fruit from "../assets/passion-fruit.png";
import raspberry from "../assets/raspberry.png";
import strawberry from "../assets/strawberry.png";
import sun from "../assets/sun2.png";
import moon from "../assets/night.png";
import "./index.css";
class Lesson4 extends React.Component {
  constructor(param) {
    super(param),
      (this.state = {
        bgcolor: "#222",
        color: "white",
        btn: "btn btn-moon",
        btn1: "btn btn-moon1",
      });
  }
  render() {
    let fruit = [
      {
        href: apple,
        title: "Apple",
        color: "rgb(243, 180, 183)",
      },
      {
        href: bananas,
        title: "Bananas",
        color: "rgb(237, 243, 180)",
      },
      {
        href: blueberry,
        title: "Blueberry",
        color: "rgb(180, 225, 243)",
      },
      {
        href: cherries,
        title: "Cherries",
        color: "rgb(238, 192, 195)",
      },
      {
        href: dragon_fruit,
        title: "Dragon fruit",
        color: "rgb(243, 208, 180)",
      },
      {
        href: lemon,
        title: "Lemon",
        color: "rgb(245, 238, 174)",
      },
      {
        href: orange,
        title: "Orange",
        color: "rgb(230, 243, 170)",
      },
      {
        href: passion_fruit,
        title: "Passion fruit",
        color: "rgb(180, 200, 243)",
      },
      {
        href: raspberry,
        title: "Raspberry",
        color: "rgb(243, 180, 209)",
      },
      {
        href: strawberry,
        title: "Strawberry",
        color: "rgb(180, 239, 243)",
      },
      {
        href: strawberry,
        title: "Strawberry",
        color: "rgb(180, 243, 196)",
      },
      {
        href: lemon,
        title: "Lemon",
        color: "rgb(239, 243, 180)",
      },
      {
        href: raspberry,
        title: "Raspberry",
        color: "rgb(192, 180, 243)",
      },
      {
        href: cherries,
        title: "Cherries",
        color: "rgb(230, 180, 243)",
      },
      {
        href: bananas,
        title: "Bananas",
        color: "rgb(221, 243, 180)",
      },
    ];
    const btn = (e) => {};

    return (
      <>
        {/* <div
          className="fruits-container"
          style={{
            backgroundColor: this.state.bgcolor,
            paddingTop: "20px",
            fontFamily: "monospace",
            position: "relative",
          }}
        >
          <h1
            className="text-fruit"
            style={{
              width: "200px",
              textAlign: "center",
              color: this.state.color,
              margin: "20px auto",
              border: "3px dashed",
              borderColor: this.state.color,
              fontSize: "50px",
              padding: "10px 15px",
            }}
          >
            Fruits
          </h1>
          <div
            className="fruits-item__container"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {fruit.map((value) => {
              return (
                <Cards
                  color={value.color}
                  title={value.title}
                  href={value.href}
                  cardColor={this.state.color}
                />
              );
            })}
          </div>
          <div
            className={this.state.btn}
            style={{ position: "absolute", top: "50px", right: "70px" }}
          >
            <button
              className="sun"
              onClick={() => {
                this.state.bgcolor == "rgb(237 247 249)" &&
                  this.setState({
                    bgcolor: "#222",
                    color: "#fff",
                    btn: "btn btn-sun",
                  });
                btn();
              }}
            >
              <img src={moon} alt="yuq" width={"50px"} height={"50px"} />
            </button>
            <button
              className="moon"
              onClick={() => {
                this.state.bgcolor == "#222" &&
                  this.setState({
                    bgcolor: "rgb(237 247 249)",
                    color: "#811704",
                    btn: "btn btn-moon ",
                  });
                btn();
              }}
            >
              <img src={sun} alt="yuq" />
            </button>
          </div>
          <div
            className={this.state.btn1}
            style={{ position: "absolute", top: "50px", left: "70px" }}
          >
            <button
              className="sun"
              onClick={() => {
                this.state.bgcolor == "rgb(237 247 249)" &&
                  this.setState({
                    bgcolor: "#222",
                    color: "#fff",
                    btn1: "btn btn-sun1",
                  });
                btn();
              }}
            >
              <img src={moon} alt="yuq" width={"50px"} height={"50px"} />
            </button>
            <button
              onClick={() => {
                this.state.bgcolor == "#222" &&
                  this.setState({
                    bgcolor: "rgb(237 247 249)",
                    color: "#811704",
                    btn1: "btn btn-moon1 ",
                  });
                btn();
              }}
            >
              <img src={sun} alt="yuq" />
            </button>
          </div>
        </div> */}
      </>
    );
  }
}
export default Lesson4;
