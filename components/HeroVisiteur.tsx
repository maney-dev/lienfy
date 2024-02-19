import React from "react";
import Image from "next/image";
import Cody_Fisher from "../public/assets/Cody Fisher.png";
import Kristin_Waston from "../public/assets/Kristin Watson.png";
import Jerome_Bell from "../public/assets/Jerome Bell.png";
const HeroVisiteur = () => {
  return (
    <div className="bg-[#EEEEEE] w-full justify-center items-center h-[100%] py-20">
      <div className="justify-center items-center text-center">
        <h2 className="text-center text-4xl font-bold pb-24">
          Ce que disent nos visiteurs
        </h2>
      </div>
      <div className="flex items-center justify-between gap-14 px-56">
        <div className="bloc justify-between items-center rounded-3xl h-[500px] bg-[#FFFFFF] shadow-md text-xl">
          <div className="flex justify-center items-center">
            <Image
              className="absolute object-cover "
              src={Cody_Fisher}
              alt=""
            />
          </div>
          <div className="pt-16 pb-2">
            <h2 className="text-center font-bold">Cody Fisher</h2>
          </div>
          <div>
            <p className="px-5 py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore <br /> Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo con
              <br /> Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatu <br /> Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id es
            </p>
          </div>
        </div>
        <div className=" bloc justify-between items-center mb-64 rounded-3xl  bg-[#FFFFFF] shadow-md  text-xl h-[500px]">
          <div className="flex justify-center items-center">
            <Image
              className="absolute object-cover "
              src={Kristin_Waston}
              alt=""
            />
          </div>
          <div className="pt-16 pb-2">
            <h2 className="text-center font-bold">Kristin Watson</h2>
          </div>
          <div>
            <p className="px-5 py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo con <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatu <br /> Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id es
            </p>
          </div>
        </div>
        <div className="bloc justify-between items-center rounded-3xl  bg-[#FFFFFF] shadow-md text-xl h-[500px]">
          {" "}
          <div className="flex justify-center items-center">
            <Image
              className="absolute object-cover "
              src={Jerome_Bell}
              alt=""
            />
          </div>
          <div className=" pt-16 pb-2">
            <h2 className="text-center font-bold">Jerome Bell</h2>
          </div>
          <div className="">
            <p className="px-5 py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo con <br /> Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatu <br /> Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id es
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisiteur;
