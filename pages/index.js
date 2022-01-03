import Link from "next/link";

import { authInitialProps } from "../lib/auth";

import Layout from "../components/Layout";

const Home = (props) => (
  <Layout title="Home" {...props}>
    <Link href="/profile">
      <a>Go to profile</a>
    </Link>
  </Layout>
);

Home.getInitialProps = authInitialProps();

export default Home;
