'use client'
import { useState,useEffect } from "react";
import SellNowHero from "@/components/SellNowHero";
import HouseDetailsForm from "@/components/HouseDetailsForm";
import SituationForm from "@/components/SituationForm";
import NameForm from "@/components/NameForm";
import check from '@/public/checkmark.png';
import Image from "next/image";
import Cookies from "js-cookie";

const Page = ({params}) => {
    const namesSubmitted = Cookies.get('nameFormComplete') === 'yes';
    const houseInfoSubmitted = Cookies.get('HouseDetComplete') === 'yes';
    const situationInfoSubmitted = Cookies.get('situationSubmitted') === 'yes';
   const [nameesSubmitted,setNamesSubmitted] = useState(null);
   const [houseDetSubmitted,setHouseDetSubmitted] = useState(null);
   const [situationSubmitted,setSituationSubmitted] = useState(null);
   useEffect(() => {
    if(namesSubmitted) setNamesSubmitted(true);
    if(houseInfoSubmitted) setHouseDetSubmitted(true);
    if(situationInfoSubmitted) setSituationSubmitted(true);

});

    return (
    <>
    <SellNowHero/>
    <section className="p-2 min-[540px]:flex min-[540px]:flex-col min-[540px]:items-center">
      {!nameesSubmitted ? <NameForm params={params} setNamesSubmitted={setNamesSubmitted}/>:<div className="flex flex-col items-center"><Image
      src={check}
      alt="big green checkmark indicating that you have filled out the name form"
      /></div>
      }
      <div className="
      min-[768px]:w-full
       min-[768px]:flex
       min-[768px]:flex-row
       min-[768px]:items-start
       min-[768px]:justify-between
       min-[768px]:p-8
       min-[1024px]:p-32
       min-[1920px]:p-[34rem]
       ">
      {!houseDetSubmitted ? <HouseDetailsForm params={params} setHouseDetSubmitted={setHouseDetSubmitted}/>:<div className="flex flex-col items-center">
        <Image
      src={check}
      alt="big green checkmark indicating that you have filled out the house details form"
      />
      </div>
      }
      {!situationSubmitted ? <SituationForm params={params} setSituationSubmitted={setSituationSubmitted}/>:<div className="flex flex-col items-center">
        <Image
      src={check}
      alt="big green checkmark indicating that you have filled out the situation form"
      />
      </div>
      }
    </div>
    </section>
    </>
    );
};

export default Page;