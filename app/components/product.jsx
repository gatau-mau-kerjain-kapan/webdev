"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductItem = ({ source, title }) => {
  return (
    <>
      <div className="w-[320px] h-[370px] bg-white flex flex-col justify-center items-center">
        <Image
          src={source}
          alt={source}
          width={270}
          height={270}
          className="pb-[10px]"
        />
        <div className="text-[4vh] text-[#8d7b68]">{title}</div>
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
        <div className="text-[45px] text-[#8d7b68]">Our Products</div>
        <div className="flex justify-center">
          <div className="flex flex-row flex-wrap gap-[4vh] justify-center">
            {product.map((item) => {
              return (
                <ProductItem
                  key={item.key}
                  source={item.source}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
