import React from "react";
import { TestProps } from ".";

export function testHuskyEmpty() {}

const TestFooter: FC<TestProps> = ({ testValue }) => {
  return (
    <>
      <div>{testValue} from TestFooter!</div>
    </>
  );
};

export default TestFooter;
