import { styled } from "@stitches/react";

export const ArrowSvg = styled("svg", {
  width: "48px",
  height: "48px",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  WebkitTransform: "translateY(-50%)",
  fill: "#fff",
  cursor: "pointer",

  "&.arrow--left": {
    left: "8px",
  },

  "&.arrow--right": {
    left: "auto",
    right: "8px",
  },

  "&.arrow--disabled": {
    display: "none",
  },
});
