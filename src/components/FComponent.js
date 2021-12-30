import { useEffect, useState } from "react";

export default function FComponent() {
  const [time, setTime] = useState(new Date().toString());
  const [message, setMessage] = useState("Funcitonal component");
  useEffect(() => {
    console.log("Component mounted or updated");
    const interval = setInterval(() => {
      showDate();
    }, 1000);
    return () => {
      console.log("Component unmount");
      clearInterval(interval);
    };
  }, [time]);
  const showDate = () => {
    console.log("running show date");
    setTime(new Date().toString());
  };
  return (
    <div>
      <div>{time}</div>
      <button onClick={showDate}>Show Date</button>
      <div>{message}</div>
      <button onClick={() => setMessage("changed functional component")}>
        Change message
      </button>
    </div>
  );
}
