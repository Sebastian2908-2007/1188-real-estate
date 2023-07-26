import Image from "next/image";
import OgdenCity from '../public/process-hero.jpg';

export default function ProcessHero () {
    return(
        <div className="clip-your-needful-style bg-sitedrkblu">
            <h1 className="hero-heading text-center w-64 min-[540px]:w-96">
            <span className=" font-bold text-black  min-[540px]:text-4xl drop-shadow-3xl">Selling</span>
            &nbsp;
            <span className=" font-bold text-black min-[540px]:text-4xl drop-shadow-3xl">Made</span>
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
                     and simple...
                </span>
            </h1>
        <Image
        src={OgdenCity}
        alt="wasatch front"
        />
    
        </div>
    )
};