import Head from "next/head";
import TestComp from "components/test";

const Home = (): React.ReactElement => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta content="Generated by create next app" name="description" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link href="/favicon.ico" rel="icon" />
    </Head>
    <main>
      <TestComp />
    </main>
  </>
);
export default Home;
