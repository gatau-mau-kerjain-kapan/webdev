"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Swal from 'sweetalert2';
import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";
import { UserAuth } from "app/context/AuthContext.js";
import { useRouter } from "next/navigation";
import CartBar from "../components/CartBar";
import ShopCart from "../components/ShopCart";
import { db } from "app/context/firebase.js";
import { ref, get, child, onValue, set, push, update } from 'firebase/database';

const ProductDetails = ({ params }) => {
  const { currentUser } = UserAuth();
  const [product, setProduct] = useState([{ source: "", title: "" }]);
  const router = useRouter();

  useEffect(() => {
    onValue(ref(db, 'product'), (snapshot) => {
      const data = snapshot.val();
      setProduct(() => {
        return data.filter((item) => {
          return Number(item.key) === Number(params.productKey);
        });
      });
    }, {
      onlyOnce: true
    })
  }, []);
  
  return (
    <>
      <CartBar />
      <div className="w-[99vw] bg-primaryFour pt-[3vh] pb-[3vh] flex flex-col md:flex-row gap-[2vh] max:gap-[10px] md:pl-[10vw] md:pr-[10vw] items-center md:items-start">
        <Image
          src={product[0].source}
          alt={product[0].title}
          width={300}
          height={300}
          className="max:w-[500px]"
        />
        <div className="w-[70vw] h-full md:ml-[30px] flex flex-col gap-[5px] items-center md:items-start">
          <Breadcrumbs fullWidth>
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
            <Link href="/ProdDetails" className="opacity-60">Products</Link>
            <Link href={`/ProdDetails/${params.productKey}`} className="opacity-60">{product[0].title}</Link>
          </Breadcrumbs>
          <div className="montserrat font-bold text-primaryOne text-center md:text-start text-[60px]">
            {product[0].title}
          </div>
          <div className="montserrat font-semibold text-[25px] text-white bg-primaryTwo rounded-[10px] p-[5px] w-max text-center md:text-start">
            {(product[0].price??0).toLocaleString('id', {style: 'currency', currency: 'IDR'})}/pack
          </div>
          <div className="montserrat font-semibold text-[20px] text-justify md:text-justify">
            {product[0].desc}
          </div>
          <table className="table-fixed w-[70vw] md:w-[50vw] text-start mt-4">
            <tbody>
              <tr>
                <td>Dimension</td>
                <td>{product[0].dim}</td>
              </tr>
              <tr>
                <td>Net Weight</td>
                <td>{product[0].net}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-6">
          <ShopCart/>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default ProductDetails;
