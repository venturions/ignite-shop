import { styled } from "../../styles";

export const SidebarContainer = styled("aside", {
  display: "flex",
  flexDirection: "column",
  width: "480px",
  background: "$gray800",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  height: "100vh",

  position: "absolute",
  zIndex: 1,
  right: 0,

  "& > div:first-child": {
    position: "relative",
    right: 0,
    top: 0,
    padding: "10px",
    alignSelf: "flex-end",

    button: {
      border: "none",
      cursor: "pointer",
      lineHeight: "0",

      svg: {
        boxSizing: "content-box",
        color: "$grayIcon",
        background: "$gray800",
      },
    },
  },

  variants: {
    openCartSidebar: {
      true: {
        display: "flex",
      },
      false: {
        display: "none",
      },
    },
  },
});

export const SidebarContent = styled("div", {
  padding: "3rem",
  display: "flex",
  justifyContent: "space-between",
  height: "100%",
  flexDirection: "column",

  "& > div:last-child": {
    button: {
      width: "100%",
      marginTop: "auto",
      backgroundColor: "$green500",
      border: 0,
      color: "$white",
      borderRadius: 8,
      padding: "1.25rem",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "$md",

      "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
      },

      "&:not(:disabled):hover": {
        backgroundColor: "$green300",
      },
    },

    h1: {
      fontWeight: "bold",
      fontSize: "$lg",
      lineHeight: "160%",

      color: "$gray100",
    },
  },
});

export const CartItemsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-end",
  padding: "0px",
  gap: "24px",
  marginTop: "2rem",
  overflowY: "auto",
  maxHeight: "500px",

  "&::-webkit-scrollbar": {
    width: "8px",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
  },

  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f1f1",
  },
});

export const CartInfoContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  marginBottom: "60px",
  padding: "0px",
  gap: "7px",

  div: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export const CartLabel = styled("label", {
  lineHeight: "160%",
  variants: {
    type: {
      quantity: {
        fontSize: "$sm",
      },
      totalValue: {
        fontSize: "$md",
        fontWeight: "bold",
      },
    },
  },
});
export const CartSpan = styled("span", {
  lineHeight: "160%",
  variants: {
    type: {
      quantity: {
        fontSize: "$md",
        color: "$gray300",
      },
      totalValue: {
        fontSize: "$xl",
        fontWeight: "bold",
      },
    },
  },
});
