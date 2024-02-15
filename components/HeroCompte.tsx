import React from "react";

const HeroCompte = () => {
  return (
    <div className="bg-[#EEEEEE] h-[500px]">
      <h2 className="text-center text-2xl mb-5 pt-8">
        Creez un compte et commencez à raccourcir vos liens
      </h2>
      <form
        className=" mb-8 pt-12 bg-[#FFFFFF] ml-48 mr-44 place-items-center divide-y divide-slate-200 border rounded-2xl justify-center items-center"
        action="/"
        method="POST"
      >
        <div className=" pb-9 w-96">
          <label className="w-full ml-20 " htmlFor="">
            {" "}
            Entrer le lien à raccourcir
            <input
              className=" ml-20 box-border border py-5 w-[1230px]"
              type="text"
              id="url"
              name="url"
              placeholder="https : // aefrduje458gfghgjGJKfvv7azeegbk;ckbldjdtkgllgl"
            />
          </label>
        </div>
        <div className="button">
          <button className=" ml-20 mt-20 mb-8  bg-orange-500  text-white text-[18px] px-8 py-2 rounded-lg transition-all hover:bg-orange-500">
            Inscrivez-vous gratuitement et commencez à raccourcir vos liens !
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroCompte;
