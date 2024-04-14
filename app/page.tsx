'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Landing = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/mountain.jpeg"
        alt="Mountain Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="pointer-events-none select-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
      <div className="z-10 text-center p-5">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-none">
          Laughing Sherpa
        </h1>
        <p className="mt-4 text-3xl md:text-4xl font-light text-white">
          Your Fuel In Moving Mountains
        </p>
      </div>
    </div>
  );
}

const Story = () => {
  const [showNextButton, setShowNextButton] = useState(false);
  const scrollRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const productsElement = document.getElementById('Products');
      if (productsElement) {
        const productsPosition = productsElement.getBoundingClientRect().top;
        const showButton = productsPosition > window.innerHeight / 2;
        setShowNextButton(showButton);
      }
    };

    const handleScrollClick = () => {
      scrollToElement('Products');
      setShowNextButton(false);
    };

    window.addEventListener('scroll', handleScroll);

    if (scrollRef.current) {
      scrollRef.current.addEventListener('click', handleScrollClick);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('click', handleScrollClick);
      }
    };
  }, []);

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 md:px-20 bg-gradient-to-b from-[#f0e5d8] to-[#c0e0e8] relative">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
        Our Story
      </h1>
      <div className="max-w-4xl text-center text-lg md:text-xl text-gray-700 space-y-6">
        <p className="font-semibold text-gray-800">
          <span className="text-sky-600">The Laughing Sherpa</span> is a tribute to our deep affection for the Himalayas and our profound admiration for the pillars of Nepal's mountaineering community – the Sherpas.
        </p>
        <p>
          In the face of challenging conditions, the Sherpas tirelessly safeguard the spirits of the Himalayas and help countless individuals realize their dreams of achieving the impossible.
        </p>
        <p>
          Discover the authentic taste of Nepal with our adventure meal packs, thoughtfully made for both taste and nutrition, reminiscent of the comfort of home.
        </p>
      </div>
      {showNextButton && (
        <div className="absolute bottom-8 z-10 flex justify-center">
          <button
            ref={scrollRef}
            className="bg-white rounded-full p-2 flex items-center justify-center"
          >
            <NavigateNextIcon fontSize="large" />
          </button>
        </div>
      )}
    </section>
  );
};

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price }) => (
  <div className="flex flex-col gap-2">
    <Image
      alt="Product image"
      className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center border border-gray-200 dark:border-gray-800"
      src="/placeholder.svg"
      width={400}
      height={400}
    />
    <div className="flex flex-col items-center gap-1">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      <p className="font-bold">${price}</p>
    </div>
  </div>
);

const Products = () => (
  <section className="py-12 md:py-24 lg:py-32">
    <div className="container mx-auto px-4">
      <div className="space-y-3 mb-12 text-center">
        <h2 className="text-3xl font-beautiful tracking-tighter sm:text-4xl md:text-5xl mx-auto/none">
          Featured Products
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          These are our top-selling products. Don't miss out!
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-t pt-6 border-gray-200 dark:border-gray-800">
        <ProductCard
          title="Product One"
          description="Description of product one."
          price={19.99}
        />
        <ProductCard
          title="Product Two"
          description="Description of product two."
          price={24.99}
        />
        <ProductCard
          title="Product Three"
          description="Description of product three."
          price={29.99}
        />
        <ProductCard
          title="Product Four"
          description="Description of product four."
          price={34.99}
        />
      </div>
    </div>
  </section>
);

export default function Home() {
  const [showButton, setShowButton] = useState(true);
  const scrollRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const storyElement = document.getElementById('Story');
      if (storyElement) {
        const storyPosition = storyElement.getBoundingClientRect().top;
        const showButton = storyPosition > window.innerHeight / 2;
        setShowButton(showButton);
      }
    };

    const handleScrollClick = () => {
      scrollToElement('Story');
      setShowButton(false);
    };

    window.addEventListener('scroll', handleScroll);

    if (scrollRef.current) {
      scrollRef.current.addEventListener('click', handleScrollClick);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('click', handleScrollClick);
      }
    };
  }, []);

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div id="Landing">
        <Landing />
        {showButton && (
          <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
            <button
              ref={scrollRef}
              className="p-2 flex items-center justify-center"
              onClick={() => setShowButton(false)}
            >
              <ExpandMoreIcon fontSize="large" />
            </button>
          </div>
        )}
      </div>
      <div id="Story">
        <Story />
      </div>
      <div id="Products">
        <Products />
      </div>
    </div>
  );
}