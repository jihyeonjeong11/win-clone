import contextFactory from "contexts/contextFactory";
import useTestContext from "contexts/testComp/useTestContext";

const { Provider, useContext } = contextFactory(useTestContext);

export { Provider as TestProvider, useContext as useTestContext };
