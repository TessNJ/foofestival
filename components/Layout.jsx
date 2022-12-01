import React from "react";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <div className="logoDiv">
          <Image src={"/street-map-g0abaa0de0_1280.webp"} width={"50"} height={"50"} alt=""></Image>
          <h3>FooFestival</h3>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Schedule</li>
            <li>Tickets</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      {/* <>{children}</> */}
      <footer>
        <div>
          <Image src={"/street-map-g0abaa0de0_1280.webp"} width={"50"} height={"50"} alt=""></Image>
          <h5>FooFestival</h5>
        </div>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>Schedule</li>
            <li>Tickets</li>
            <li>Contact</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
