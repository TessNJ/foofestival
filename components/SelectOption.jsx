import React from "react";

export default function SelectOption(props) {
  return <option value={props.value}>{props.title}</option>;
}
