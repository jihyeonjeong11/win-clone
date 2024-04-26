import useTestContexts from "contexts/testComp/useTestContext";

const TestContent: FC = () => {
  const { testValue } = useTestContexts();
  return (
    <div>
      <span>{testValue}</span> from TestContent!
    </div>
  );
};

export default TestContent;
