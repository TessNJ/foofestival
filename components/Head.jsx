import Head from "next/head";

export default function HeadInfo(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <meta name="description" content={props.children} />
    </>
  );
}
