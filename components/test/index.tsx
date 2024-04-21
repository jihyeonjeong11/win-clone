import React, { memo } from "react";
import TestTitle from "./TestTitle";
import TestContent from "./TestContent";
import { useTestContext } from "contexts/test";
import TestFooter from "./TestFooter";
import type { TestContextState } from "contexts/test/types";

export type TestProps = Pick<TestContextState, "testValue">;

const TestComp = () => {
  const { modifyTestValue, testValue } = useTestContext();
  return (
    <>
      <TestTitle testValue={testValue} modifyTestValue={modifyTestValue} />
      <TestContent testValue={testValue} />
      <TestFooter testValue={testValue} />
    </>
  );
};

export default memo(TestComp);
