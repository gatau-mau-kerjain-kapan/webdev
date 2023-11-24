import Image from "next/image";

const CommitItem = ({ src, title, desc }) => {
  return (
    <>
      <div className="w-[70vw] h-full flex flex-row justify-between items-center p-[20px]">
        <Image src={src} alt={title} width={450} height={300} />
        <div
          className="h-full flex flex-col text-primaryOne montserrat font-bold justify-center flex-wrap m-[40px]"
          style={{
            position: "sticky",
            right: 0,
          }}
        >
          <div className="text-[30px] md:text-[40px] flex">{title}</div>
          <div className="text-lg md:text-xl font-semibold flex flex-wrap">
            {desc}
          </div>
        </div>
      </div>
    </>
  );
};

const Commitment = () => {
  return (
    <>
      <div className="w-[99vw] flex flex-col justify-between">
        <div className="w-[99vw] h-full bg-[#f1dec9] p-[45px] flex flex-col gap-[20px] justify-center items-center">
          <div className="text-[45px] text-center text-[#8d7b68] montserrat font-bold">
            Our Commitment
          </div>
          <div className="w-[70vw] h-full bg-white rounded-[10px]">
            <CommitItem
              src={"/asset_komitmen/petik_kopi.jpg"}
              title={"Choosen Beans"}
              desc="The coffee beans are chosen from the best coffee farm in Indonesia"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Commitment;
