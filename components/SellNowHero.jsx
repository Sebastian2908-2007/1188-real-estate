import Image from 'next/image';
import moneyImg from '@/public/sellnowhero1460.jpg';

const SellNowHero = () => {
    return(
        <div className="clip-your-needful-style bg-sitedrkblu">
            <h1 className="process-reviews-heading text-center w-64 min-[540px]:w-96">
                <span className="
                 font-bold
                 text-Black
                 min-[540px]:text-4xl
                 drop-shadow-3xl
                 "
                 >
                    Need to sell a property fast for cash?
                </span>
            </h1>
        <Image
        src={moneyImg}
        alt="overlooking the salt lake valley"
       className="w-full min-[768px]:h-[800px] h-72"
        />
        </div>
    );
};
export default SellNowHero;