import React from "react";
import Image from "next/image";
import Logo from "@/public/images/OneBanq_logo.svg";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

function Header() {
  return (
    <header className="isolate sticky top-0 w-full z-20 bg-white">
      <div className="container py-6 flex justify-between items-center w-full">
        <Link href={"/"} className="hidden md:flex">
          <Image src={Logo} alt="logo" width={10 * 16} height={3.5 * 16} />
        </Link>
        <Link href={"/"} className="md:hidden">
          <Image src={Logo} alt="logo" width={7.85 * 16} height={1.875 * 16} />
        </Link>
        <button
          id="header_join-waitlist-button"
          className={`${spaceGrotesk.className} py-[0.62rem] px-4 rounded-[1.25rem] bg-light_theme_primary text-white text-base font-bold`}
        >
          Join the Waitlist
        </button>
      </div>
    </header>
  );
}

export default Header;
