import React from "react";
import useScreen from "../useScreen";

export default function ScreenComponent() {
  const screenSize = useScreen();
  return (
    <div>
      <h1>Screen Component</h1>
      <h2>We are in {screenSize} screen</h2>
    </div>
  );
}
