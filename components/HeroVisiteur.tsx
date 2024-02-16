import React from "react";
import Image from "next/image";
import Cody_Fisher from "../public/assets/Cody Fisher.png";
import Kristin_Waston from "../public/assets/Kristin Watson.png";
import Jerome_Bell from "../public/assets/Jerome Bell.png";
const HeroVisiteur = () => {
  return (
    <div className="bg-[#EEEEEE] pb-[1%]">
      <div className="flex justify-center item-center">
        <h2 className="text-4xl mt-8 mb-8 font-bold">
          Ce que disent nos visiteurs
        </h2>
      </div>{" "}
      <div className="flex gap-10 justify-between item-center my-12 mx-52">
        <div className="mt-[100px] w-[100%]">
          {" "}
          <div className=" rounded-3xl px-2 bg-[#FFFFFF] shadow-md justify-center items-center text-center text-xl h-[500px] ">
            <div className="justify-center ml-40">
              <Image className=" object-cover mb-10" src={Cody_Fisher} alt="" />
            </div>
            <div>
              <h2 className="text-[16px] mt-2 mb-4 font-bold">Cody Fisher</h2>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id es
              </p>
            </div>
          </div>
        </div>
        <div className="mb-[100px] w-[100%]">
          {" "}
          <div className="rounded-3xl px-2 bg-[#FFFFFF] shadow-md justify-center items-center text-center text-xl h-[500px]">
            <div className="justify-center ml-40">
              <Image className="mb-10" src={Kristin_Waston} alt="" />
            </div>
            <div>
              <h2 className="text-[16px] mt-2 mb-4 font-bold">
                Kristin Watson
              </h2>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id es
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[100px] w-[100%] relative">
          {" "}
          <div className="rounded-3xl px-2 bg-[#FFFFFF] shadow-md justify-center items-center text-center text-xl h-[500px]">
            <div className="justify-center  ml-40">
              <Image className="mb-10 " src={Jerome_Bell} alt="" />
            </div>
            <div>
              <h2 className="text-[16px] mt-2 mb-4 font-bold">Jerome Bell</h2>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id es
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisiteur;
