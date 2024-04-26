import useTestContexts from "contexts/testComp/useTestContext";

const TestFooter: FC = () => {
  const { testValue } = useTestContexts();
  return (
    <div>
      <span>{testValue}</span> from TestContent!
    </div>
  );
};

export default TestFooter;
