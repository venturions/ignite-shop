import { AppProps } from "next/app";
import logoImg from "../assets/logo.svg";

import Image from "next/image";
import { Container, Header } from "../styles/pages/app";
import { globalStyles } from "../styles/global";
import { Handbag } from "phosphor-react";
import CartSidebar from "../components/CartSidebar";
import { useState } from "react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [openCartSidebar, setOpenCartSidebar] = useState(false);

  const handleCloseSidebar = () => {
    setOpenCartSidebar(false);
  };

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <button
          onClick={() => {
            setOpenCartSidebar(true);
          }}
        >
          <Handbag
            weight="bold"
            size={32}
            alt="Icone de uma mala, indicando que você pode adicionar o item no carrinho"
          />
        </button>
      </Header>
      <CartSidebar
        openCartSidebar={openCartSidebar}
        handleCloseSidebar={handleCloseSidebar}
      ></CartSidebar>
      <Component {...pageProps} />
    </Container>
  );
}
