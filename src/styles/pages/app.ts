import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1440,
  margin: "0 auto",

  button: {
    cursor: "pointer",
    padding: "12px",
    borderRadius: "6px",
    border: 0,
    background: "$gray800",

    svg: {
      color: "$grayIcon",
    },

    "&:hover": {
      background: "$green300",
    },
  },
});
