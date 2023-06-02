import { css } from "@stitches/react";
import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1440px)))",
  marginX: "auto",
  minHeight: 656,
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%);",
  borderRadius: 8,
  position: "relative",
  overflow: "hidden",
  minWidth: 696,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0,0,0,0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },
    span: {
      fontSize: "$xl",
      fontweight: "bold",
      color: "$green300",
    },

    "& > div:first-child": {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },

    button: {
      cursor: "pointer",
      padding: "12px",
      borderRadius: "6px",
      border: 0,
      background: "$green500",

      "&:hover": {
        background: "$green300",
      },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
