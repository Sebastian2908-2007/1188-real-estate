'use client'
import { useState } from "react";
import SellNowHero from "@/components/SellNowHero";
import HouseDetailsForm from "@/components/HouseDetailsForm";
const page = ({params}) => {
    const [names,setNames] = useState({firstName:'',lastName:''});
    return (
    <>
    <SellNowHero/>
    <section className="p-8">
    <form 
     className="hero-form
      flex flex-col
      items-center
      bg-sitedrkblu
      opacity-75
      p-2
      rounded-lg
      min-[540px]:w-64
      min-[768px]:w-80
      ">
        <div className="flex flex-col ">        
        <label className="
        mb-1
         text-sitelteblu
         font-bold
         text-center
        " 
        htmlFor="firstName"
        >
            First Name
        </label>
        <input className="rounded-lg mb-1 w-48 min-[768px]:w-64" type="text" name="firstName" />
    </div>
        <div className="flex flex-col ">        
        <label className="
        mb-1
         text-sitelteblu
         font-bold
         text-center
        " 
        htmlFor="lastName"
        >
            last Name
        </label>
        <input className="rounded-lg mb-1 w-48 min-[768px]:w-64" type="text" name="lastName" />
    </div>
      </form>
      <HouseDetailsForm/>
    <div>{params.id}</div>
    </section>
    </>
    );
};

export default page;