import contextFactory from "contexts/contextFactory";
import useTestContext from "contexts/test/useTestContext";

const { Provider, useContext } = contextFactory(useTestContext);

export { Provider as TestProvider, useContext as useTestContext };
