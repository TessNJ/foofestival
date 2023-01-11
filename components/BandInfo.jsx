import React from "react";
import Image from "next/image";

export default function BandInfo({ data }) {
  console.log(data.logo);

  /*   let src; */
  let src = "https://placeimg.com/720/480/animals?85800";
  /*   if (data.logo.includes("https://")) {
    src = data.logo;
  } else if (!data.logo.includes("https://")) {
    // src = `localhost:8080/logos/${data.logo}`;
    src = `https://fooapi.fly.dev/logos/${data.logo}`;
    // console.log(`https://fooapi.fly.dev/logos/${data.logo}`);
  } */

  function displayInfo(e) {
    e.currentTarget.nextElementSibling.classList.remove("hidden");
  }
  function hideInfo(e) {
    e.currentTarget.parentElement.parentElement.parentElement.classList.add("hidden");
  }
  return (
    <article className="bandIndiv">
      <div>
        <h5>{data.name}</h5>
        <p className="textItalic">{data.genre}</p>
      </div>
      <button
        onClick={(e) => {
          displayInfo(e);
        }}
      >
        Read more
      </button>
      <div className="moreInfo hidden">
        <div className="bandsInfoDiv">
          <div>
            <Image alt="" src={src} width="200" height="200" />
            <h4>{data.name}</h4>
            <p>{data.genre}</p>
          </div>
          <div className="mainInfo">
            <p>
              <span className="textImportant textItalic">Members:&nbsp;</span>
              {data.members.map((e) => {
                return `${e}, `;
              })}
            </p>
            <p>
              <span className="textImportant textItalic">Bio:</span>
              &nbsp;{data.bio}
            </p>
            <button
              className="closeButton"
              onClick={(e) => {
                hideInfo(e);
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
