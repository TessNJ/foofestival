import React from "react";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <div>
          <Image alt=""></Image>
          <h3>FooFestival</h3>
        </div>
        <div></div>
      </header>
      <main>{children}</main>
      <footer>
        <div>
          <Image alt=""></Image>
          <h5>FooFestival</h5>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
