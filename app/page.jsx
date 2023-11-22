"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/app-router";
import Product from "./components/product";
import CoreValues from "./components/coreValues";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <CoreValues />
      <Product />
    </main>
  );
}