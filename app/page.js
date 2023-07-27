import InitialForm from "@/components/InitialForm";
import Hero from '@/components/Hero';
import Image from "next/image";
import UglyHouse from '../public/homeugly-house1.jpg';
import UglyHouse2 from '../public/homeugly-house2.jpg';
import UglyHouse3 from '../public/homeugly-house3.jpg';
import UglyHouse4 from '../public/homeugly-house4.jpg';
import easiestPic2 from '../public/easiestway2.jpg';
import easiestPic3 from '../public/easiestway3.jpg';
import easiestPic4 from '../public/easiestway4.jpg';
import moreThan1 from '../public/morethan1.jpg';
import moreThan2 from '../public/morethan2.jpg';
import moreThan3 from '../public/morethan3.jpg';
/**easiestpic 1 can  be used elwhere in project*/
export default function Home() {
  return (
    
   <>
   <Hero/>
   <section className="
   flex 
   flex-col 
   items-center 
   mb-4 
   mt-2
   min-[540px]:-translate-y-48
   min-[768px]:-translate-y-64
   ">
   <InitialForm/>
  <section className="
   w-64
   min-[360px]:w-80
   grid
   auto-rows-min
   grid-cols-1
   min-[540px]:w-96
   min-[768px]:grid-cols-2
   min-[768px]:w-full
   min-[768px]:p-8
   gap-8
   ">
   <section className="p-4
    bg-white
    rounded-lg
    mt-4
    opacity-80
    min-[768px]:flex
    min-[768px]:flex-col
    min-[768px]:items-center
   ">
    <h2 className="text-xl text-center mb-4 font-bold drop-shadow-3xl">The easiest way to sell your house fast</h2>
    <Image
    className="mb-4 rounded-lg"
   src={easiestPic2}
   alt="A watch or clock that conveys the speed at which 2908 real estate can by your house"
   />
    <p className="text-center mb-4">
      At 2908 Real Estate, we are dedicated to ensuring that the process of selling
       your house in Utah is faster, easier, and stress-free.
    </p>
    <Image
    className="mb-4 rounded-lg"
   src={easiestPic4}
   alt="A distressed house bought fast by 2908 real estate"
   />
    <p className="text-center mb-4">
    If you are committed 
      to selling your property in UT, we stand prepared to present you with a fair, all-cash offer.
    </p>
    <p className="text-center mb-4">
    What sets us apart is that we purchase your house directly from you, as-is, 
    allowing you to walk away without the burden of handling any repairs. 
    </p>
    <Image
    className="mb-4 rounded-lg"
   src={easiestPic3}
   alt="A nice house bought quickly by 2908 real estate"
   />
    <p className="text-center mb-4">
    Additionally, we take
     care of property clean-up for you, making the entire experience remarkably easy and convenient.
    </p>
   </section>

   <section className="p-4
    bg-white
    rounded-lg
    mt-4
    opacity-80
    min-[768px]:flex
    min-[768px]:flex-col
    min-[768px]:items-center
   ">
   <h2 className="text-xl text-center mb-4 font-bold drop-shadow-3xl">More Than Cash Offers</h2>
   <Image
   className="mb-4 rounded-lg"
   src={moreThan1}
   alt="2908 real estate completes win win deals"
   />
   <p className="text-center mb-4">
   At 2908 Real Estate, we go beyond just cash offers; our commitment to helping
    Utah home sellers extends to finding proven and creative solutions for your specific needs
   </p>
   <Image
   className="mb-4 rounded-lg"
   src={moreThan2}
   alt="Fixer upper sold as-is to 2908 realestate"
   />
   <p className="text-center mb-4">
   If an all-cash offer doesn't align with your goals,
    we have the expertise to explore alternative options that can ease your financial burdens.
   </p>
   <p className="text-center mb-4">
   Our team is skilled at devising payment plans tailored to
   your situation, providing you with the potential for monthly profits.
   </p>
   <Image
   className="mb-4 rounded-lg"
   src={moreThan3}
   alt="2908 real estate seller finaced deal"
   />
   <p className="text-center mb-4">
   Our goal is to ensure that you achieve the best possible outcome,
   allowing you to sell your house while maximizing your returns and securing your peace of mind.
   </p>
   <p className="text-center mb-4">
   With 2908 Real Estate, you'll experience a comprehensive
    approach that goes above and beyond to meet your unique requirements. 
   </p>
   </section>

   <section className="p-4
    bg-white
    rounded-lg
    mt-4
    min-[768px]:col-span-2
    min-[768px]: flex
    min-[768px]: flex-col
    min-[768px]: items-center
    opacity-80
   ">
   <h2 className="text-xl text-center mb-4 font-bold drop-shadow-3xl">Ugly House? No Problem</h2>
   <Image
   className="mb-4 rounded-lg"
   src={UglyHouse}
   alt="very distressed house"
   />
   <p className="text-center mb-4">
   At 2908 Real Estate, we specialize in purchasing
    "diamonds in the rough" – the not-so-perfect houses that other buyers might shy away from.
   </p>
   <Image
   className="mb-4 rounded-lg"
   src={UglyHouse2}
   alt="very distressed house"
   />
   <p className="text-center mb-4">
   If your home needs some tender loving care and falls into the category of an "ugly house," worry not!
    We are more than eager to make you a fair all-cash offer for your property, exactly as it is.
   </p>
   <Image
   className="mb-4 rounded-lg"
   src={UglyHouse3}
   alt="very distressed house"
   />
   <p className="text-center mb-4">
   You won't have to lift a finger to fix it up or spend money on renovations. We see the hidden potential
    in these unique properties and have the expertise to handle all the necessary improvements.
   </p>
   <Image
   className="mb-4 rounded-lg"
   src={UglyHouse4}
   alt="very distressed house"
   />
   <p className="text-center mb-4">
   Selling your "ugly house" has never been easier – just leave it to 2908 Real Estate, and we'll
    take care of the rest, providing you with a hassle-free and profitable selling experience.
   </p>
   </section>
</section>
   </section>
   </>
 
  )
}
