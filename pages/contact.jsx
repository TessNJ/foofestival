import React from "react";
import Image from "next/image";
import HeadInfo from "../components/Head";

export default function Contact(props) {
  return (
    <>
      <HeadInfo>Contact</HeadInfo>
      <main className="contactMain">
        <article>
          <h1>Lorem Ipsum</h1>
          <h3>Lorem ipsum dolor sit.</h3>
          <p>Lorem ipsum dolor sit amet </p>
          <p>quo veniam earum 11231231</p>
          <p>lorem@ipsum.dol</p>
        </article>
        <article>
          <Image src={"/RuneStone-FooFestival.svg"} width={"500"} height={"500"} alt=""></Image>
        </article>
      </main>
    </>
  );
}
