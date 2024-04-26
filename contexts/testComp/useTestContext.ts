import { useState } from "react";
import {
  type TestCommand,
  type TestContextState,
} from "contexts/testComp/types";

const useTestContexts = (): TestContextState => {
  const [testValue, setTestValue] = useState<number>(0);

  const modifyTestValue = (command: TestCommand): void => {
    switch (command) {
      case "+":
        setTestValue((prev) => prev + 1);
        break;
      case "-":
        setTestValue((prev) => prev - 1);
        break;
      default:
        setTestValue(0);
        break;
    }
  };

  return { modifyTestValue, testValue };
};

export default useTestContexts;
