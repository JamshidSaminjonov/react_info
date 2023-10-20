import React, { Component } from "react";
import "./header.css";
import apple from "../assets/apple.png";
import bananas from "../assets/bananas.png";
import blueberry from "../assets/blueberry.png";
import cherries from "../assets/cherries.png";
import dragon_fruit from "../assets/dragon-fruit.png";
import lemon from "../assets/lemon.png";
import orange from "../assets/orange.png";
import passion_fruit from "../assets/passion-fruit.png";
import raspberry from "../assets/raspberry.png";
import strawberry from "../assets/strawberry.png";
import Fruit from "./fruits";

class Header extends React.Component {
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
    return (
      <>
        <header>
          <h1>Fruit</h1>
          <div className="fruits">
            {fruit.map((value) => {
              return (
                <Fruit
                  href={value.href}
                  title={value.title}
                  color={value.color}
                />
              );
            })}
          </div>
        </header>
      </>
    );
  }
}

export default Header;
