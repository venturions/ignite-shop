import React from "react";
import { ArrowSvg } from "./styles";
import { CaretLeft, CaretRight } from "phosphor-react";

export default function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";

  return (
    <ArrowSvg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && <CaretLeft />}
      {!props.left && <CaretRight />}
    </ArrowSvg>
  );
}
