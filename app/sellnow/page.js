import SellNowHero from "@/components/SellNowHero";
import InitialForm from "@/components/InitialForm";

export default function SellNow () {
    return(
        <>
        <SellNowHero/>
        <section className="p-4">
        <InitialForm/>
        </section>
        </>
    );
};