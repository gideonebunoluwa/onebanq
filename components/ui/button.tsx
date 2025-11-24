import Link from "next/link";
import React from "react";

function Button({ location }: { location: "header" | "other" }) {
  return (
    <Link
      href={"https://forms.gle/WSJX2MZ6ArpwzZ249"}
      target="_blank"
      id="header_join-waitlist-button"
      className={`py-[0.62rem] ${
        location === "header" ? "px-4" : "px-8"
      } w-fit rounded-[1.25rem] bg-light_theme_primary text-white text-base font-bold`}
    >
      Join the Waitlist
    </Link>
  );
}

export default Button;
