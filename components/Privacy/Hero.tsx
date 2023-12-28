import Image from "next/image";
import heroImage from "@/public/images/privacy_hero.svg";
import React from "react";

function Hero({
  color,
  text,
  image,
}: {
  color: string;
  text: string;
  image: string;
}) {
  return (
    <div className={`${color} h-64 w-full`}>
      <div className="container flex justify-between h-full">
        <h1 className="text-light_theme_text font-bold text-5xl lg:text-[4rem] flex items-center">
          {text}
        </h1>
        <div className="hidden md:flex">
          <Image src={image} alt="bars" width={19 * 16} height={24 * 16} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
