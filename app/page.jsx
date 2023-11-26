"use client";

import Image from "next/image";
import Product from "./components/Product";
import CoreValues from "./components/CoreValues";
import Hero from "./components/Hero";
import HeroFaiq from "./components/HeroFaiq";
import Achievement from "./components/Achievement";
import Testimonials from "./components/Testimonial";
import Faq from "./components/Faq";
import About from "./components/About";
import Commitment from "./components/Commitment";
import Map from "./components/Map";

export default function Home() {
  return (
    <main>
      <HeroFaiq />
      <Hero />
      <About />
      <Commitment />
      <Achievement />
      <CoreValues />
      <Product />
      <Testimonials />
      <Map />
      <Faq />
    </main>
  );
}
