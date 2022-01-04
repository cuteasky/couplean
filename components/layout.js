import Head from "next/head";
import Navbar from "./navbar";
export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <Navbar />

      <div className="container mt-8">{props.children}</div>
    </div>
  );
}
