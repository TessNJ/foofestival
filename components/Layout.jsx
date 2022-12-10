import React from "react";
import Image from "next/image";
import Anchor from "./Anchor";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <div className="logoDiv">
          <Image className="logo" src={"/street-map-g0abaa0de0_1280.webp"} width={"50"} height={"50"} alt=""></Image>
          <h3>
            <Anchor href={"/"}>FooFestival</Anchor>
          </h3>
        </div>
        <nav>
          <ul>
            <li>
              <Anchor href={"/"}>Home</Anchor>
            </li>
            <li>
              <Anchor href={"/schedule"}>Schedule</Anchor>
            </li>
            <li>
              <Anchor href={"/tickets"}>Tickets</Anchor>
            </li>
            <li>
              <Anchor href={"/contact"}>Contact</Anchor>
            </li>
          </ul>
        </nav>
      </header>
      {/* <main>{children}</main> */}
      <>{children}</>
      <footer>
        <div className="footerLogo">
          <Image className="logo" src={"/street-map-g0abaa0de0_1280.webp"} width={"50"} height={"50"} alt=""></Image>
          <h5>
            {" "}
            <Anchor href={"/"}>FooFestival</Anchor>
          </h5>
        </div>
        {/* <hr /> */}
        <div className="links">
          <h4>Links</h4>
          <ul>
            <li>
              <Anchor href={"/"}>Home</Anchor>
            </li>
            <li>
              <Anchor href={"/schedule"}>Schedule</Anchor>
            </li>
            <li>
              <Anchor href={"/tickets"}>Tickets</Anchor>
            </li>
            <li>
              <Anchor href={"/contact"}>Contact</Anchor>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
