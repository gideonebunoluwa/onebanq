import Content from "@/components/Privacy/Content";
import Hero from "@/components/Privacy/Hero";
import Financial from "@/components/financial";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Space_Grotesk } from "next/font/google";
import heroImage from "@/public/images/privacy_hero.svg";
import React from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

function Privacy() {
  return (
    <main className={`${spaceGrotesk.className}`}>
      <Header />
      <Hero text="Privacy policy" color="bg-[#FFE7DC]" image={heroImage} />
      <div className="container">
        <Content />
        <Financial color="bg-orange" />
      </div>
      <Footer />
    </main>
  );
}

export default Privacy;
