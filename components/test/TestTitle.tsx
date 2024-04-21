import { TestContextState } from "contexts/test/types";
import React from "react";

const TestTitle: FC<TestContextState> = ({ testValue, modifyTestValue }) => {
  return (
    <>
      <div>TestTitle</div>
      <span>{testValue}</span>
      <button onClick={() => modifyTestValue("+")}>+</button>
      <button onClick={() => modifyTestValue("-")}>-</button>
      <button onClick={() => modifyTestValue("reset")}>reset</button>
    </>
  );
};

export default TestTitle;
