import Image from "next/image";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import { useProductsStore } from "../../contexts/ProductsContext";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
  //   useState(false);

  const addItemToCart = useProductsStore((state) => state.addItemToCart);

  const router = useRouter();

  const [isRedirecting, setIsRedirecting] = useState(false);

  const addItemToCartAndRedirect = async () => {
    setIsRedirecting(true);
    await addItemToCart(product);
    router.push("/");
  };

  // async function handleBuyProduct() {
  //   try {
  //     setIsCreatingCheckoutSession(true);
  //     const response = await axios.post("/api/checkout", {
  //       priceId: product.defaultPriceId,
  //     });

  //     const { checkoutUrl } = response.data;

  //     window.location.href = checkoutUrl;
  //   } catch (err) {
  //     setIsCreatingCheckoutSession(false);
  //     alert("Falha ao redirecionar ao checkout!");
  //   }
  // }

  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading</p>;
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt=""></Image>
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <h1>{product.price}</h1>
          <p>{product.description}</p>
          <button disabled={isRedirecting} onClick={addItemToCartAndRedirect}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_NzzjrF6Q49aVlK" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
