import Image from "next/image";
import OgdenCity from '../public/process-hero.jpg';

export default function ProcessHero () {
    return(
        <div className="clip-your-needful-style bg-sitedrkblu">
            <h1 className="process-hero-heading text-center w-64 min-[540px]:w-96">
            <span className=" font-bold text-black  min-[540px]:text-4xl drop-shadow-3xl">Selling</span>
            &nbsp;
            <span className=" font-bold text-black min-[540px]:text-4xl drop-shadow-3xl">Houses</span>
            &nbsp;
            
                <span className="
                 font-bold
                 text-black
                 min-[540px]:text-4xl
                 drop-shadow-3xl
                 "
                 >
                    Made Simple...
                </span>
               
            </h1>
        <Image
        src={OgdenCity}
        alt="Ogden utah"
       className="w-full min-[768px]:h-[800px]"
        />
    
        </div>
    )
};