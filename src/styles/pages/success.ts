import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    marginTop: "3rem",
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    lineHeight: 1.4,
    marginTop: "2rem",
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImagesContainer = styled("section", {
  display: "flex",
  alignItems: "center",

  "div + div": {
    marginLeft: "calc(-140px /2)",
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 140,
  height: 140,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%);",
  padding: "0.25rem",
  marginTop: "4rem",

  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",
  borderRadius: "1000px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    objectFit: "cover",
  },
});
