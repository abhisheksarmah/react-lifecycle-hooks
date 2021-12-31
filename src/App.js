import React, { useReducer, useState } from "react";
const initialState = [
  {
    id: Date.now(),
    name: "Abhishek",
    email: "abhi@gmail.com",
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((contact) => contact.id !== action.payload.id);
    default:
      throw new Error();
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addContact = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    dispatch({ type: "add", payload: { id: Date.now(), name, email } });
  };

  return (
    <div>
      <h1>Use Reducer hook</h1>
      <form onSubmit={addContact}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Add contact</button>
      </form>
      <ul>
        {state.map((contact) => {
          return (
            <li key={contact.id}>
              <h2>{contact.name}</h2>
              <p>{contact.email}</p>
              <button
                onClick={() =>
                  dispatch({ type: "delete", payload: { id: contact.id } })
                }
              >
                del
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
