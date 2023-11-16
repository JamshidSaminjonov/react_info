import React, { useReducer, useState } from "react";
import "./style.css";

const UseReduceHook = () => {
  //   // const [count, setCount] = useState(0);
  //   const reducer = (state, action) => {
  //     console.log(action);
  //     switch (action.type) {
  //       case "dec":
  //         return state - 1;
  //       case "inc":
  //         return state + 1;
  //       case "byAmount":
  //         return state + 5;
  //       case "byAny":
  //         return state + 40;
  //       default:
  //         return state;
  //     }
  //   };
  //   const [count, dispatch] = useReducer(reducer, 0);
  // ------------------------------------------------------------------------
  //TODOS APP
  const todos = [
    { id: 1, title: "Wake Up", status: false },
    { id: 2, title: "Have A Shower", status: false },
    { id: 3, title: "Go To School", status: false },
    { id: 4, title: "Have A Lunch", status: false },
    { id: 5, title: "Go ToSleep", status: false },
  ];
  const [text, setText] = useState("");
  const [inpEdit, setInpEdit] = useState("");
  const reducer = (state, action) => {
    console.log(action);
    let res;
    switch (action.type) {
      case "delete":
        res = state.filter((v) => v.id != action.id);
        return (state = res);
      case "check":
        res = state.map((v) =>
          v.id == action.id ? { ...v, status: !v.status } : v
        );
        return (state = res);
      case "edit":
        res = state.map((v) =>
          v.id == action.id ? { ...v, edited: true } : v
        );
        return (state = res);
      case "addInp":
        user = action.value;
        return state;
      case "cansel":
        res = state.map((v) =>
          v.id == action.id ? { ...v, edited: false } : v
        );
        console.log(res);
        return (state = res);
      case "save":
        res = state.map((v) =>
          v.id == action.id ? { ...v, edited: false, title: inpEdit } : v
        );
        console.log(res);
        return (state = res);
      case "addText":
        let inptext = text;
        setText("");
        if (inptext.length > 0) {
          res = [
            ...state,
            {
              id: state[state.length - 1].id + 1,
              title: inptext,
              status: false,
            },
          ];
          return (state = res);
        } else return state;
      default:
        break;
    }
  };
  const [data, dispatch] = useReducer(reducer, todos);
  // const drawText = () => {
  //   return;
  // };

  return (
    <div>
      {/* <button onClick={() => dispatch({ type: "dec" })}>minus</button>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "inc" })}>plus</button>
      <hr />
      <button onClick={() => dispatch({ type: "byAmount" })}>+5</button>
      <button onClick={() => dispatch({ type: "byAny", payload: 40 })}>
        40
      </button> */}
      {/* <hr /> */}
      <br />
      <div className="add">
        <input
          value={text}
          type="text"
          placeholder="Add new"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => dispatch({ type: "addText", text: text })}>
          Add
        </button>
        <hr />
        <p>{text}</p>
      </div>
      <br />
      <table border={1}>
        <tbody>
          {data.map((v) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>
                {v.edited ? (
                  <input
                    type="text"
                    defaultValue={v.title}
                    onChange={(e) => setInpEdit(e.target.value)}
                  />
                ) : (
                  v.title
                )}
              </td>
              <td>
                <button>Check</button>
              </td>
              {v.edited ? (
                <td>
                  <button onClick={() => dispatch({ type: "save", id: v.id })}>
                    save
                  </button>
                  <button
                    onClick={() => dispatch({ type: "cansel", id: v.id })}
                  >
                    cansel
                  </button>
                </td>
              ) : (
                <td>
                  <button onClick={() => dispatch({ type: "edit", id: v.id })}>
                    Edit
                  </button>
                </td>
              )}

              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <br />
      <div className="add">
        <input type="text" placeholder="Add new" />
        <button>Add</button>
      </div>
      <br />
      <table border={1} width={500}>
        <tbody>
          {data.map((v, i) => (
            <tr key={i}>
              {Object.values(v).map(
                (value, index) =>
                  typeof value != "boolean" && (
                    <td key={index}>
                      {v.status && value != v.id ? (
                        <del style={{ opacity: 0.6 }}>{value}</del>
                      ) : (
                        value
                      )}
                    </td>
                  )
              )}
              <th>
                <button onClick={() => dispatch({ type: "check", id: v.id })}>
                  Check
                </button>
              </th>
              <th>
                <button onClick={() => dispatch({ type: "edit", id: v.id })}>
                  Edit
                </button>
              </th>
              <th>
                <button onClick={() => dispatch({ type: "delete", id: v.id })}>
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <br />
      <div className="add">
        <input type="text" placeholder="Add new" />
        <button>Add</button>
      </div>
      <br />
      <table border={1} width={500}>
        <tbody>
          {data.map((v, i) => (
            <tr key={i}>
              {Object.values(v).map((value, index) =>
                typeof value == "boolean" ? null : index != 0 ? (
                  <td
                    key={index}
                    style={
                      v.status
                        ? { color: "#949393", textDecoration: "line-through" }
                        : null
                    }
                  >
                    {value}
                  </td>
                ) : (
                  <td>{value}</td>
                )
              )}
              <th>
                <button onClick={() => dispatch({ type: "check", id: v.id })}>
                  Check
                </button>
              </th>
              <th>
                <button onClick={() => dispatch({ type: "edit", id: v.id })}>
                  Edit
                </button>
              </th>
              <th>
                <button onClick={() => dispatch({ type: "delete", id: v.id })}>
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UseReduceHook;
