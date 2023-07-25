import InitialForm from "@/components/InitialForm";
import Hero from '@/components/Hero';
import Image from "next/image";
import UglyHouse from '../public/homeugly-house1.jpg';
import UglyHouse2 from '../public/homeugly-house2.jpg';
import UglyHouse3 from '../public/homeugly-house3.jpg';
import UglyHouse4 from '../public/homeugly-house4.jpg';
export default function Home() {
  return (
    
   <>
   <Hero/>
   <section className="flex flex-col items-center mb-4 mt-2">
   <InitialForm/>
   <section className="p-4 w-64 bg-white rounded-lg mt-4">
    <h2 className="text-xl text-center mb-4 font-bold">The easiest way to sell your house</h2>
    <p className="text-center mb-2">
      At 2908 Real Estate, we are dedicated to ensuring that the process of selling
       your house in Utah is faster, easier, and stress-free.
    </p>
    <p className="text-center mb-2">
    If you are committed 
      to selling your property in UT, we stand prepared to present you with a fair, all-cash offer.
    </p>
    <p className="text-center mb-2">
    What sets us apart is that we purchase your house directly from you, as-is, 
    allowing you to walk away without the burden of handling any repairs. 
    </p>
    <p className="text-center mb-2">
    Additionally, we take
     care of property clean-up for you, making the entire experience remarkably easy and convenient.
    </p>
   </section>

   <section className="p-4 w-64 bg-white rounded-lg mt-4">
   <h2 className="text-xl text-center mb-4 font-bold">More Than Cash Offers</h2>
   <p className="text-center mb-2">
   At 2908 Real Estate, we go beyond just cash offers; our commitment to helping
    Utah home sellers extends to finding proven and creative solutions for your specific needs
   </p>
   <p className="text-center mb-2">
   If an all-cash offer doesn't align with your goals,
    we have the expertise to explore alternative options that can ease your financial burdens.
   </p>
   <p className="text-center mb-2">
   Our team is skilled at devising payment plans tailored to
   your situation, providing you with the potential for monthly profits.
   </p>
   <p className="text-center mb-2">
   Our goal is to ensure that you achieve the best possible outcome,
   allowing you to sell your house while maximizing your returns and securing your peace of mind.
   </p>
   <p className="text-center mb-2">
   With 2908 Real Estate, you'll experience a comprehensive
    approach that goes above and beyond to meet your unique requirements. 
   </p>
   </section>

   <section className="p-4 w-64 bg-white rounded-lg mt-4">
   <h2 className="text-xl text-center mb-4 font-bold">Ugly House? No Problem</h2>
   <Image
   src={UglyHouse}
   alt="very distressed house"
   />
   <p className="text-center mb-2">
   At 2908 Real Estate, we specialize in purchasing
    "diamonds in the rough" – the not-so-perfect houses that other buyers might shy away from.
   </p>
   <Image
   src={UglyHouse2}
   alt="very distressed house"
   />
   <p className="text-center mb-2">
   If your home needs some tender loving care and falls into the category of an "ugly house," worry not!
    We are more than eager to make you a fair all-cash offer for your property, exactly as it is.
   </p>
   <Image
   src={UglyHouse3}
   alt="very distressed house"
   />
   <p className="text-center mb-2">
   You won't have to lift a finger to fix it up or spend money on renovations. We see the hidden potential
    in these unique properties and have the expertise to handle all the necessary improvements.
   </p>
   <Image
   src={UglyHouse4}
   alt="very distressed house"
   />
   <p className="text-center mb-2">
   Selling your "ugly house" has never been easier – just leave it to 2908 Real Estate, and we'll
    take care of the rest, providing you with a hassle-free and profitable selling experience.
   </p>
   </section>

   </section>
   </>
 
  )
}
