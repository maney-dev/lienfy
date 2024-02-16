import React from "react";
import Image from "next/image";
import xarala_lienfy from "../public/assets/xarala_lienfy.png";
import facilite from "../public/assets/facilite.png";
import fiabilite from "../public/assets/fiabilite.png";
import optimisation from "../public/assets/optimisation.png";

const HeroLienfy = () => {
  return (
    <div className="bg-[#FFFFFF]">
      {/* justify-center items-center */}
      <div className="flex justify-center item-center">
        <h2 className="text-4xl mt-8 mb-8 font-bold">C’est quoi lienfy ?</h2>
      </div>
      <div className="flex item-center text-xl justify-between gap-8">
        <p className="text-xl justify-center items-center ml-36 text-gray-400">
          Lienfy simplifie le partage d&apos;URL en fournissant une solution de
          raccourcissement de liens rapide, sécurisée et conviviale. Explorez
          nos fonctionnalités pour comprendre comment Lienfy peut rendre votre
          expérience de partage en ligne plus efficace.&quot;
        </p>
        <div className="mr-36">
          <Image className="object-cover mr-52 " src={xarala_lienfy} alt="" />
        </div>
      </div>
      <div className="justify-center  mx-96">
        <div className=" px-2 bg-[#FFF7F2] rounded-3xl justify-center items-center ml-[125px] text-center text-xl h-[300px] w-[700px]">
          <h6 className="justify-center text-center text-orange-500 text-2xl mt-5 mb-3">
            Facilité
          </h6>
          <Image
            className="justify-center object-cover ml-[46%] mb-3"
            src={facilite}
            alt=""
          />
          <p>
            Utilisez notre raccourcisseur d&apos;URL pour rendre vos liens plus
            faciles à partager. Rassemblez gratuitement des statistiques et des
            informations sur le trafic généré par vos liens et impressionnez vos
            cibles avec des liens mémorables et faciles à retenir.
          </p>
        </div>
      </div>
      <div className=" px-60 flex gap-10 justify-between item-center my-12">
        <div className=" px-2 bg-[#FFF7F2] rounded-3xl justify-center items-center text-center text-xl h-[300px] [700px]">
          <h6 className="justify-center text-center text-orange-500 text-2xl mt-5 mb-3">
            Optimisation
          </h6>
          <Image
            className="justify-center object-cover ml-[46%] mb-3"
            src={optimisation}
            alt=""
          />
          <p className=" text-xl ">
            Une solution pour optimiser l&apos;information face aux limites de
            caractères posés par certains canaux de communication. Notre
            plateforme vous aide à élargir l&apos;étendu de votre message et
            captiver votre cible par des liens simples et attractifs
          </p>
        </div>
        <div className="px-2 bg-[#FFF7F2] rounded-3xl justify-center items-center text-center text-xl h-[300px] [700px]">
          <h6 className="justify-center text-center text-orange-500 text-2xl mt-5 mb-3">
            Fiabilité
          </h6>
          <div className="justify-center items-center">
            <Image
              className="justify-center object-cover ml-[46%] mb-3"
              src={fiabilite}
              alt=""
            />
          </div>
          <p>
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
