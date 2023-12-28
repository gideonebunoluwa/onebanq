import Image from "next/image";
import React from "react";
import ticketStar from "@/public/images/Ticket Star.svg";
import wallet from "@/public/images/Wallet.svg";
import ticket from "@/public/images/Ticket.svg";
import send from "@/public/images/Send.svg";

const cards = [
  {
    id: 1,
    title: "Get a Credit Card",
    text: "With our credit scoring model and frequent use of ONEBANQ for your financial transactions, we give you access to credit cards.",
    icon: ticketStar,
    cardColor: "bg-[#E7FCE0]",
    textColor: "green",
  },
  {
    id: 2,
    title: "Initiate Payments",
    text: "Either from your linked bank accounts or from your ONEBANQ wallet, you can initiate outward payment into any bank account.",
    icon: send,
    cardColor: "bg-[#FFE7DC]",
    textColor: "orange",
  },
  {
    id: 3,
    title: "Link Bank Accounts",
    text: "Connecting your bank accounts is made easy so that you can manage your finances more seamlessly from a single portal.",
    icon: ticket,
    cardColor: "bg-[#D8E5FF]",
    textColor: "blue",
  },
  {
    id: 4,
    title: "Savings & Budgeting",
    text: "Connecting your bank accounts is made easy so that you can manage your finances more seamlessly from a single portal.",
    icon: wallet,
    cardColor: "bg-[#E8FEFF]",
    textColor: "light_green",
  },
];

function Card({
  cardColor,
  title,
  text,
  textColor,
  icon,
}: {
  cardColor: string;
  title: string;
  text: string;
  textColor: string;
  icon: string;
}) {
  return (
    <div
      className={`pl-4 md:pl-7 pb-12 md:pb-16 pt-[8rem] pr-5 md:pr-[4rem] xl:pr-[8rem] w-full rounded-[1.25rem] ${cardColor}`}
    >
      <div className="w-full lg:w-[23rem] xl:w-[26rem] h-full md:h-[13rem] flex flex-col gap-y-4 md:gap-y-0 justify-between">
        <div>
          <Image src={icon} alt="icon" width={4 * 16} height={4 * 16} />
        </div>
        <h3 className={`text-[2rem] font-bold text-${textColor} leading-10`}>
          {title}
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <section className="mt-8 md:mt-16 mb-28">
      <h2 className="font-bold text-[1.5rem] md:text-[2.25rem] xl:text-[3.75rem] leading-[2.1rem] md:leading-[3.2rem] xl:leading-[4.5rem]">
        Moving you beyond <span className="text-blue">financial</span>{" "}
        <span className="text-blue">inclusion</span>, through{" "}
        <span className="text-orange">financial</span>{" "}
        <span className="text-orange">aggregation</span>, to{" "}
        <span className="text-light_green">financial</span>{" "}
        <span className="text-light_green">intelligence</span> and ultimately{" "}
        <span className="text-green">financial</span>{" "}
        <span className="text-green">liberty</span>
      </h2>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {cards.map((item) => (
          <Card
            key={item.id}
            cardColor={item.cardColor}
            title={item.title}
            text={item.text}
            textColor={item.textColor}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Cards;
