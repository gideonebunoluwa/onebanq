import Image from "next/image";
import React from "react";
import phone from "@/public/images/phone_mockup.svg";

function Financial({ color }: { color: string }) {
  return (
    <div
      className={`w-full rounded-[2.25rem] ${color} pl-4 md:pl-16 lg:pl-12 xl:pl-16 pt-[4rem] pr-4 md:pr-16 xl:pr-[7.62rem] mb-28 flex flex-col lg:flex-row items-center lg:items-start gap-y-12 md:gap-y-8`}
    >
      <div className="flex flex-col gap-4">
        <h4 className="font-bold text-white text-[2rem] md:text-[2.5rem] xl:text-5xl leading-[3rem] xl:leading-normal">
          The best way beyond financial inclusion.
        </h4>
        <p className="text-white w-full md:w-[70%]">
          We have build ONEBANQ to help you save, spend, and understand your
          spending patterns while staying organized from a single secure
          platform
        </p>
        <button
          className={`py-[0.62rem] px-8 w-fit rounded-[1.25rem] bg-light_theme_primary text-white text-base font-bold xl:mt-12`}
        >
          Join the Waitlist
        </button>
      </div>
      <div className="shrink-0">
        <Image
          src={phone}
          alt="phone_mockup"
          width={26 * 16}
          height={26 * 16}
        />
      </div>
    </div>
  );
}

export default Financial;
