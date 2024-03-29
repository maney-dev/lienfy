import React from "react";
import Image from "next/image";
import lienfy from "../public/lienfy.png";

const Hero = () => {
  return (
    <div className=" bg-orange-50 h-[50%] w-full justify-center py-24 px-16">
      <div className="flex justify-between items-center px-28 gap-60">
        <div className="block">
          <p className="max-w-lg text-5xl font-semibold leading-normal text-gray-900 dark:text-white">
            {" "}
            Simplifier vos liens pour une navigation fluide grace à notre
            raccourcisseur lien<span className="text-[#ef7919]">fy</span>.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm	 font-semibold leading-norma">
            Lienfy est le raccourcisseur d&apos;url panafricain le plus simple.{" "}
            <br />
            Raccourcissez vos liens et faciliter vos partage url.
          </p>
          <button
            type="submit"
            className="mt-20 h-16 bg-orange-500  text-white text-[18px] px-8 py-2 rounded-lg transition-all hover:bg-orange-500"
          >
            Commencer gratuitement
          </button>
        </div>
        <div className="">
          <Image className="rounded-lg" src={lienfy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
