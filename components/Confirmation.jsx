import React from "react";

export default function Confirmation(props) {
  const close = (event) => {
    event.preventDefault();
    location.reload();
    // props.getCurrentSection("infoGreet");
  };
  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatibus totam amet perferendis incidunt illum debitis in qui rerum officia, mollitia eos necessitatibus temporibus facere libero blanditiis distinctio culpa. Deleniti!
      </p>
      <button onClick={close}>Confirm</button>
    </div>
  );
}
