import Head from "next/head";

export default function HeadInfo(props) {
  return (
    <Head>
      <title>{props.children}</title>
    </Head>
  );
}
