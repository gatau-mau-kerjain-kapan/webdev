"use client";

import Image from "next/image";
import Product from "./components/Product";
import CoreValues from "./components/CoreValues";
import Hero from "./components/Hero";
import HeroFaiq from "./components/HeroFaiq";
import Achievement from "./components/Achievement";

export default function Home() {
  return (
    <main>
      <HeroFaiq />
      {/* <Hero /> */}
      <Achievement />
      <CoreValues />
      <Product />
    </main>
  );
}
