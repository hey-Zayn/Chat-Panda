"use client";

import React from "react";

import BusinessOperations from "@/components/Business-operations";



import ServiceForm from "@/components/ServiceForm";

import ProjectFilterComponent from "@/components/ProjectFilterComponent";

import PortfolioHero from "@/components/PortolioHero";

import HaloHeroSection from "@/components/HaloHeroSection";


import InteractiveTimeline from "@/components/InteractiveTimeline";





const page = () => {
 

  return (
    <>
      <div className="w-full h-full bg-[#191919]">
        <PortfolioHero/>       
        <InteractiveTimeline/>
        <section className="w-full h-full bg-black">
          <div>
            <ProjectFilterComponent/>
          </div>
        </section>
        <HaloHeroSection/>
  
   
       

       
        
        <ServiceForm />
        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
