import dynamic from 'next/dynamic'
const AboutHero = dynamic(() =>import("@/components/AboutHero"), {ssr: false});
import Image from "next/image";
import aboutImg1 from '@/public/aboutimg1.jpg';
import founder1 from '@/public/aboutfounder2.jpg';
import founder2 from '@/public/About-founder.jpg';
import leadSpecialist from '@/public/lead-specialist.jpg'
export default function About () {
    return(
        <>
         <AboutHero/>
         <section className="p-4 min-[1024px]:p-11">
         <section className=" 
        bg-white
         rounded-lg
         mt-4
         pt-4
         mb-8
         min-[540px]:mt-0
         min-[768px]:flex
         min-[768px]:flex-col
         min-[768px]:items-center
         min-[1280px]:p-8
         ">
             <h2 className="font-bold text-xl text-center mb-4  drop-shadow-3xl">
                2908 Real Estate is family owned and operated
            </h2>
           
            <div className="flex flex-col items-center">
            <Image
            src={aboutImg1}
            alt="2908 real estae family in fron of dead hore point"
            className='rounded-lg'
            />
            <p className="p-2 text-center">(2908 Real Estate family hiking at "dead horse point")</p>
            </div>
            <div className="grid grid-cols-1 p-2 min-[768px]:grid-cols-3 min-[768px]:gap-2 min-[1024px]:gap-11">
            <div className="flex flex-col items-center">
            <Image
            src={founder1}
            alt="Meet Whitney a 2908 real estate founder and accounts manager"
            className="rounded-lg min-[768px]:mb-1 min-[768px]:h-[16rem] min-[1366px]:h-[20rem] min-[1920px]:h-[25rem]"
           
            />
            <p className="p-2 text-center">(Meet Whitney a 2908 Real Estate founder and the best accounts manager this side of the Mississippi!)</p>
            </div>
            <div className="flex flex-col items-center">
           
            <Image
            src={founder2}
            alt="Meet Sebastian one of 2908 Real Estates founders and an aquisition specialist"
            className="rounded-lg min-[768px]:mb-1 min-[768px]:h-[16rem] min-[1366px]:h-[20rem] min-[1920px]:h-[25rem]"
            />
            <p className="p-2 text-center">(Meet Sebastian a 2908 Real Estate founder, aquisition specialist and Whitney's employee)</p>
            </div>
            <div className="flex flex-col items-center">
           
            <Image
            src={leadSpecialist}
            alt="Meet Shamma the 2908 Real Estate go to guy"
            className='rounded-lg  min-[768px]:h-[16rem] min-[1366px]:h-[20rem] min-[1920px]:h-[25rem]'
            />
            <p className="p-2 text-center">(Meet Shamma the 2908 Real Estate lead and customer service specialist. This guy has the work ethic and brains of four men!)</p>
            </div>
           </div>
          </section>
          <section className=" 
        bg-white
         rounded-lg
         opacity-75
         mt-4
         pt-4
         p-4
         mb-8
         min-[540px]:mt-0
         min-[768px]:flex
         min-[768px]:flex-col
         min-[768px]:items-center
         min-[1024px]:pb-8
         ">
            <h2 className="font-bold text-xl text-center mb-4  drop-shadow-3xl">Our Mission</h2>
            <h3 className='text-center bg-sitelteblu p-1 mb-4 min-[1366px]:p-4'><q className='font-extrabold'>Striving to make a positive impact one home at a time</q></h3>
            <p className="p-2 text-center font-bold min-[1024px]:w-[70%] min-[1366px]:w-[60%] min-[1366px]:mb-10">At 2908 Real Estate, our mission is to provide compassionate assistance to homeowners facing 
                difficult situations. We firmly believe in the value of family and strive to create win-win
                 outcomes for every client and their loved ones. 
                 </p>
                 <p className="p-2 text-center font-bold min-[1024px]:w-[70%] min-[1366px]:w-[60%] min-[1366px]:mb-10">
                 Our dedicated team understands that life can 
                 present unexpected challenges, and we are committed to helping homeowners navigate through
                  tough times with understanding and care.
                </p>
                <p className="p-2 text-center font-bold min-[1024px]:w-[70%] min-[1366px]:w-[60%] min-[1366px]:mb-10">
                By offering a fair and hassle-free process, we aim to 
                  relieve the burdens of property ownership, ensuring our clients can move forward with peace of 
                  mind. Whether it's due to financial struggles, 
                </p> 
                <p className="p-2 text-center font-bold min-[1024px]:w-[70%] min-[1366px]:w-[60%] min-[1366px]:mb-10">
                relocation, foreclosure, or any other circumstance,
                   we are here to support families in their time of need, helping them find the best solutions for their unique situations.   
                </p>  
                <p className="p-2 text-center font-bold min-[1024px]:w-[70%] min-[1366px]:w-[60%] min-[1366px]:mb-10">
                At 2908 Real Estate, we prioritize the well-being of our
                 clients and their families above all else, we strive to make a positive impact one home at a time.
                 </p>
          </section>
         </section> 
        </>
    );
};