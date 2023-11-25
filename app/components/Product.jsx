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
        console.log(res.data);
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
          Our Products
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
