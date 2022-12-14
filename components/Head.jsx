import Head from "next/head";

export default function HeadInfo(props) {
  return (
    <>
      <Head>
        <title>{props.children}</title>
      </Head>
      <meta name="description" content="Buy a ticket for this years FooFestival, where you can enjoy rock 24/7. Scheduleing will be added closer to the time." />
    </>
  );
}
