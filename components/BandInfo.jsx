import React from "react";
import Image from "next/image";

export default function BandInfo({ data }) {
  //   console.log(data.logo);

  let src;
  if (data.logo.includes("https://")) {
    src = data.logo;
  } else if (!data.logo.includes("https://")) {
    // src = `localhost:8080/logos/${data.logo}`;
    // src = `https://fooapi.fly.dev/logos/${data.logo}`;
    // console.log(`https://fooapi.fly.dev/logos/${data.logo}`);
  }
  return (
    <article>
      <h5>{data.name}</h5>
      <p className="textItalic">{data.genre}</p>
      <div className="moreInfo">
        <div>
          {/* <Image alt="" src={src} width="200" height="200" /> */}
          <p>
            <span className="textImportant textItalic">Members:&nbsp;</span>
            {data.members.map((e) => {
              return `${e}, `;
            })}
          </p>
          <p>{data.bio}</p>
        </div>
      </div>
    </article>
  );
}
