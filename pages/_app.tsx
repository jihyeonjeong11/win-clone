import { type AppProps } from "next/app";
import { TestProvider } from "contexts/test";

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <TestProvider>
    <Component {...pageProps} />
  </TestProvider>
);
export default App;
