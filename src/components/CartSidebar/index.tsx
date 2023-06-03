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
import { useProductsStore } from "../../contexts/ProductsContext";

interface CartSidebarProps {
  openCartSidebar: boolean;
  handleCloseSidebar: () => void;
}

export default function CartSidebar({
  openCartSidebar,
  handleCloseSidebar,
}: CartSidebarProps) {
  const cartItems = useProductsStore((state) => state.cartItems);
  const cartItemsTotalValue = useProductsStore((state) => state.totalPrice);

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
            <button>Finalizar compra</button>
          </div>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
}
