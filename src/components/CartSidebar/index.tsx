import { X } from "phosphor-react";
import {
  CartInfoContainer,
  CartItemsContainer,
  CartLabel,
  CartSpan,
  SidebarContainer,
  SidebarContent,
} from "./styles";
import CartItem from "../CartItem";
import { useProductsContext } from "../../contexts/ProductsContext";
import { useState } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";

interface CartSidebarProps {
  openCartSidebar: boolean;
  handleCloseSidebar: () => void;
}

export default function CartSidebar({
  openCartSidebar,
  handleCloseSidebar,
}: CartSidebarProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const cartItems = useProductsContext((state) => state.cartItems);
  const cartItemsTotalValue = useProductsContext((state) => state.totalPrice);

  async function handleBuyProduct() {
    const orderItems = cartItems.map((item) => {
      return { price: item.defaultPriceId, quantity: 1 };
    });

    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        lineItems: orderItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      enqueueSnackbar("Falha ao redirecionar ao checkout!", {
        variant: "error",
      });
    }
  }

  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading</p>;
  }

  return (
    <>
      <SidebarContainer openCartSidebar={openCartSidebar}>
        <div>
          <button onClick={handleCloseSidebar}>
            <X size={24} />
          </button>
        </div>
        <SidebarContent>
          <div>
            <h1>Sacola de compras</h1>
            <CartItemsContainer>
              {cartItems.length > 0 &&
                cartItems.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
            </CartItemsContainer>
          </div>

          <div>
            <CartInfoContainer>
              <div>
                <CartLabel type="quantity">Quantidade</CartLabel>
                <CartSpan type="quantity">{cartItems.length} itens</CartSpan>
              </div>
              <div>
                <CartLabel type="totalValue">Valor total</CartLabel>
                <CartSpan type="totalValue">{cartItemsTotalValue}</CartSpan>
              </div>
            </CartInfoContainer>
            <button
              onClick={handleBuyProduct}
              disabled={isCreatingCheckoutSession}
            >
              Finalizar compra
            </button>
          </div>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
}
