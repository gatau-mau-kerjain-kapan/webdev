"use client";

import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Product from "./components/product";
import CoreValues from "./components/coreValues";

export default function Home() {
  return (
    <main>
      <CoreValues />
      <Product />
    </main>
  );
}
