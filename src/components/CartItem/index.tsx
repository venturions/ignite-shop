import { CartItemContainer, ImageContainer, ItemInfoContainer } from "./styles";
import Image from "next/image";

import camiseta1 from "../../assets/camisetas/2.png";

export default function CartItem() {
  return (
    <CartItemContainer>
      <ImageContainer>
        <Image src={camiseta1} alt={""} width={95} height={95} />
      </ImageContainer>
      <ItemInfoContainer>
        <div>
          <label>Camiseta Beyond the Limits</label>
          <span>R$ 79,90</span>
        </div>
        <button>Remover</button>
      </ItemInfoContainer>
    </CartItemContainer>
  );
}
