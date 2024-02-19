import React from "react";

const HeroFaq = () => {
  return (
    <div className="bg-[#FCFCFC] h-[100%]">
      <div className="bt-10 py-11">
        <div className="flex justify-center item-center">
          <h2 className="text-4xl mt-8 mb-8 font-bold">FAQ</h2>
        </div>
        <div className="mb-8 pt-12 bg-[#FFFFFF] mx-72  place-items-center border rounded-2xl justify-center items-center">
          <h2 className=" mb-8 text-orange-500 text-2xl text-center">
            1. Q : Pourquoi raccourcir un lien ?
          </h2>
          <p className="text-xl my-11 mx-10">
            <span className="text-orange-500">. R : </span>Les liens raccourcis
            sont plus esthétiques et prennent moins de place. Ils sont souvent
            utilisés sur les plateformes de médias sociaux où l&apos;espace est
            limité.
          </p>
        </div>
        <div className="mb-8 pt-12 bg-[#FFFFFF] mx-72 place-items-center border rounded-2xl justify-center items-center">
          <h2 className=" mb-8 text-orange-500 text-2xl text-center">
            2. Q : Quels sont les avantages de raccourcir un lien ?
          </h2>
          <p className="text-xl my-11 mx-10">
            <span className="text-orange-500">. R : </span>Amélioration de
            l&apos;esthétique des liens <br />
            <span className="text-orange-500">.</span> Économie d&apos;espace
            sur les supports limités en caractères <br />
            <span className="text-orange-500">.</span> Suivi des clics pour
            évaluer la popularité ou l&apos;efficacité du lien
          </p>
        </div>
        <div className="mb-8 pt-12 bg-[#FFFFFF] mx-72 place-items-center border rounded-2xl justify-center items-center">
          <h2 className=" mb-8 text-orange-500 text-2xl text-center">
            3. Q : Est-ce sécuritaire d&apos;utiliser des liens raccourcis ?{" "}
            <br />
            Est-ce sécuritaire d&apos;utiliser des liens raccourcis ?
          </h2>
          <p className="text-xl my-11 mx-10">
            <span className="text-orange-500">. R :</span> En général, oui.
            Cependant, soyez conscient que les liens raccourcis peuvent masquer
            la destination réelle, ce qui pourrait être exploité à des fins
            malveillantes. Utilisez des services réputés pour minimiser les
            risques.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroFaq;
