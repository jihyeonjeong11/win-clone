export type TestCommand = "+" | "-" | "reset";

export type TestContextState = {
  modifyTestValue: (command: TestCommand) => void;
  testValue: number;
};
