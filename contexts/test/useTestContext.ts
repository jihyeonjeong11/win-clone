import { useState } from "react";
import { TestCommand, TestContextState } from "./types";

const useTestContexts = (): TestContextState => {
  const [testValue, setTestValue] = useState<number>(0);

  const modifyTestValue = (command: TestCommand) => {
    switch (command) {
      default:
        setTestValue(0);
        break;
      case "+":
        setTestValue((prev) => prev + 1);
        break;
      case "-":
        setTestValue((prev) => prev - 1);
        break;
    }
  };

  return { testValue, modifyTestValue };
};

export default useTestContexts;
