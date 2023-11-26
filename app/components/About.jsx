import React from "react";

function About() {
  return (
    <div id="about-section" className="flex justify-center my-20">
      <div className="ms-10 md:ms-20 w-5/6 h-[600px] bg-[#c8b6a6] relative rounded-[10px]">
        <div className=" bg-[#f1dec9] rounded-[10px] w-4/5 h-4/5 pl-5 md:pl-16 pt-10 md:pt-20 absolute top-3 md:top-20 -left-10 md:-left-24 flex-col ">
          <h1 className="text-[#8d7b68] text-2xl md:text-4xl mb-5 montserrat font-bold">
            What is Beanmaster anyway?
          </h1>
          <p className="text-[#8d7b68] md:w-[65%] w-[90%] font-medium text-md lg:text-xl md:text-justify">
            Born in 2016, we are your friend in providing the high quality
            coffee beans. Becoming the lead in coffee bean industry, we have a
            commitment in keep producing high quality beans and also improving
            living standards of coffee farmer in Indonesia
          </p>
        </div>
        <img
          src="/img/coffee.jpg"
          alt="kopi"
          className="md:w-[35vw] w-3/4 absolute rounded-md -right-2 md:right-8 bottom-4 md:top-3/4 md:-translate-y-3/4 z-10 "
        />
      </div>
      {/* <div className="hidden lg:inline ms-5">
        <img
          src="/img/coffee.jpg"
          alt="kopi"
          className="w-[450px] absolute -translate-x-36"
        />
      </div> */}
    </div>
  );
}

export default About;
