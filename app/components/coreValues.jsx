`use client`;

import Image from "next/image";

const CoreItem = ({ source, title, col }) => {
  return (
    <>
      <div className="w-[330px] h-[280px] flex-col bg-[#f1dec9] rounded-[15px] relative">
        <Image
          src={source}
          alt={source}
          width={330}
          height={220}
          className="rounded-[15px] z-30 flex"
          style={{
            position: "absolute",
            top: 0,
          }}
        />
        <div
          className="text-[3vh] flex bg-white rounded-[15px] z-50 w-full h-[80px] justify-center items-center"
          style={{ color: col, position: "absolute", bottom: 0 }}
        >
          <div>{title}</div>
        </div>
      </div>
    </>
  );
};

const CoreValues = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-[#f1dec9] p-[45px] flex flex-col gap-[20px] justify-center">
        <div className="text-[45px] text-[#8d7b68]">Core Values</div>
        <div className="flex justify-center">
          <div className="flex flex-row flex-wrap gap-[4vh] justify-center">
            <CoreItem
              source="/aset_core/fairness.jpg"
              title="fairness"
              col="black"
            />
            <CoreItem
              source="/aset_core/hygiene.jpg"
              title="hygiene"
              col="black"
            />
            <CoreItem
              source="/aset_core/organic.jpg"
              title="organic"
              col="black"
            />
            <CoreItem
              source="/aset_core/sustainable.jpg"
              title="sustainable"
              col="black"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreValues;
