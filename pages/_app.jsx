import "../styles/globals.scss";
import Layout from "../components/Layout";
import React from "react";
import react from "react";

function MyApp({ Component, pageProps }) {
  const [allData, setAllData] = react.useState({});
  function recieveData(props) {
    console.log(props);
    setAllData(props);
  }
  return (
    <Layout>
      <Component {...pageProps} recieveData={recieveData} allData={allData} />
    </Layout>
  );
}

export default MyApp;
