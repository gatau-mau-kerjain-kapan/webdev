"use client";

import Image from "next/image";
import Product from "./components/product";
import CoreValues from "./components/coreValues";
import Hero from "./components/Hero";
import HeroFaiq from "./components/HeroFaiq";
import Testimonials from "./components/Testimonial";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <main>
      <HeroFaiq />
      {/* <Hero /> */}
      <CoreValues />
      <Product />
      <Testimonials />
      <Faq />
    </main>
  );
}