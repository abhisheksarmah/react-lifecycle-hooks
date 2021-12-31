import React, { useState, useRef, useEffect } from "react";

export default function UseRefComponent() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const inputEl = useRef();
  const previousCounterRef = useRef();
  const resetInput = () => {
    setName("");
    inputEl.current.focus();
  };
  useEffect(() => {
    previousCounterRef.current = counter;
  }, [counter]);
  return (
    <div>
      <input
        ref={inputEl}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={resetInput}>Reset</button>
      <div>My name is {name}</div>
      <hr></hr>
      <div>
        <h2>Random counter number {counter}</h2>
        <button onClick={() => setCounter(Math.ceil(Math.random() * 100))}>
          Generate number
        </button>
        {typeof previousCounterRef.current !== "undefined" && (
          <h2>Previous counter number {previousCounterRef.current}</h2>
        )}
      </div>
    </div>
  );
}
