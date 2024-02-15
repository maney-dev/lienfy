import Hero from "@/components/Hero";
import HeroCompte from "@/components/HeroCompte";
import HeroLienfy from "@/components/HeroLienfy";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroCompte />
      <HeroLienfy />
    </div>
  );
};

export default page;
