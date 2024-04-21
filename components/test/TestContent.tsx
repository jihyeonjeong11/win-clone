import React from "react";
import { TestProps } from ".";

const TestContent: FC<TestProps> = ({ testValue }) => {
  return (
    <>
      <div>{testValue} from TestContent!</div>
    </>
  );
};

export default TestContent;
