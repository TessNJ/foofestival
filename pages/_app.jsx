import "../styles/globals.scss";
import Layout from "../components/Layout";
import React, { useState } from "react";
import react from "react";

function MyApp({ Component, pageProps }) {
  const [allData, setAllData] = react.useState({});
  const [timeLeft, setTimeLeft] = react.useState(0);
  const [orderStatus, setOrderStatus] = react.useState({ id: null });
  function recieveData(props) {
    setAllData(props);
  }
  function recieveTime(props) {
    setTimeLeft(props);
  }
  function recieveStatus(props) {
    setOrderStatus(props);
  }
  return (
    <Layout>
      <Component {...pageProps} recieveTime={recieveTime} recieveData={recieveData} allData={allData} timeLeft={timeLeft} recieveStatus={recieveStatus} orderStatus={orderStatus} />
    </Layout>
  );
}

export default MyApp;
