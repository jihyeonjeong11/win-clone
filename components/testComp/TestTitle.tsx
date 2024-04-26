import useTestContexts from "contexts/testComp/useTestContext";

const TestTitle: FC = () => {
  const { testValue, modifyTestValue } = useTestContexts();
  return (
    <>
      <div>TestTitle</div>
      <span>{testValue}</span>
      <button onClick={() => modifyTestValue("+")} type="button">
        +
      </button>
      <button onClick={() => modifyTestValue("-")} type="button">
        -
      </button>
      <button onClick={() => modifyTestValue("reset")} type="button">
        reset
      </button>
    </>
  );
};

export default TestTitle;
