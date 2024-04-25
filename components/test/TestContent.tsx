import useTestContexts from "contexts/test/useTestContext";

const TestContent: FC = () => {
  const { testValue } = useTestContexts();
  return <div>{testValue} from TestContent!</div>;
};

export default TestContent;
