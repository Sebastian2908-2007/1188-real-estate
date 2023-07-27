import Image from "next/image";
import slValley from '../public/reviewshero1.jpg';

export default function ReviewsHero () {
    return(
        <div className="clip-your-needful-style bg-sitedrkblu">
            <h1 className="process-reviews-heading text-center w-64 min-[540px]:w-96">
                <span className="
                 font-bold
                 text-white
                 min-[540px]:text-4xl
                 drop-shadow-3xl
                 "
                 >
                    Need to sell a property fast for cash?
                </span>
            </h1>
        <Image
        src={slValley}
        alt="overlooking the salt lake valley"
       className="w-full min-[768px]:h-[800px]"
        />
    
        </div>
    )
};