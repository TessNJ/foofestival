import Head from "next/head";

export default function HeadInfo(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.children} />
        <link rel="shortcut icon" href="/Yggdrasil-logo.svg" />
      </Head>
    </>
  );
}
