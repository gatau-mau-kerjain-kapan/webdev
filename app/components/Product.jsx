"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const ProductItem = ({ source, title }) => {
  return (
    <>
      <div className="w-[320px] h-[370px] bg-white dark:bg-primaryOne flex flex-col rounded-[15px] justify-center items-center">
        <Image
          src={source}
          alt={source}
          width={270}
          height={270}
          className="pb-[10px]"
        />
        <div className="text-[4vh] text-primaryOne dark:text-white">
          {title}
        </div>
      </div>
    </>
  );
};

const Product = () => {
  const [product, setProduct] = useState([]);
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
  return (
    <>
      <div className="w-[99vw] h-full bg-[#f1dec9] p-[45px] flex flex-col gap-[20px]">
        <div className="text-[45px] text-[#8d7b68] montserrat font-bold text-center">
          <Link href={`/ProdDetails`}>Our Products</Link>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-row flex-wrap gap-[4vh] justify-center montserrat font-bold">
            {product.map((item) => {
              return (
                <Link href={`/ProdDetails/${item.key}`} key={item.key}>
                  <ProductItem
                    key={item.key}
                    source={item.source}
                    title={item.title}
                  />
                </Link>
              );
            })}
            <Link className="group relative overflow-hidden bg-primaryTwo focus:ring-4 focus:ring-primaryTwo inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center" href="/ProdDetails">
            <span className="z-40">Discover all of our products!</span>
            <div
              className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000">
            </div>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
