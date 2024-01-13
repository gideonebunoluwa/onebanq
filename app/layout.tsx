import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "OneBanq | The Future of Credit - Zero Interest on Cards | %s",
    default: "OneBanq | The Future of Credit - Zero Interest on Cards",
  },
  description:
    "ONEBANQ Technologies Limited is a financial technology company that provides innovative, affordable, and accessible financial services to individuals and businesses in Nigeria. We use technology to streamline and automate our processes, which allows us to offer our services at a lower cost than traditional financial institutions.",
  keywords: [
    "OneBanq",
    "Credit",
    "Credit Cards",
    "Financial Technology",
    "Zero Interest",
    "Digital Banking",
  ],
  metadataBase: new URL("https://theonebanq.com/"),
  openGraph: {
    title: "OneBanq",
    description:
      "ONEBANQ Technologies Limited is a financial technology company that provides innovative, affordable, and accessible financial services to individuals and businesses in Nigeria. We use technology to streamline and automate our processes, which allows us to offer our services at a lower cost than traditional financial institutions.",
    url: "https://theonebanq.com/",
    type: "website",
    images: "/images/logo.png",
  },
  robots: {
    index: false,
    follow: false,
  },
  twitter: {
    title: "OneBanq",
    description:
      "ONEBANQ Technologies Limited is a financial technology company that provides innovative, affordable, and accessible financial services to individuals and businesses in Nigeria. We use technology to streamline and automate our processes, which allows us to offer our services at a lower cost than traditional financial institutions.",
    images: "/images/logo.png",
  },
  appleWebApp: {
    title: "OneBanq",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script src="https://cdn.pagesense.io/js/gigadatasystems/02b4e3cd1ff74be1b711a4fb2a907a67.js" />
    </html>
  );
}
