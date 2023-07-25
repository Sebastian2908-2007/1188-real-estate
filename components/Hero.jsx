import Image from "next/image";
import wasatch from '../public/wasatch.jpg';

export default function Hero () {
    return(
        <div className="clip-your-needful-style bg-sitedrkblu">
            <h1 className="hero-heading w-64 min-[540px]:w-96">
            <span className=" font-bold text-sitedrkblu min-[540px]:text-4xl">Need to sell</span>
            &nbsp;
            <span className=" font-bold text-sitedrkblu min-[540px]:text-4xl">a house </span>
            &nbsp;
            
                <span className="font-bold
                 text-white
                 min-[540px]:text-sitedrkblu
                 min-[540px]:text-4xl"
                 >
                    fast
                </span>
                &nbsp;
                <span className=" font-bold 
                 text-sitedrkblu
                 min-[540px]:text-sitedrkblu
                 min-[540px]:text-4xl
                ">
                     in Utah?
                </span>
            </h1>
        <Image
        src={wasatch}
        alt="wasatch front"
        />
    
        </div>
    )
};