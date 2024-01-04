import Image from "next/image";
import React from "react";
import heroCard from "@/public/images/hero_card.svg";
import phone from "@/public/images/hero_phone.svg";
import Button from "./ui/button";

function Hero() {
  return (
    <div className="relative pt-14 lg:pt-0 pb-20 overflow-x-hidden w-full">
      <div
        style={{ filter: "blur(100px)" }}
        className="absolute h-[14.5625rem] w-[14.5625rem] bg-[rgba(255,137,0,0.10)] rounded-full top-0 -left-24 md:left-0 lg:left-40"
      ></div>
      <div
        style={{ filter: "blur(100px)" }}
        className="absolute h-[14.5625rem] w-[14.5625rem] bg-[rgba(0,100,255,0.10)] rounded-full bottom-40 md:bottom-80 lg:bottom-0 -left-20"
      ></div>
      <div
        style={{ filter: "blur(100px)" }}
        className="absolute h-[14.5625rem] w-[14.5625rem] bg-[rgba(193,0,225,0.10)] rounded-full bottom-40 md:bottom-80 lg:bottom-0 -right-36"
      ></div>
      <div
        style={{ filter: "blur(100px)" }}
        className="absolute h-[14.5625rem] w-[14.5625rem] bg-[rgba(25,181,0,0.10)] rounded-full top-0 -right-36 md:right-0"
      ></div>
      <div className="container flex flex-col lg:flex-row lg:justify-between gap-y-20 items-center relative">
        <div className="flex flex-col items-center lg:items-start gap-6 mt-0 lg:mt-12">
          <h1 className="font-bold text-[2.5rem] md:text-[3rem] xl:text-[3.75rem] text-center lg:text-left w-full md:w-[90%] xl:w-[85%] leading-[3rem] md:leading-[3.5rem] lg:leading-[4.3rem]">
            Custom <span className="text-green">financial</span>{" "}
            <span className="text-green">solutions</span> tailored to your
            needs.
          </h1>
          <p className="w-full md:w-[72%] text-center lg:text-left">
            Save money, stay organized, live better and free; all from a single,
            secure platform.
          </p>
          <div className="mt-4">
            <Button location="other" />
          </div>
        </div>
        <div className="hidden md:flex lg:hidden xl:flex items-end shrink-0 mr-16 mt-5">
          <div className="-mr-64 -mb-8 z-10">
            <Image
              src={heroCard}
              alt="card"
              width={36.13831 * 16}
              height={9.97081 * 16}
              className="border"
            />
          </div>
          <div>
            <Image
              src={phone}
              alt="phone"
              width={11.77225 * 16}
              height={32.41469 * 16}
            />
          </div>
        </div>
        <div className="hidden lg:flex xl:hidden items-end shrink-0 mr-16 mt-5">
          <div className="-mr-64 -mb-8 z-10">
            <Image
              src={heroCard}
              alt="card"
              width={32 * 16}
              height={9.97081 * 16}
              className="border"
            />
          </div>
          <div>
            <Image
              src={phone}
              alt="phone"
              width={10 * 16}
              height={32.41469 * 16}
            />
          </div>
        </div>
        <div className="md:hidden w-full h-60"></div>
      </div>
    </div>
  );
}

export default Hero;
