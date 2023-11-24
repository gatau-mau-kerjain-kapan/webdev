import React from "react";

function About() {
  return (
    <div id="about-section" className="flex justify-center my-20">
      <div className="ms-10 md:ms-20 w-5/6 h-[600px] bg-[#c8b6a6] relative">
        <div className=" bg-[#f1dec9] w-4/5 h-4/5 pl-5 md:pl-10 pt-10 md:pt-20 absolute top-3 md:top-20 -left-10 md:-left-24 flex-col ">
          <h1 className="text-[#8d7b68] text-4xl md:text-6xl mb-5 montserrat font-medium">About Us</h1>
          <p className="text-[#8d7b68] md:w-[65%] w-[90%] font-medium text-sm lg:text-lg md:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut debitis
            dolorem, ullam sunt veritatis fugiat quam rem expedita in facilis,
            dolor quas consequuntur quod distinctio porro magnam id neque iusto
            laborum? Provident eos unde voluptatibus ducimus assumenda aliquam,
            voluptatem aperiam quae, modi aut, et voluptas. Iure deserunt veniam
            ad suscipit?
          </p>
        </div>
        <img src="/img/coffee.jpg" alt="kopi"  className="md:w-[40vw] w-3/4 absolute -right-2 md:right-8 -bottom-2 md:top-1/2 md:-translate-y-1/2 z-10"/>
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
