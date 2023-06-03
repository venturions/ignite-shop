import { CartItemContainer, ImageContainer, ItemInfoContainer } from "./styles";
import Image from "next/image";
import {
  ProductProps,
  useProductsContext,
} from "../../contexts/ProductsContext";

interface CartItemProps {
  product: ProductProps;
}

export default function CartItem({ product }: CartItemProps) {
  const removeItemFromCart = useProductsContext(
    (state) => state.removeItemFromCart
  );

  return (
    <CartItemContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt={""} width={95} height={95} />
      </ImageContainer>
      <ItemInfoContainer>
        <div>
          <label>{product.name}</label>
          <span>{product.price}</span>
        </div>
        <button
          onClick={() => {
            removeItemFromCart(product.id);
          }}
        >
          Remover
        </button>
      </ItemInfoContainer>
    </CartItemContainer>
  );
}
