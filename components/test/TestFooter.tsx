import useTestContexts from "contexts/test/useTestContext";

const TestFooter: FC = () => {
  const { testValue } = useTestContexts();
  return <div>{testValue} from TestContent!</div>;
};

export default TestFooter;
