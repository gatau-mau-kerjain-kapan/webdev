"use client";

import Image from "next/image";

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
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-[#f1dec9] p-[45px] flex flex-col gap-[20px]">
        <div className="text-[45px] text-[#8d7b68]">Our Products</div>
        <div className="flex justify-center">
          <div className="flex flex-row flex-wrap gap-[4vh] justify-center">
            <ProductItem source="/asset_kopi/kopi_aceh.png" title="kopi aceh" />
            <ProductItem source="/asset_kopi/kopi_bali.png" title="kopi bali" />
            <ProductItem source="/asset_kopi/kopi_jawa.png" title="kopi jawa" />
            <ProductItem
              source="/asset_kopi/kopi_toraja.png"
              title="kopi toraja"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
