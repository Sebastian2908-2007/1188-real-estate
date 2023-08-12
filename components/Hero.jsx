import Image from "next/image";
import wasatch from '@/public/wasatch.jpg';

export default function Hero () {
    return(
        <div className="clip-your-needful-style bg-sitedrkblu">
            <h1 className="hero-heading text-center w-64 min-[540px]:w-96">
            <span className=" font-bold text-black  min-[540px]:text-4xl drop-shadow-3xl">Need to sell</span>
            &nbsp;
            <span className=" font-bold text-black min-[540px]:text-4xl drop-shadow-3xl">a house </span>
            &nbsp;
            
                <span className="
                 font-bold
                 text-black
                 min-[540px]:text-4xl
                 drop-shadow-3xl
                 "
                 >
                    Fast
                </span>
                &nbsp;
                <span className=" font-bold 
                 text-black
                 min-[540px]:text-4xl
                 drop-shadow-3xl
                ">
                     in Utah?
                </span>
            </h1>
        <Image
        src={wasatch}
        alt="wasatch front"
        className="min-[1366px]:w-full"
        />
    
        </div>
    )
};