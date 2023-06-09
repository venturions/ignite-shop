import { AppProps } from "next/app";
import logoImg from "../assets/logo.svg";
import Image from "next/image";
import { CartButton, Container, Header } from "../styles/pages/app";
import { globalStyles } from "../styles/global";
import { Handbag } from "phosphor-react";
import CartSidebar from "../components/CartSidebar";
import { useState } from "react";
import { useProductsContext } from "../contexts/ProductsContext";
import { SnackbarProvider } from "notistack";
import { useHeaderContext } from "../contexts/HeaderContext";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [openCartSidebar, setOpenCartSidebar] = useState(false);
  const cartItems = useProductsContext((state) => state.cartItems);
  const headerVariant = useHeaderContext((state) => state.variant);

  const handleCloseSidebar = () => {
    setOpenCartSidebar(false);
  };

  return (
    <Container>
      <SnackbarProvider autoHideDuration={2000}>
        <Header variant={headerVariant}>
          <Image src={logoImg} alt="" />
          {headerVariant === "initial" && (
            <CartButton
              disabled={cartItems.length === 0}
              onClick={() => {
                setOpenCartSidebar(true);
              }}
              cartIsNotEmpty={cartItems.length > 0}
              number-of-items={
                cartItems.length > 0 ? cartItems.length : undefined
              }
            >
              <Handbag
                weight="bold"
                size={32}
                alt="Icone de uma mala, indicando que você pode adicionar o item no carrinho"
              />
            </CartButton>
          )}
        </Header>
        <CartSidebar
          openCartSidebar={openCartSidebar}
          handleCloseSidebar={handleCloseSidebar}
        ></CartSidebar>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Container>
  );
}
