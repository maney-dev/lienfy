import React from "react";

const HeroCompte = () => {
  return (
    <div className="bg-[#EEEEEE] w-full h-[50%] justify-center py-12 px-16 ">
      <h2 className="text-center text text-3xl font-bold text-black pb-12">
        Creez un compte et commencez à raccourcir vos liens
      </h2>
      <div className="bg-[#FFFFFF] mb-8 py-10 mx-28 place-items-center divide-y divide-slate-200 border rounded-2xl justify-center items-center">
        <form className=" px-24 py-14" action="/" method="POST">
          <div className="w-full items-center">
            <label className="justify-center" htmlFor="">
              {" "}
              <p className="px-4 text-xl">Entrer le lien à raccourcir</p> <br />
              <input
                className="px-4 rounded-2xl  border py-5 w-[100%]"
                type="text"
                id="url"
                name="url"
                placeholder="https : // aefrduje458gfghgjGJKfvv7azeegbk;ckbldjdtkgllgl"
              />
              <button
                type="submit"
                className="bg-orange-500  text-white text-[18px] px-8 py-6 mt-16 rounded-lg transition-all hover:bg-orange-500"
              >
                Inscrivez-vous gratuitement et commencez à raccourcir vos liens
                !
              </button>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroCompte;
