import React from "react";

const Body = (props) => {
  return (
    <div>
      {props.user.map((v) => (
        <p key={v}>
          {v} <button onClick={() => props.delete(v)}>delete</button>
        </p>
      ))}
    </div>
  );
};
export default Body;
