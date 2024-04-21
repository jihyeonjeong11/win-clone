export type TestContextState = {
  testValue: number;
  modifyTestValue: (command: TestCommand) => void;
};

export type TestCommand = "+" | "-" | "reset";
