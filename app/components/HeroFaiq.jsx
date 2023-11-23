import { Button, Typography } from "@material-tailwind/react";
import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/app-router";
import Container from "./Container";
import heroImg from "/public/img/coffee.jpg";

export default function HeroFaiq() {
  return (
    <>
      <div
        id="main-section"
        className="w-[99vw] relative h-[500px] lg:h-screen flex items-center justify-center lg:justify-start bg-[url(/bar-background.jpeg)] lg:bg-[url(/bar-background.jpeg)] lg:bg-cover bg-no-repeat bg-center">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#1a1a1a] lg:from-20% to-[rgba(16,16,16,0.75)] lg:to-[rgba(16,16,16,0.3)]"
          // style={{
          //   "backgroundImage":
          //     "linear-gradient(to right, rgba(16, 16, 16, 1) 0%, rgba(16, 16, 16, 0.7) 50%, rgba(16,16,16, 0.3) 100%)",
          // }}
        ></div>
        <div className="h-fit lg:ms-24 z-10 flex flex-col justify-start">
          <div className="text-left montserrat text-[#f1dec9] lg:text-5xl text-lg mb-1">
            Hi fellas! Welcome to
          </div>
          <div className="text-start montserrat text-[#facb8a] font-semibold lg:text-8xl text-5xl mb-1">
            Beanmaster
          </div>
          <div className="text-left montserrat text-[#f1dec9] lg:text-2xl">
            Your personal coffee bean maker
          </div>
        </div>
      </div>
    </>
  );
}
