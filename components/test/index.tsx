import { memo } from "react";
import TestTitle from "components/test/TestTitle";
import TestContent from "components/test/TestContent";
import TestFooter from "components/test/TestFooter";
import { type TestContextState } from "contexts/test/types";

export type TestProps = Pick<TestContextState, "testValue">;

const TestComp = (): React.ReactElement => (
  <>
    <TestTitle />
    <TestContent />
    <TestFooter />
  </>
);

export default memo(TestComp);
