"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@material-tailwind/react";
import CartBar from "./components/CartBar";
import ShopCart from "./components/ShopCart";
import Container from "../components/Container";
import { db } from "../context/firebase";
import { ref, get, child, onValue, set, push, update } from "firebase/database";
import { reactStrictMode } from "@/next.config";

const ProductDetails = ({ params }) => {
  const [product, setProduct] = useState([{ source: "", title: "" }]);
  useEffect(() => {
    onValue(
      ref(db, "product"),
      (snapshot) => {
        const data = snapshot.val();
        setProduct(data);
      },
      {
        onlyOnce: true,
      }
    );
  }, []);
  return (
    <>
      <CartBar />
      <div className="w-[99vw] bg-primaryFour pt-[3vh] pb-[3vh] flex flex-col md:flex-row gap-[2vh] max:gap-[10px] md:pl-[10vw] md:pr-[10vw] items-center md:items-start">
        <Breadcrumbs>
          <Link href="/" className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <Link href="/ProdDetails" className="opacity-60">
            Products
          </Link>
        </Breadcrumbs>
      </div>
      {product.map((item) => {
        return (
          <div
            key={item.key}
            className="w-[99vw] bg-primaryFour pt-[3vh] pb-[3vh] flex flex-col md:flex-row gap-[2vh] max:gap-[10px] md:pl-[10vw] md:pr-[10vw] items-center md:items-start"
          >
            <Image
              src={item.source}
              alt={item.title}
              width={300}
              height={300}
              className="max:w-[500px]"
            />
            <div className="w-[70vw] h-full md:ml-[30px] flex flex-col gap-[5px] items-center md:items-start">
              <div className="montserrat font-bold text-primaryOne text-center md:text-start text-[60px]">
                {item.title}
              </div>
              <div className="montserrat font-semibold text-[25px] text-white bg-primaryTwo rounded-[10px] p-[5px] w-max text-center md:text-start">
                {(item.price ?? 0).toLocaleString("id", {
                  style: "currency",
                  currency: "IDR",
                })}
                /pack
              </div>
              <div className="montserrat font-semibold text-[20px] text-center md:text-start dark:text-black mt-3">
                {item.desc}
              </div>
              <div className="container flex justify-between mt-3">
                <Link
                  className="group relative overflow-hidden bg-primaryTwo focus:ring-4 focus:ring-primaryTwo inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center"
                  href={`/ProdDetails/${item.key}`}
                >
                  <span className="z-40">More Details</span>
                  <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
                </Link>
                <ShopCart value={Number(item.key)} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductDetails;
