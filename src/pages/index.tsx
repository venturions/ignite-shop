/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Head from "next/head";

import { useKeenSlider } from "keen-slider/react";

import { HomeContainer, Product } from "../styles/pages/home";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Arrow from "../components/CarouselArrow";
import { Handbag } from "phosphor-react";
import { useEffect, useState } from "react";
import { useHeaderContext } from "../contexts/HeaderContext";

import "keen-slider/keen-slider.min.css";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const changeHeaderVariant = useHeaderContext(
    (state) => state.changeHeaderVariant
  );

  useEffect(() => {
    changeHeaderVariant("initial");
  }, []);

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product, index) => {
          return (
            <Product
              href={`/product/${product.id}`}
              key={product.id}
              className={`keen-slider__slide number-slide${index}`}
            >
              <Image
                src={product.imageUrl}
                width={520}
                height={480}
                alt={`Imagem da ${product.name}`}
              />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <button>
                  <Handbag
                    weight="bold"
                    color="white"
                    size={32}
                    alt="Icone de uma mala, indicando que você pode adicionar o item no carrinho"
                  />
                </button>
              </footer>
            </Product>
          );
        })}

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 3
              }
            />
          </>
        )}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
    };
  });

  return {
    props: { products },
    revalidate: 60 * 60 * 2,
  };
};
