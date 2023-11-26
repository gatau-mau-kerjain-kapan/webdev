"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { UserAuth } from "../context/AuthContext";
import Container from "../components/Container";
import { db } from "../context/firebase";
import { ref, get, child, onValue, set, push, update } from "firebase/database";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const { currentUser } = UserAuth();
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(10000);
  const [product, setProduct] = useState([{ source: "", title: "" }]);

  useEffect(() => {
    try {
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
      console.log(product);

      onValue(ref(db, "cart/" + currentUser.uid), (snapshot) => {
        const data = snapshot.val();
        setCart(data);
        setTotal(data.reduce((a, b) => a + b.price * b.quantity, 0));
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (cart) {
    return (
      <>
        <div class="bg-gray-100 pt-20 pb-20">
          <h1 class="mb-10 text-center text-2xl font-bold montserrat text-primaryOne">
            Cart Items
          </h1>
          <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
              {cart.map((item) => {
                return (
                  <div key={item.key}>
                    <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                      <Image
                        src={item.source}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="w-full rounded-lg sm:w-40"
                      />
                      <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                          <h2 class="text-lg font-bold text-gray-900">
                            {item.name}
                          </h2>
                          <p class="mt-1 text-xs text-gray-700">{item.name}</p>
                        </div>
                        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div class="flex items-center border-gray-100">
                            <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                              {" "}
                              -{" "}
                            </span>
                            <input
                              class="h-8 w-8 border bg-white text-center text-xs outline-none"
                              type="number"
                              value={item.quantity}
                              min="1"
                            />
                            <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                              {" "}
                              +{" "}
                            </span>
                          </div>
                          <div class="flex items-center space-x-4">
                            <p class="text-sm">
                              {(item.price ?? 0).toLocaleString("id", {
                                style: "currency",
                                currency: "IDR",
                              })}
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div class="mb-2 flex justify-between">
                <p class="text-gray-700">Subtotal</p>
                <p class="text-gray-700">
                  {total.toLocaleString("id", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-700">Shipping</p>
                <p class="text-gray-700">
                  {shipping.toLocaleString("id", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
              <hr class="my-4" />
              <div class="flex justify-between">
                <p class="text-lg font-bold">Total</p>
                <div class="">
                  <p class="mb-1 text-lg font-bold">
                    {(total + shipping).toLocaleString("id", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                  <p class="text-sm text-gray-700">including VAT</p>
                </div>
              </div>

              <hr class="my-4" />

              <div class="w-72">
                <div class="relative h-10 w-full min-w-[200px]">
                  <input
                    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Address
                  </label>
                </div>
              </div>

              <hr class="my-4" />
              <p class="text-gray-700">Choose payment method</p>
              <div class="grid grid-cols-1 gap-2 p-4">
                <label>
                  <input
                    type="radio"
                    value="1"
                    class="peer hidden"
                    name="framework"
                  />

                  <div class="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                    <h2 class="font-medium text-gray-700">
                      WhatsApp Verification
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </label>

                <label>
                  <input
                    type="radio"
                    value="1"
                    class="peer hidden"
                    name="framework"
                  />

                  <div class="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                    <h2 class="font-medium text-gray-700">Cash on Delivery</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </label>
              </div>

              <hr class="my-4" />
              <div class="flex items-start mb-4">
                <input
                  id="checkbox-1"
                  aria-describedby="checkbox-1"
                  type="checkbox"
                  class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                />
                <label
                  for="checkbox-1"
                  class="text-sm ml-3 font-medium text-gray-900"
                >
                  I agree to the{" "}
                  <a href="#" class="text-blue-600 hover:underline">
                    terms and conditions
                  </a>
                </label>
              </div>

              <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Container>
          <div className="flex justify-center items-center p">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Your cart is empty</h1>
              <p className="text-gray-500 mb-3">
                Looks like you haven&apos;t added anything to your cart yet
              </p>
              <Link
                className="mt-2 rounded-md bg-blue-500 px-20 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                href="/ProdDetails"
              >
                Go Shopping
              </Link>
            </div>
          </div>
        </Container>
      </>
    );
  }
}
