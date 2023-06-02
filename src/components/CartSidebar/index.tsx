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

interface CartSidebarProps {
  openCartSidebar: boolean;
  handleCloseSidebar: () => void;
}

export default function CartSidebar({
  openCartSidebar,
  handleCloseSidebar,
}: CartSidebarProps) {
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
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </CartItemsContainer>
          </div>

          <div>
            <CartInfoContainer>
              <div>
                <CartLabel type="quantity">Quantidade</CartLabel>
                <CartSpan type="quantity">3 itens</CartSpan>
              </div>
              <div>
                <CartLabel type="totalValue">Valor total</CartLabel>
                <CartSpan type="totalValue">R$ 270,00</CartSpan>
              </div>
            </CartInfoContainer>
            <button>Finalizar compra</button>
          </div>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
}
