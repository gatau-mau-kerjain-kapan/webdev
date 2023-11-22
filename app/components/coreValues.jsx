`use client`;

import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

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
  const [core, setCore] = useState([]);
  useEffect(() => {
    axios
      .get("/api/cores")
      .then((res) => {
        console.log(res.data);
        setCore(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  const [arrayImg, setArrayImg] = useState([]);
  useEffect(() => {
    let tmp = [];
    for (let i = 0; i < 7; ++i) {
      tmp.push({ key: i });
    }
    setArrayImg(tmp);
  }, []);

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col justify-between">
        <div className="w-[100vw] h-full bg-[#f1dec9] p-[45px] flex flex-col gap-[20px] justify-center">
          <div className="text-[45px] text-[#8d7b68]">Core Values</div>
          <div className="flex justify-center">
            <div className="flex flex-row flex-wrap gap-[4vh] justify-center">
              {core.map((item) => {
                return (
                  <CoreItem
                    key={item.key}
                    source={item.source}
                    title={item.title}
                    col={item.col}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[100vw] h-[153] bg-[#f1dec9] flex flew-row justify-between">
          {arrayImg.map((item) => {
            return (
              <Image
                key={item.key}
                src="/asset_halaman/mural-3.png"
                alt="alt"
                width={63.6}
                height={102}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CoreValues;
