import Header from "@/components/header";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Hero from "@/components/hero";
import Cards from "@/components/cards";
import Financial from "@/components/financial";
import Footer from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export default function Home() {
  return (
    <main className={`${spaceGrotesk.className}`}>
      <Header />
      <div className="relative">
        <Hero />
        <div className={"container"}>
          <Cards />
          <Financial color="bg-green" />
        </div>
        <Footer />
      </div>
    </main>
  );
}
