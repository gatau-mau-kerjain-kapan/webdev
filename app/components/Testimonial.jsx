import Image from "next/image";
import React from "react";
import Container from "./Container";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-primaryFour px-14 rounded-2xl py-14 dark:bg-trueGray-800 ">
            <p className="text-2xl leading-normal ">
              Website ini <Mark>lebih baik</Mark> dari apa yang saya buat
            </p>

            <Avatar
              image={"/img/coffee-icon.png"}
              name="Brandon Rafael"
              title="Sepuh TETI 22"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Saya <Mark>right sentence</Mark>
              to keep it short and simple.
            </p>

            <Avatar
              image={"/img/coffee-icon.png"}
              name="Dylan Ambrose"
              title="Lead marketer at Netflix"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              This is an <Mark>awesome</Mark> landing page template I&apos;ve seen. I
              would use this for anything.
            </p>

            <Avatar
              image={"/img/coffee-icon.png"}
              name="Gabrielle Winn"
              title="Co-founder of Acme Inc"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        blurDataURL={props.image}
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-primaryFour bg-primaryOne rounded-md ring-primaryOne ring-4 dark:ring-primaryFour dark:bg-primaryFour dark:text-primaryOne">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;