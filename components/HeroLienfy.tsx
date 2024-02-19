import React from "react";
import Image from "next/image";
import xarala_lienfy from "../public/assets/xarala_lienfy.png";
import facilite from "../public/assets/facilite.png";
import fiabilite from "../public/assets/fiabilite.png";
import optimisation from "../public/assets/optimisation.png";

const HeroLienfy = () => {
  return (
    <div className="bg-[#FFFFFF] justify-center w-full h-[50%] py-12 px-16 ">
      <h2 className="text-center text-3xl font-bold text-black pb-12">
        C’est quoi lienfy ?
      </h2>
      <div className="flex justify-between item-center px-28 gap-60">
        <div className="">
          <p className=" text-gray-400 text-xl leading-normal max-lg">
            Lienfy simplifie le partage d&apos;URL en fournissant une solution
            de raccourcissement de liens rapide, sécurisée et conviviale.
            Explorez nos fonctionnalités pour comprendre comment Lienfy peut
            rendre votre expérience de partage en ligne plus efficace.&quot;
          </p>
        </div>
        <div>
          <Image className="" src={xarala_lienfy} alt="" />
        </div>
      </div>
      <div className="justify-center flex items-center px-32 ">
        <div className=" bg-[#FFF7F2] rounded-3xl table items-center justify-center  py-6 px-12 my-24 w-[55%]">
          <h6 className="justify-center text-center text-orange-500 text-2xl py-4 ">
            Facilité
          </h6>
          <div className="flex justify-center items-center">
            <Image className="" src={facilite} alt="" />
          </div>
          <p className=" text-xl leading-normal px-16 py-4">
            Utilisez notre raccourcisseur d&apos;URL pour rendre vos liens plus
            faciles à partager. Rassemblez gratuitement des statistiques et des
            informations sur le trafic généré par vos liens et impressionnez vos
            cibles avec des liens mémorables et faciles à retenir.
          </p>
        </div>
      </div>
      <div className=" px-32 flex gap-16 justify-between items-center">
        <div className=" bg-[#FFF7F2] rounded-3xl justify-center items-center text-center px-12 w-[55%]">
          <h6 className="justify-center text-center text-orange-500 text-2xl py-4">
            Optimisation
          </h6>
          <div className="flex justify-center items-center py-4">
            <Image className="" src={optimisation} alt="" />
          </div>
          <p className=" text-xl leading-normal px-16 py-4">
            Une solution pour optimiser l&apos;information face aux limites de
            caractères posés par certains canaux de communication. Notre
            plateforme vous aide à élargir l&apos;étendu de votre message et
            captiver votre cible par des liens simples et attractifs
          </p>
        </div>
        <div className=" bg-[#FFF7F2] rounded-3xl justify-center items-center text-center px-12 w-[55%]">
          <h6 className="justify-center text-center text-orange-500 text-2xl mt-5 mb-3">
            Fiabilité
          </h6>
          <div className="flex justify-center items-center">
            <Image
              className="justify-center object-cover  mb-3"
              src={fiabilite}
              alt=""
            />
          </div>
          <p className=" text-xl leading-normal px-16 py-4">
            Instaurez et Augmentez la fiabilité de vos liens lorsque ceux-ci
            sont longs et/ou incluent une série de variables ambigu. Lienfy est
            conçue pour vous aider à renforcer la sécurité de vos privilèges en
            générant des liens permanents depuis une source fiable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroLienfy;
