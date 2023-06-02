import { styled } from "../../styles";

export const CartItemContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
});

export const ImageContainer = styled("div", {
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: "8px",
});

export const ItemInfoContainer = styled("div", {
  display: "flex",
  flex: "1",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "0px",

  div: {
    display: "flex",
    flexDirection: "column",
    padding: "0px",
    gap: "2px",

    label: {
      fontSize: "$md",
      lineHeight: "160%",
      color: "$gray300",
    },

    span: {
      fontWeight: "bold",
      color: "$gray100",
    },
  },

  button: {
    fontWeight: "bold",
    fontSize: "$sm",
    lineHeight: "160%",
    border: 0,
    color: "$green500",
    background: "transparent",
    cursor: "pointer",
  },
});
