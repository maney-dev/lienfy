import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0E1D34] justify-center pb-11 text-white pt-11">
      <div className=" flex justify-between item-center px-24 gap-60 mx-48">
        <div>
          <div>
            <h2 className="text-2xl">
              Lien<span className="text-[#ef7919]">fy</span>
            </h2>
            <p>Le raccourcisseur d&apos;url panafricain.</p>
          </div>{" "}
          <br />
          <div>
            <p>
              Sicap Mbao <br />
              Boutique Baye Niass <br />
              Dakar, Senegal
            </p>
          </div>{" "}
          <br />
          <div>
            <p>
              <span className="text-xl text-slate-300">Phone:</span> +221 77 860
              60 64 <br />
              <span className="text-xl text-slate-300">Email:</span>{" "}
              xaralatech@gmail.com
            </p>
          </div>
        </div>
        <div>
          <div className="block gap-10 text-gray-400">
            <p className="text-white">Lienfy</p> <br />
            <p>Accueil</p> <br />
            <p>C’est quoi lienfy ?</p> <br />
            <p>Blog</p> <br />
            <p>Nous contactez</p> <br />
            <p>Déconnexion</p>
          </div>
        </div>
        <div className="gap-8">
          <h2>Mes liens</h2> <br />
          <p className="text-stone-100">Nombre de click </p>
        </div>
      </div>
      <p className="text-center mt-11">
        © Copyright Lienfy. All Rights Reserved. Crée par{" "}
        <span className="text-orange-500">Xarala</span>
      </p>
    </div>
  );
};

export default Footer;
