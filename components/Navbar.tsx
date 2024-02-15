import Link from "next/link";
const NavBar = () => {
  return (
    <div className="bg-blue-950 text-[#efefef] h-[70px] w-full py-2 px-6 flex justify-center">
      <div className="h-full w-10/12 my-auto flex justify-between items-center">
        {/* left */}
        <h2 className="text-4xl">
          <Link href={"/"}>
            Lien<span className="text-[#ef7919]">fy</span>
          </Link>
        </h2>
        {/* center */}
        <ul className="flex justify-center items-center gap-6 text-[#efefef] text-[20px]">
          <li className="cursor-pointer transition-all hover:text-[#ef7919]">
            <Link href={"/"}>Accueil</Link>
          </li>
          <li className="cursor-pointer transition-all hover:text-[#ef7919]">
            <Link href={"/"}>Mes liens</Link>
          </li>
          <Link href={"/"}>
            <li className="cursor-pointer transition-all hover:text-[#ef7919]">
              Blog
            </li>
          </Link>
        </ul>
        {/* right */}
        <div className="flex justify-between items-center gap-6">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-orange-500 rounded-lg group bg-gradient-to-br from-orange-500  to-orange-500  group-hover:from-orange-500  group-hover:to-orange-500  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-orange-500  dark:focus:ring-orange-500 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-orange-500  rounded-md group-hover:bg-opacity-0">
              Se connecter
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-orange-500 rounded-lg group bg-gradient-to-br from-orange-500  to-orange-500  group-hover:from-orange-500  group-hover:to-orange-500  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-orange-500  dark:focus:ring-orange-500 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-orange-500  rounded-md group-hover:bg-opacity-0">
              S&apos;inscrire
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
