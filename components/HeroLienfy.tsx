import React from "react";

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
        <p className="mr-36  text-7xl">
          <b>
            lien<span className="text-orange-500">fy</span>
          </b>
        </p>
      </div>
      <div className="justify-center  mx-96">
        <div className=" px-2 bg-[#FFF7F2] shadow-md justify-center items-center ml-80 text-center text-xl h-72 w-96">
          <h6 className="justify-center text-center text-orange-500 text-2xl mt-5 mb-3">
            Facilité
          </h6>
          <p>
            Utilisez notre raccourcisseur d&apos;URL pour rendre vos liens plus
            faciles à partager. Rassemblez gratuitement des statistiques et des
            informations sur le trafic généré par vos liens et impressionnez vos
            cibles avec des liens mémorables et faciles à retenir.
          </p>
        </div>
      </div>
      <div className=" px-60 flex gap-10 mx-40 justify-between item-center my-12">
        <div className="px-2 bg-[#FFF7F2] shadow-md justify-center items-center text-center text-xl h-72 w-96">
          <h6 className="justify-center text-center text-orange-500 text-2xl mt-5 mb-3">
            Optimisation
          </h6>
          <p className=" text-xl ">
            Une solution pour optimiser l&apos;information face aux limites de
            caractères posés par certains canaux de communication. Notre
            plateforme vous aide à élargir l&apos;étendu de votre message et
            captiver votre cible par des liens simples et attractifs
          </p>
        </div>
        <div className="px-2 bg-[#FFF7F2] shadow-md justify-center items-center text-center text-xl h-72 w-96">
          <h6 className="justify-center text-center text-orange-500 text-2xl mt-5 mb-3">
            Fiabilité
          </h6>
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
