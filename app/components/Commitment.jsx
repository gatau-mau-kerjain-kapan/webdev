import Image from "next/image";

const CommitItem = ({ src, title, desc }) => {
  return (
    <>
      <div className="w-[70vw] h-full flex flex-col lg:flex-row justify-between items-center p-[20px]">
        <img
          src={src}
          alt={title}
          width={450}
          height={300}
          className="w-3/4 lg:w-3/5 max-w-[450px] rounded-[30px]"
        />
        <div
          className="h-full flex items-center lg:items-left text-center lg:text-left flex-col text-primaryOne dark:text-white montserrat font-bold justify-center flex-wrap m-[40px]"
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
          <div className="w-[70vw] h-full bg-white dark:bg-primaryOne rounded-[30px]">
            <CommitItem
              src={"/asset_komitmen/petik_kopi.jpg"}
              title={"Choosen Beans"}
              desc="The coffee beans are chosen from the best coffee farm in Indonesia. Every beans are planted carefully through highly standard process to ensure the coffee grow well."
            />
            <CommitItem
              src={"/asset_komitmen/proses_kopi.jpg"}
              title={"High Quality Standards"}
              desc="The harvested bean then run through an excellent processing process. With the help of highly sophisticated tools making it an high class coffee bean in the end. It also packed with modern machine to ensure it's sanity and healthiness"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Commitment;
