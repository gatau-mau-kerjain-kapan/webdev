"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/app-router";

export default function Home() {
  return (
    <>
      <div
        id="main-section"
        className="relative h-[500px] lg:h-screen flex items-center justify-center lg:justify-start bg-[url(/bar-background.jpeg)] lg:bg-[url(/bar-background.jpeg)] lg:bg-cover bg-no-repeat bg-center"
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#1a1a1a] lg:from-20% to-[rgba(16,16,16,0.75)] lg:to-[rgba(16,16,16,0.3)]"
          // style={{
          //   "backgroundImage":
          //     "linear-gradient(to right, rgba(16, 16, 16, 1) 0%, rgba(16, 16, 16, 0.7) 50%, rgba(16,16,16, 0.3) 100%)",
          // }}
        ></div>
        <div className="h-fit lg:ms-24 z-10">
          <h1 className="text-[#f1dec9] lg:text-5xl text-lg mb-1">
            Hi fellas! Welcome to
          </h1>
          <h1 className="text-[#facb8a] font-semibold lg:text-8xl text-5xl mb-1">
            Beanmaster
          </h1>
          <h1 className="text-[#f1dec9] text-sm">
            Your personal coffee bean maker
          </h1>
        </div>
      </div>
      <div
        id="about-section"
        className="h-fit lg:h-screen flex justify-between items-center bg-[#c8b6a6]"
      >
        <div>
          <h1 className="text-[#8d7b68] text-4xl ">About Us</h1>
          <Typography className="text-[#8d7b68] text-sm">
            Bean Maker was created in 2000 to facilitate every person who want
            to have a coffee bean
          </Typography>
        </div>
      </div>
    </>
  );
}
