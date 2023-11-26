`use client`;

import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { db } from "../context/firebase";
import { ref, get, child, onValue, set, push, update } from "firebase/database";

const CoreItem = ({ source, title, col, dCol }) => {
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
          className={`text-[4vh] flex bg-white rounded-[15px] z-50 w-full h-[80px] justify-center items-center col`}
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
  const [arrayImg, setArrayImg] = useState([]);

  useEffect(() => {
    onValue(
      ref(db, "coreValues"),
      (snapshot) => {
        const data = snapshot.val();
        setCore(data);
      },
      {
        onlyOnce: true,
      }
    );
    let tmp = [];
    for (let i = 0; i < 7; ++i) {
      tmp.push({
        key: i,
        source: `/asset_halaman/kopi-4/kopi-${String((i % 4) + 1)}.png`,
      });
    }
    setArrayImg(tmp);
  }, []);

  return (
    <>
      <div className="w-[99vw] flex flex-col justify-between">
        <div className="w-[99vw] h-full bg-[#f1dec9] p-[45px] flex flex-col gap-[20px] justify-center">
          <div className="text-[45px] text-center text-[#8d7b68] montserrat font-bold">
            Core Values
          </div>
          <div className="flex justify-center">
            <div className="flex flex-row flex-wrap gap-[4vh] justify-center montserrat font-bold">
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
        <div className="w-[99vw] h-[153] bg-[#f1dec9] flex flew-row justify-between">
          {arrayImg.map((item) => {
            return (
              <Image
                key={item.key}
                src={item.source}
                alt="alt"
                width={60}
                height={80}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CoreValues;
