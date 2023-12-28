import Content from "@/components/Privacy/Content";
import Hero from "@/components/Privacy/Hero";
import Financial from "@/components/financial";
import Footer from "@/components/footer";
import Header from "@/components/header";
import heroImage from "@/public/images/legal_hero.svg";
import React from "react";

function Page() {
  return (
    <main>
      <Header />
      <Hero text="Legal" color="bg-[#E8FEFF]" image={heroImage} />
      <div className="container">
        <Content />
        <Financial color="bg-light_green" />
      </div>
      <Footer />
    </main>
  );
}

export default Page;
