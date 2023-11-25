"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { reactStrictMode } from "@/next.config";

const ProductDetails = ({ params }) => {
  const [product, setProduct] = useState([{ source: "", title: "" }]);
  useEffect(() => {
    axios
      .get("/api/product")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);
  console.log(product);
  return (
    <>
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
                {item.price}/pack
              </div>
              <div className="montserrat font-semibold text-[20px] text-center md:text-start">
                {item.desc}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductDetails;
