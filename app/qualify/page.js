import Image from "next/image";
import rightFit from '@/public/rightfit500.jpg';
import qualifyHouse from '@/public/qualifyhouse500.jpg';
import InitialForm from "@/components/InitialForm";
import QualifyHero from "@/components/QualifyHero";
import exchange from "@/public/qualify1031.jpg";
import optionsPic from '@/public/qualifyoptions500.jpg';
export default function Reviews () {
    return(
        <>
        <QualifyHero/>
        <div className="form-in-hero min-[540px]:h-96">
            <InitialForm/>
            <h2 className="
            text-center
             mt-8
             text-white
             min-[540px]:mt-[8rem]
             min-[540px]:text-3xl
             text-xl
             drop-shadow-3xl
             min-[768px]:font-bold
            "
            >Selling made simple !</h2>
            </div>
        <section className="p-4 min-[1366px]:p-36  min-[1920px]:p-52">
        <section className=" 
        bg-white
         rounded-lg
         mt-4
         pt-4
         opacity-75
         min-[540px]:mt-0
         min-[768px]:flex
         min-[768px]:flex-col
         min-[768px]:items-center">
            <h2 className="font-bold text-xl text-center mb-4  drop-shadow-3xl">Are you the right fit?</h2>
            <Image
            src={rightFit}
            alt="A cool looking question mark"
            />
            <p className="text-center mt-4 mb-4 p-2 min-[1024px]:w-[75%]  min-[1920px]:w-[50%]">
            While selling a house fast for cash can be a convenient option for many homeowners, it's important to recognize that it may not be suitable for everyone. Certain
             circumstances and factors might make selling through this method less practical or advisable.
            </p>
            <p className="text-center mb-4 p-2 min-[1024px]:w-[75%]  min-[1920px]:w-[50%]">
            Firstly, homeowners who are looking to maximize their property's sale price might find cash offers less appealing. As cash buyers we seek a discount for the convenience and speed of the transaction,
             which could result in a lower sale price compared to traditional market sales.
            </p>
            <p className="text-center mb-4 p-2 min-[1024px]:w-[75%]  min-[1920px]:w-[50%]">
            Secondly, individuals who have ample time to sell and are not in a rush might prefer to list their house conventionally. The traditional real estate market can
             provide the opportunity for multiple offers, potentially leading to a higher selling price.
            </p>
            <Image
            src={qualifyHouse}
            alt="A really beat up house that would recieved a low cash offer from 2908 real estate"
            />
            <p className="text-center mb-4 p-2 min-[1024px]:w-[75%]  min-[1920px]:w-[50%]">
            Furthermore, properties with significant structural issues or those in need of extensive repairs may not fetch a price a that you as a property owner are comfortable with.
             If your property is highly distressed there is a good chance you will recieve a very low cash offer. If you are not comfortable with that, it is probably best to renovate your property yourself
             and sell higher at a later date.
            </p>
            <p className="text-center mb-4 p-2 min-[1024px]:w-[75%]  min-[1920px]:w-[50%]">
            Additionally, homeowners who are emotionally attached to their property or have strong sentimental ties may prioritize finding the right buyer over a quick sale for cash. Selling a home can be an emotional process,
             and some may prefer to invest time and effort into securing the perfect buyer.
            </p>
            <Image
            src={exchange}
            alt="two houses to represent a 1031 exchange"
            />
            <p className="text-center mb-4 p-2 min-[1024px]:w-[75%]  min-[1920px]:w-[50%]">
            Finally, sellers who are seeking a complex sale, such as a 1031 exchange or selling with specific contingencies,
             may find it difficult to achieve their objectives through a cash offer.
            </p>
            <p className="text-center mb-4 p-2 min-[1024px]:w-[75%]  min-[1920px]:w-[50%]">
            Ultimately, the decision to sell a house for cash or explore other options depends on individual circumstances and priorities. It's essential for homeowners to thoroughly assess their needs, financial goals, and the condition
             of their property before deciding on the best method of selling. 
            </p>
            <p className="text-center mb-4 p-2 min-[1024px]:w-[75%]  min-[1920px]:w-[50%]">Seeking advice from a trusted 
            real estate professional can also provide valuable insights into making an informed choice.
            </p>
           <div className="flex flex-col items-center pb-4 mb-2">
            <h2 className="font-bold text-xl text-center  drop-shadow-3xl mb-2">The real question is</h2>
            <h3 className="font-bold text-center mb-2">Are you willing to forego full market value of your property</h3>
            <span className="text-sitelteblu text-lg">for a quick and speedy sale ?</span>
          </div>
         </section>
         <section className="min-[768px]:grid min-[768px]:grid-cols-2 min-[768px]:gap-8 min-[768px]:mt-4">
         <section className=" 
        bg-white
         rounded-lg
         mt-4
         pt-4
         p-8
         opacity-75
         min-[768px]:flex
         min-[768px]:flex-col
         min-[768px]:items-center
         ">
     <h2 className="font-bold
      text-xl
      text-center
      drop-shadow-3xl
      mb-4
     ">
        Choose the option that fits you
    </h2>
    <Image
            src={optionsPic}
            alt="house and clipboard to represent property owner seller options"
            className="mb-4 min-[768px]:mb-11"
            />
     <ol  className="flex flex-col items-center p-2 list-decimal">
        <li className="font-bold mb-4  min-[540px]:mb-12 min-[768px]:mb-16">
        List with an agent and wait 90 days
         or more to get cash in hand. pay for repairs so you can fetch the highest price plus
          clean everything up for open houses. Dont forget about paying an agent thousands of dollars along with
          the risk of financing falling through last minute.
         </li>
        <li className="font-bold mb-4  min-[540px]:mb-12 min-[768px]:mb-16">List your house for sale by owner and do an agents job to save money on commissions.
             If you have the time and can handle the stress, and are willing to learn why not?
        </li>
        <li className="font-bold mb-4  min-[540px]:mb-8">Avoid the hassle of agents, commissions, and repairs and <span className="text-sitegrn">sell
         for cash</span>&nbsp;<span className="text-sitelteblu">to 2908 Real Estate</span>.
        </li>
     </ol>
         </section>
         <section className=" 
        bg-white
         rounded-lg
         mt-4
         pt-4
         p-8
         opacity-75
         min-[768px]:flex
         min-[768px]:flex-col
         min-[768px]:items-center
         
         ">
            <h2 className="
            font-bold
            text-xl
            text-center
            drop-shadow-3xl
            mb-4
            min-[1024px]:mb-8
            ">
                Common property situations we handle
            </h2>
            <ol  className="flex
             flex-col
             items-start
             p-2
             list-image-[url(/checkmark20.png)]
             pl-12
             min-[360px]:pl-[4rem]
             min-[540px]:pl-[11rem]
            

             min-[768px]:w-[90%]
             min-[768px]:pl-[5rem]
             min-[820px]:pl-[6rem]
             min-[912px]:pl-[7rem]
             min-[1024px]:mb-4
             min-[1280px]:pl-[0rem]
             min-[1280px]:w-full
             min-[1280px]:mt-14
             bg-sitelteblu 
             rounded-lg
             ">
                <div className="min-[1280px]:p-8 min-[1280px]:w-full min-[1280px]:flex min-[1280px]:flex-row min-[1280px]:justify-between min-[1280px]:items-center">
            <li className="font-bold mb-4  min-[768px]:mb-8">foreclosure</li>
            <li className="font-bold mb-4  min-[768px]:mb-8">divorce</li>
            <li className="font-bold mb-4  min-[768px]:mb-8">moving</li>
            </div>
            <div className="min-[1280px]:p-8 min-[1280px]:w-full min-[1280px]:flex min-[1280px]:flex-row min-[1280px]:justify-between min-[1280px]:items-center">
            <li className="font-bold mb-4  min-[768px]:mb-8">upside down</li>
            <li className="font-bold mb-4  min-[768px]:mb-8">liens</li>
            <li className="font-bold mb-4  min-[768px]:mb-8">distressed</li>
            </div>
            </ol>
            <div>
                <h2 className="
            font-bold
            text-xl
            text-center
            drop-shadow-3xl
            mb-4
            mt-4
            min-[1280px]:mt-14
            min-[1280px]:mb-14
            ">2908 does more than cash offers</h2>
                <p className="text-center mb-4 p-2 font-bold min-[1024px]:mb-11">
                    Some situations dont fit a cash offer but as a property owner you need quick cash
                    and relief from your property expenses with a solid sales date in the future.
                </p>
                <p className="text-center mb-4 p-2 font-bold min-[1024px]:mb-11">
                    At 2908 Real Estate we specialize in doing highly creative win win deals that can relieve
                    property owners from financial burdens brought on by owning a property while in a less than optimal
                    situation.
                </p>
                <p className="text-center mb-4 p-2 font-bold min-[1024px]:mb-11">
                    2908 Real Estate can make your payments, and even make you profits each month with your burdensome property
                </p>
            </div>
         </section>
         </section>
        </section>
        </>
    );
};