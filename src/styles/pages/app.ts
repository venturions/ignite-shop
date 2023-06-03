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
});

export const CartButton = styled("button", {
  padding: "12px",
  borderRadius: "6px",
  border: 0,
  background: "$gray800",

  svg: {
    color: "$white",
  },

  "&:disabled": {
    svg: { color: "$grayIcon" },
  },

  "&:not(:disabled):hover": {
    background: "$green300",
    cursor: "pointer",
  },

  position: "relative",

  "&:after": {
    content: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "8px",
    position: "absolute",
    width: "24px",
    height: "24px",
    right: "-7px",
    top: "-7px",
    background: "#00875F",
    border: "3px solid #121214",
    borderRadius: "1000px",
    color: "$white",
  },

  variants: {
    cartIsNotEmpty: {
      true: {
        "&:after": {
          content: "attr(number-of-items)", // Define o valor de content como o atributo data-content
        },
      },
    },
  },
});
