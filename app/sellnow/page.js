import SellNowHero from "@/components/SellNowHero";
import InitialForm from "@/components/InitialForm";

export default function SellNow () {
    return(
        <>
        <SellNowHero/>
        <section className="p-4 
         min-[540px]:flex
         min-[540px]:flex-col
         min-[540px]:items-center
        ">
        <h2 className="text-xl text-center mb-4 font-bold drop-shadow-3xl">
            Fill out the form below to get started on a quick cash offer
        </h2>
        <InitialForm/>
        </section>
        </>
    );
};