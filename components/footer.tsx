import React from "react";
import Image from "next/image";
import whiteLogo from "@/public/images/white_logo.svg";
import facebook from "@/public/images/facebook.svg";
import twitter from "@/public/images/twitter.svg";
import linkedIn from "@/public/images/linkedIn.svg";
import instagram from "@/public/images/instagram.svg";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400"],
});

function Footer() {
  return (
    <footer className="w-full py-12 bg-black">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-6">
          <Link href={"/"}>
            <Image
              src={whiteLogo}
              alt="logo"
              width={14 * 16}
              height={3.5 * 16}
            />
          </Link>
          <div className="flex items-center gap-4">
            <Image
              src={facebook}
              alt="facebook_logo"
              width={1.5 * 16}
              height={1.5 * 16}
            />
            <Image
              src={twitter}
              alt="twitter_logo"
              width={1.5 * 16}
              height={1.5 * 16}
            />
            <Image
              src={instagram}
              alt="instagram_logo"
              width={1.5 * 16}
              height={1.5 * 16}
            />
            <Image
              src={linkedIn}
              alt="linkedIn_logo"
              width={1.5 * 16}
              height={1.5 * 16}
            />
          </div>
        </div>
        <div className="mt-[4.12rem] hidden md:flex items-center gap-8">
          <Link id="privacy" href={"/privacy"} className="font-bold text-white text-lg">
            Privacy
          </Link>
          <div className="text-base text-[#878787] font-normal">|</div>
          <Link id="terms-of-use" href={"/terms-of-use"} className="font-bold text-white text-lg">
            Terms of use
          </Link>
          {/* <div className="text-base text-[#878787] font-normal">|</div>
          <Link id="legal" href={"/legal"} className="font-bold text-white text-lg">
            Legal
          </Link> */}
        </div>
        <div
          className={`mt-[4.12rem] text-[#BDBDBD] font-normal text-sm ${poppins.className}`}
        >
          © 2023 ONEBANQ. All Right Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
