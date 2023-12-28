import Content from "@/components/Privacy/Content";
import Hero from "@/components/Privacy/Hero";
import Financial from "@/components/financial";
import Footer from "@/components/footer";
import Header from "@/components/header";
import heroImage from "@/public/images/terms_hero.svg";
import React from "react";

function Page() {
  return (
    <main>
      <Header />
      <Hero text="Terms of use" color="bg-[#E7FCE0]" image={heroImage} />
      <div className="container">
        <Content />
        <Financial color="bg-green" />
      </div>
      <Footer />
    </main>
  );
}

export default Page;
