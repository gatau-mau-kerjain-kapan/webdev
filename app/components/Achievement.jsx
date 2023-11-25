`use client`;

import Image from "next/image";
import { useState, useEffect } from "react";
// import axios from "axios";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { db } from "../context/firebase";
import { ref, get, child, onValue, set, push, update } from 'firebase/database';

const AchievementItem = ({ data, desc, col }) => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <div className="w-[330px] p-[15px] h-[200px] flex flex-col text-center justify-center bg-white rounded-[15px] relative">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        />

        <div className="text-[60px]" style={{ color: col }}>
          {counterOn && <CountUp start={0} end={data} duration={2} delay={0} />}
          +
        </div>
        <div className="text-[23px] text-primaryOne">{desc}</div>
      </div>
    </>
  );
};

const Achievement = () => {
  const [core, setCore] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("/api/achievement")
  //     .then((res) => {
  //       console.log(res.data);
  //       setCore(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     });
  // }, []);

  useEffect(() => {
    onValue(ref(db, 'achievement'), (snapshot) => {
      const data = snapshot.val();
      setCore(data);
    }, {
      onlyOnce: true
    })
  }, [])

  return (
    <>
      <div className="w-[99vw] flex flex-col justify-between">
        <div className="w-[99vw] h-full bg-[#f1dec9] p-[45px] flex flex-col gap-[20px] justify-center">
          <div className="text-[45px] text-center text-[#8d7b68] montserrat font-bold">
            What have we done in 7 years?
          </div>
          <div className="flex justify-center">
            <div className="flex flex-row flex-wrap gap-[4vh] justify-center montserrat font-bold">
              {core.map((item) => {
                return (
                  <AchievementItem
                    key={item.key}
                    data={item.data}
                    desc={item.desc}
                    col={item.col}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
