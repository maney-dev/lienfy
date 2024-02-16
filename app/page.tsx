import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroCompte from "@/components/HeroCompte";
import HeroFaq from "@/components/HeroFaq";
import HeroLienfy from "@/components/HeroLienfy";
import HeroLink from "@/components/HeroLink";
import HeroVisiteur from "@/components/HeroVisiteur";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroCompte />
      <HeroLienfy />
      <HeroVisiteur />
      <HeroFaq />
      <HeroLink />
      <Footer />
    </div>
  );
};

export default page;
