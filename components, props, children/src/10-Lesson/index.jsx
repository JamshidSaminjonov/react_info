import React, { useState, useEffect } from "react";
import Header from "./header/header";
import Body from "./body.jsx/body";

const FunctionalComponant = (props) => {
  //   const [user, setUser] = useState(["a", "b", "c", "d"]);
  //   const ondelete = (v) => {
  //     let res = user.filter((value) => value != v);
  //     setUser(res);
  //   };

  const [change, setChange] = useState("users");
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const hendleSize = () => {
    console.log();
  };
  const handleWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  /////////////UseEffect haqida
  //1 bu holatda render yursa yuradi
  //   useEffect(() => {
  //     console.log("eseff ishladi");
  //   });
  //2 bu bir marta ishlaydi, bazadan malumotni bir marta olvolish  uchun ishlaydi
  //   useEffect(() => {
  //     console.log(
  //       fetch("https://jsonplaceholder.typicode.com/todos/1")
  //         .then((response) => response.json())
  //         .then((json) => console.log(json))
  //     );
  //   }, []);
  //3. bu holatda dependendiies ichida nima uzgarsa usha ishlaydi
  //   useEffect(() => {
  //     console.log(
  //       fetch(`https://jsonplaceholder.typicode.com/${change}`)
  //         .then((response) => response.json())
  //         .then((json) => setData(json))
  //     );
  //   }, [change]);
  //   console.log([json]);
  // windowning  insetwidthni topish

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return window.removeEventListener("resize", handleWidth);
  }, []);

  //
  //   const onchange = (v) => {
  //     setChange(v);
  //   };
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Plus
      </button>
      <button onClick={() => setChange("users")}>Users</button>
      <button onClick={() => setChange("comments")}>Commits</button>
      <button onClick={() => setChange("posts")}>Posts</button>
      <hr />
      <div>
        {data.map((v) => (
          <pre key={v.id}>`${JSON.stringify(v)}`</pre>
        ))}
      </div>
      <p>{windowWidth}</p>
    </div>
  );
};
export default FunctionalComponant;
