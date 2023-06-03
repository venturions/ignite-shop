/* eslint-disable no-unused-vars */

import { enqueueSnackbar } from "notistack";
import { create } from "zustand";

export interface ProductProps {
  id: string;
  imageUrl: string;
  name: string;
  price: string;
}

interface ProductsContextType {
  cartItems: ProductProps[];
  addItemToCart: (product: ProductProps) => void;
  removeItemFromCart: (productId: string) => void;
  totalPrice: string;
}

const calculateTotalPrice = (cartItems: ProductProps[]): number => {
  return cartItems.reduce((total, item) => {
    const price =
      parseFloat(item.price.replace("R$ ", "").replace(",", ".")) * 100;
    return total + price;
  }, 0);
};

const formatPrice = (price: number): string => {
  const formattedPrice = (price / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formattedPrice;
};

export const useProductsStore = create<ProductsContextType>((set) => ({
  cartItems: [],
  addItemToCart: (product: ProductProps) =>
    set((state) => {
      // Verificar se o produto já existe no carrinho
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        enqueueSnackbar(
          "Item já presente no carrinho, por favor selecione outro item.",
          { variant: "error" }
        );
        // Se o produto já existe, retornar o estado atual sem modificação
        return state;
      }

      const newCartItems = [...state.cartItems, { ...product }];
      const totalPrice = formatPrice(calculateTotalPrice(newCartItems));
      enqueueSnackbar("Item adicionado com sucesso.", { variant: "success" });
      return { cartItems: newCartItems, totalPrice };
    }),
  removeItemFromCart: (productId: string) =>
    set((state) => {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== productId
      );
      const totalPrice = formatPrice(calculateTotalPrice(updatedCartItems));
      return { cartItems: updatedCartItems, totalPrice };
    }),
  totalPrice: "0",
}));
