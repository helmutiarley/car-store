"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRef } from "react";

const Hero = () => {
  const targetCarsComponent = useRef<HTMLDivElement | null>(null);
  const handleScroll = () => {
    targetCarsComponent.current
      ? targetCarsComponent.current.scrollIntoView({ behavior: "smooth" })
      : null;
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="transition duration-500 bg-primary-blue text-white rounded-full mt-10 hover:shadow-lg hover:bg-sky-700"
          handleClick={handleScroll}
        />
      </div>
      <div ref={targetCarsComponent} className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
