import React from "react";
import Image from "next/image";
import link_lienfy from "../public/assets/Link.png";

const HeroLink = () => {
  return (
    <div className="bg-[#FFFFFF] flex justify-between mx-72 gap-60 h-[100%] py-7">
      <div className="justify-between items-center">
        <div>
          <div className="justify-center items-center">
            <h2 className="text-4xl mt-8 mb-8 font-bold">
              Reduisez la longueur de vos liens d’un seul clic !
            </h2>
            <p>
              Raccourcissez vos url pour une expérience de partage plus fluide
              et plus rapide
            </p>
          </div>
          <div className="button">
            <button
              type="submit"
              className=" mt-20 mb-8  bg-orange-500  text-white text-[18px] px-8 py-5 rounded-lg transition-all hover:bg-orange-500"
            >
              Raccourcir votre lien
            </button>
          </div>
        </div>
      </div>
      <Image src={link_lienfy} alt="" />
    </div>
  );
};

export default HeroLink;
