import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>My first post </h1>
      <h2>
        <Link href="/">
          <a>Go to root page </a>
        </Link>
      </h2>
    </>
  );
}
