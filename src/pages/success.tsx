/* eslint-disable react-hooks/exhaustive-deps */

import Link from "next/link";
import Image from "next/image";
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import { Stripe } from "stripe";
import Head from "next/head";
import { useHeaderContext } from "../contexts/HeaderContext";
import { useEffect } from "react";

interface SuccessProps {
  customerName: string;
  productsImages: string[];
}

export default function Success({
  customerName,
  productsImages,
}: SuccessProps) {
  const changeHeaderVariant = useHeaderContext(
    (state) => state.changeHeaderVariant
  );

  useEffect(() => {
    changeHeaderVariant("finishedOrder");
  }, []);

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <SuccessContainer>
        <ImagesContainer>
          {productsImages.map((image) => {
            return (
              <ImageContainer key={image}>
                <Image
                  src={image}
                  height={140}
                  width={140}
                  alt="Imagem de uma camiseta"
                />
              </ImageContainer>
            );
          })}
        </ImagesContainer>
        <h1>Compra efetuada!</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{" "}
          {productsImages.length}
          {""} camisetas já está a caminho da sua casa.
        </p>
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const productsImages = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product;
    return product.images[0];
  });

  return {
    props: {
      customerName,
      productsImages,
    },
  };
};
