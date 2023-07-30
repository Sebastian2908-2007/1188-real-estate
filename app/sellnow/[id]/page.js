'use client'
import { useState,useEffect } from "react";
import SellNowHero from "@/components/SellNowHero";
import HouseDetailsForm from "@/components/HouseDetailsForm";
import SituationForm from "@/components/SituationForm";
import NameForm from "@/components/NameForm";
import check from '@/public/checkmark.png';
import Image from "next/image";
import Cookies from "js-cookie";

const page = ({params}) => {
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
console.log(namesSubmitted);
    return (
    <>
    <SellNowHero/>
    <section className="p-2">
      {!nameesSubmitted ? <NameForm params={params} setNamesSubmitted={setNamesSubmitted}/>:<div className="flex flex-col items-center"><Image
      src={check}
      alt="big green checkmark indicating that you have filled out the name form"
      /></div>
      }
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
    
    </section>
    </>
    );
};

export default page;