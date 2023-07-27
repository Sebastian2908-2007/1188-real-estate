import InitialForm from "./InitialForm";
import Image from "next/image";
import step1 from '../public/step1.jpg';
import step2 from '../public/step2.jpg';
import step3 from '../public/step3.jpg';
export default function ProcessSection () {
    return(
        <section className="
        flex 
        flex-col 
        items-center 
        mb-4 
        mt-2
        p-4
        min-[540px]:-translate-y-48
        min-[768px]:-translate-y-64
        ">
            <InitialForm/>
            <section className="flex flex-col items-center mt-4">
            <h2 className="text-center
             text-white
             text-xl
             font-bold
             drop-shadow-3xl
             mt-4
             mb-4
             min-[1028px]:text-2xl
            ">
                Dont wait Months to sell your property
            </h2>
            <section className="
            flex 
            flex-col
            items-center
            min-[768px]:flex-row
            min-[768px]:w-full
            min-[768px]:space-x-2
            ">
              <div className="
              flex 
              flex-col
               items-center
               mt-4
               mb-4
               bg-sitedrkblu 
              opacity-75
               p-2 
              border-2 
              border-white
              rounded-lg
              min-[540px]:pb-4
              min-[768px]:w-2/3
              min-[768px]:h-[24rem]
              ">
               <Image
               src={step1}
               alt="an 24 within a circle to represent an offer in 24 hours"
               className="rounded-full w-24 mt-1 mb-1 text-white border-2 border-sitelteblu"
               />
               <span className="text-center mt-1 mb-1 text-white">Step 1</span>
               <h3 className="text-center mt-1 mb-1 text-sitelteblu">Fill out the Form above</h3>
               <p className="text-center mt-1 mb-1 text-white">
                Discover the ease of our 2908 Cash Offer Program - get a quick,
                fair, all-cash offer in just 24 hours, hassle-free, and with
                 no obligations or fees.
              </p>
              </div>

              <div className="
              flex
               flex-col
               items-center
               mt-4
               mb-4
               bg-sitedrkblu
               opacity-75
               p-2
               border-2
               border-white
               rounded-lg
               min-[540px]:pb-4
               min-[768px]:w-2/3
               min-[768px]:h-[24rem]
               ">
               <Image
               src={step2}
               alt="an 24 within a circle to represent an offer in 24 hours"
               className="rounded-full w-24 mt-1 mb-1 text-white border-2 border-sitelteblu"
               />
               <span className="text-center mt-1 mb-1 text-white">Step 2</span>
               <h3 className="text-center mt-1 mb-1 text-sitelteblu">Recieve offer</h3>
               <p className="text-center mt-1 mb-1 text-white">
                Relieve the stress of selling your house with ease. Explore
                all options to sell your house as-is and gain peace of mind. Plus,
                 leave the repairs to us!
              </p>
              </div>

              <div className="
               flex 
               flex-col
               items-center
               mt-4
               mb-4
               bg-sitedrkblu
               opacity-75
               p-2 
               border-2
               border-white
               rounded-lg
               min-[540px]:pb-4
               min-[768px]:w-2/3
               min-[768px]:h-[24rem]
                ">
               <Image
               src={step3}
               alt="an 24 within a circle to represent an offer in 24 hours"
               className="rounded-full w-24 mt-1 mb-1 text-white border-2 border-sitegrn"
               />
               <span className="text-center mt-1 mb-1 text-sitegrn">Step 3</span>
               <h3 className="text-center mt-1 mb-1 text-sitegrn">Get your cash fast!</h3>
               <p className="text-center mt-1 mb-1 text-white">
               Experience unmatched flexibility in selling your home - choose your desired
                closing date with our Cash Offer Program.
                Benefit from quick closings as fast as 7 days for qualifying situations.
              </p>
              </div>
              </section>
            </section>
        </section>
    );
};