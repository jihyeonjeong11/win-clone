import { memo } from "react";
import { TestProvider } from "contexts/testComp";
import TestTitle from "components/testComp/TestTitle";
import TestContent from "components/testComp/TestContent";
import TestFooter from "components/testComp/TestFooter";
import { type TestContextState } from "contexts/testComp/types";

export type TestProps = Pick<TestContextState, "testValue">;

const TestComp = (): React.ReactElement => (
  <TestProvider>
    <TestTitle />
    <TestContent />
    <TestFooter />
  </TestProvider>
);

export default memo(TestComp);
