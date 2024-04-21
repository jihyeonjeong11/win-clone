import { TestProvider } from "contexts/test";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TestProvider>
      <Component {...pageProps} />
    </TestProvider>
  );
}
