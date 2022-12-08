import "../styles/globals.scss";
import Layout from "../components/Layout";
import React from "react";
import react from "react";

function MyApp({ Component, pageProps }) {
  // const [allData, setAllData] = react.useState({});
  const [allData, setAllData] = react.useState([
    {
      area: "area",
      amount: 10,
    },
    {
      type: { typeName: "Standard Ticket", typePrice: 1499 },
      extras: {
        parking: false,
        backstage: true,
      },
      fullName: "hello theere",
      email: "somethin@dgbrb",
      address: {
        street: "tntrny",
        city: "heergerg",
        country: "tyhrh",
      },
    },
    [
      {
        name: "guest 1",
        email: "email1",
      },
      {
        name: "guest 2",
        email: "email2",
      },
    ],
  ]);
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
