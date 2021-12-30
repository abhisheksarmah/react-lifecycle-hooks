import { useState } from "react";

function App() {
  const [name, setName] = useState("Abhishek");
  const [flag, setFlag] = useState(false);
  const [steps, setSteps] = useState(inititalValue);
  const [names, setNames] = useState([]);
  //useful when we need to get the inital value from a api call or async operation
  function inititalValue() {
    console.log("use state called");
    return 0;
  }
  function changeName() {
    setFlag(!flag);
  }
  function increment() {
    setSteps((prevState) => prevState + 1);
    setSteps((prevState) => prevState + 1);
  }
  function decrement() {
    setSteps(steps - 1);
  }
  function addNames(e) {
    e.preventDefault();
    setNames([...names, { id: names.length, name }]);
    setName("");
  }
  return (
    <div className="App">
      <div>Hello, {flag ? name : ""}</div>
      <button onClick={changeName}>Change name</button>
      <hr></hr>
      <button onClick={increment}>+</button>
      <div>{steps}</div>
      <button onClick={decrement}>-</button>
      <hr></hr>
      <form onSubmit={addNames}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add name</button>
      </form>
      <hr></hr>
      <ul>
        {names.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
