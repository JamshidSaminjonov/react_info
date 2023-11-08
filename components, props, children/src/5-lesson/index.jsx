import React from "react";
import { Students } from "./data";
import "./index.css";
let base = Students;
let user = {};
let user1 = {};
let inputUser = {};
class Lesson5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base,
      editId: null,
      newUser: {
        name: "",
        age: "",
        status: "",
        occupation: "",
      },
    };
  }
  render() {
    let { base, editId, inputUser } = this.state;
    console.log(this.state);
    //DELETE FUNCTION
    const deleteItem = (id) => {
      let res = base.filter((v) => v.id != id);
      this.setState({ base: res });
    };

    //EDIT FUNCTION
    const editItem = (id) => {};
    console.log(editId);

    //SAVEITEM FUNCTION
    const saveItem = (key, value) => {
      user1[key] = value;
    };

    //SAVEID
    const saveId = (id) => {
      console.log(user1);
      let res = base.map((items) => {
        if (items.id == id) {
          if (Object.values(user1)) return { ...items, ...user1 };
        } else {
          console.log(items);
          return items;
        }
      });
      console.log(res);

      this.setState({ base: res, editId: null });
    };

    // GET ITEM FROM INPUT
    const addItem = (key, value) => {
      user[key] = value;
      inputUser[key] = "salim";
    };

    //ADD ITEM IN STATE
    const addSetItem = () => {
      let res = [...base, { id: base[base.length - 1].id + 1, ...user }];
      Object.keys(user).length == 4
        ? this.setState({ base: res })
        : alert("inputlarni to'liq to'ldiring");
      user = {};
      console.log(user);
    };

    return (
      <>
        <div className="crud">
          <h1>CRUD in React</h1>
          {/* Add input */}
          <div className="inputs">
            {Object.keys(base[0]).map((v) => {
              if (v != "id") {
                if (v != "age") {
                  return (
                    <>
                      <input
                        value={this.state.newUser[v]}
                        type="text"
                        onChange={(e) => addItem(v, e.target.value)}
                      />
                    </>
                  );
                } else {
                  return (
                    <>
                      <input
                        type="number"
                        onChange={(e) => addItem(v, e.target.value)}
                      />
                    </>
                  );
                }
              }
            })}
            <button className="btn-input" onClick={() => addSetItem()}>
              Add
            </button>
          </div>
          {/* Add input */}

          {/* Table */}
          <table border={1}>
            {/* Thead */}
            <thead>
              <tr>
                {Object.keys(base[0]).map((v) => (
                  <th>{v}</th>
                ))}
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            {/* Thead */}
            <tbody>
              {base.map((items) => {
                return (
                  <tr>
                    {Object.values(items).map((value, index) =>
                      value != editId ? (
                        items.id !== editId ? (
                          <td>{value}</td>
                        ) : (
                          <td>
                            <input
                              type="text"
                              onChange={(e) =>
                                saveItem(
                                  Object.keys(items)[index],
                                  e.target.value
                                )
                              }
                              defaultValue={value}
                            />
                          </td>
                        )
                      ) : (
                        <td>{value}</td>
                      )
                    )}

                    {/* Delete */}
                    <td>
                      <button
                        onClick={() => deleteItem(items.id)}
                        style={{
                          color: "white",
                          backgroundColor: "red",
                          padding: "2px 8px",
                        }}
                      >
                        delete
                      </button>
                    </td>
                    {/* Delete */}

                    {/* Edit */}
                    {items.id == editId ? (
                      <td>
                        {/* Save */}
                        <button
                          style={{
                            color: "white",
                            backgroundColor: "green",
                            padding: "2px 8px",
                          }}
                          onClick={() => saveId(items.id)}
                        >
                          save
                        </button>
                        {/* Save */}

                        {/* Cansel */}
                        <button
                          style={{
                            color: "white",
                            backgroundColor: "red",
                            padding: "2px 8px",
                            marginLeft: "10px",
                          }}
                          onClick={() => this.setState({ editId: null })}
                        >
                          Cansel
                        </button>
                        {/* Cansel */}
                      </td>
                    ) : (
                      <td>
                        <button
                          style={{
                            color: "white",
                            backgroundColor: "green",
                            padding: "2px 8px",
                          }}
                          onClick={() => this.setState({ editId: items.id })}
                        >
                          edit
                        </button>
                      </td>
                    )}
                    {/* Edit */}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* Table */}
        </div>
      </>
    );
  }
}
export default Lesson5;
