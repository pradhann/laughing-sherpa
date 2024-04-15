'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button, Card, CardContent, Typography } from '@mui/material';


const Landing = () => {
  const [showNextButton, setShowNextButton] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      const storyElement = document.getElementById('Story');
      if (storyElement) {
        const storyPosition = storyElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setShowNextButton(storyPosition > windowHeight / 2);
      }
    };

    // Ensure listener is added after the component mounts
    window.addEventListener('scroll', checkScroll);

    // Check immediately in case the page isn't scrolled after load
    checkScroll();

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const handleScrollClick = () => {
    const storyElement = document.getElementById('Story');
    if (storyElement) {
      storyElement.scrollIntoView({ behavior: 'smooth' });
      setShowNextButton(false);
    }
  };

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
      {showNextButton && (
        <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
          <button
            className="p-2 flex items-center justify-center"
            onClick={handleScrollClick}
          >
            <ExpandMoreIcon fontSize="large" />
          </button>
        </div>
      )}
    </div>
  );
}

const Story = () => {
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const productsElement = document.getElementById('Process');
      if (productsElement) {
        const productsPosition = productsElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setShowNextButton(productsPosition > windowHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
    const productsElement = document.getElementById('Process');
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: 'smooth' });
      setShowNextButton(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 md:px-20 bg-gradient-to-b from-[#f0e5d8] to-[#c0e0e8] relative">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
        Our Story
      </h1>
      <div className="max-w-4xl text-center text-lg md:text-xl text-gray-700 space-y-6">
        <p className="font-semibold text-gray-800">
          <span className="text-sky-600">The Laughing Sherpa</span> is a tribute to our deep affection for the Himalayas and our profound admiration for the pillars of Nepal&apos;s mountaineering community – the Sherpas.
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
            className="p-2 flex items-center justify-center"
            onClick={handleScrollClick}
          >
            <ExpandMoreIcon fontSize="large" />
          </button>
        </div>
      )}
    </section>
  );
};


const Process = () => {
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const productsElement = document.getElementById('Partners');
      if (productsElement) {
        const productsPosition = productsElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setShowNextButton(productsPosition > windowHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
    const productsElement = document.getElementById('Partners');
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: 'smooth' });
      setShowNextButton(false);
    }
  };

  return (
    <Card className="flex flex-col items-center justify-center min-h-screen px-4 md:px-20 relative" style={{ background: 'linear-gradient(to bottom, #fde2e4, #e2e2f1)' }}>
      <CardContent className="text-center max-w-4xl">
        <Typography variant="h3" component="h1" gutterBottom className="font-bold text-gray-800">
          Our Process
        </Typography>
        <Typography variant="h5" className="text-gray-700 space-y-6">
          We source our produce directly from rural smallholder farmers of Nepal.
        </Typography>

      </CardContent>
      {showNextButton && (
        <div className="absolute bottom-8 z-10">
          <Button variant="contained" color="primary" onClick={handleScrollClick} >
            Our Partners
          </Button>
        </div>
      )}
    </Card>
  );
};

interface PartnerCardProps {
  logo: string;
  description: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ logo, description }) => (
  <Card className="w-full max-w-md mx-auto">
    <CardContent className="p-8">
      <img
        alt="Logo"
        className="w-full h-48 object-contain object-center mb-4"
        src={logo}
      />
      <p className="text-lg font-semibold text-blue-900 dark:text-gray-400 text-center">
        {description}
      </p>
    </CardContent>
  </Card>
);

const Partners = () => {
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const productsElement = document.getElementById('Products');
      if (productsElement) {
        const productsPosition = productsElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setShowNextButton(productsPosition > windowHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
    const productsElement = document.getElementById('Products');
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: 'smooth' });
      setShowNextButton(false);
    }
  };

  const partners = [
    { logo: '/eight_k.png', description: 'EightK Expedition' },
    { logo: '/elite_exped.jpeg', description: 'Elite Expedition' },
    { logo: '/seven_summit.png', description: 'Seven Summit Treks' },
  ];
  const extendedPartners = [...partners, ...partners, ...partners, ...partners];  // Duplicate the list


  return (
    <Card className="flex flex-col items-center justify-center min-h-screen px-4 md:px-20 relative" style={{ background: 'linear-gradient(to top, white, black)' }}
    >
      <div className="max-w-4xl w-full text-center">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          className="font-bold text-white mb-4"
        >
          Our Partners
        </Typography>
        <Typography
          variant="h5"
          className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto dark:text-gray-400 mb-8"
        >
          Trusted by the best teams in the world. We help teams of all sizes.
        </Typography>
        <div className="overflow-hidden relative w-full">
          <div className="whitespace-nowrap animate-scroll">
            {extendedPartners.map((partner, index) => (
              <div key={index} className="inline-block mx-4">
                <PartnerCard logo={partner.logo} description={partner.description} />
              </div>
            ))}
          </div>
        </div>

      </div>
      {showNextButton && (
        <div className="absolute bottom-8 z-10">
          <Button
            variant="contained"
            color="primary"
            onClick={handleScrollClick}
            endIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: 'black',  // Sets the background color to black
              color: 'white',            // Sets the text color to white
              '&:hover': {
                backgroundColor: 'gray'  // Optional: change background on hover to gray
              }
            }}
          >
            See Products
          </Button>

        </div>
      )}
    </Card>
  );
};







interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  image_path: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, image_path }) => (
  <div className="flex flex-col gap-2">
    <Image
      alt="Product image"
      className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center border border-gray-200 dark:border-gray-800"
      src={image_path}
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
          These are our top-selling products. Don&apos;t miss out!
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-t pt-6 border-gray-200 dark:border-gray-800">
        <ProductCard
          title="Lentil Soup"
          description="Description of product one."
          price={19.99}
          image_path="/lentil_soup.jpg"
        />
        <ProductCard
          title="Beans & Gravy"
          description="Description of product two."
          price={24.99}
          image_path="/beans_gravy.jpg"
        />
        <ProductCard
          title="Mushroom Choila"
          description="Description of product three."
          price={29.99}
          image_path="/mushroom_choila.jpg"
        />
        <ProductCard
          title="Dal Mahkani"
          description="Description of product four."
          price={34.99}
          image_path="/mushroom_choila.jpg"
        />
      </div>
    </div>
  </section>
);

export default function Home() {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const storyElement = document.getElementById('Story');
      const processElement = document.getElementById('Process');
      const productsElement = document.getElementById('Products');


      if (storyElement && productsElement) {
        const storyPosition = storyElement.getBoundingClientRect().top;
        const productsPosition = productsElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        const showButtonForStory = storyPosition > windowHeight / 2;
        const showButtonForProducts = productsPosition > windowHeight / 2;

        setShowButton(showButtonForStory || showButtonForProducts);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="Landing">
        <Landing />
      </div>
      <div id="Story">
        <Story />
      </div>
      <div id="Process">
        <Process />
      </div>
      <div id="Partners">
        <Partners />
      </div>
      <div id="Products">
        <Products />
      </div>
    </div>
  );
}