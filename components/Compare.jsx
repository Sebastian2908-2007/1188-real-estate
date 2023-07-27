import Image from "next/image";
import ourWay from '../public/2908way1.jpg';
import oldWay from '../public/traditionalway1.jpg';
const Compare = () => {
    return(
        <section className="flex flex-col items-center mt-4 min-[540px]:-translate-y-48
        ">
        <h2 className="text-center
         text-white
         text-xl
         font-bold
         drop-shadow-3xl
         mt-4
         mb-4
         min-[1028px]:text-2xl
        ">
         Compare 2908 selling with traditional selling
       </h2>
        <section className="
          flex 
          flex-col
          space-y-4
          p-4
          items-center
          min-[768px]:flex-row
          min-[768px]:items-stretch
          min-[768px]:space-y-0
          min-[768px]:w-full
          min-[768px]:space-x-4
         ">
              <div className="flex flex-col items-center bg-sitedrkblu w-full pt-4">
                <h3 className="text-center text-sitegrn font-bold mb-4 text-2xl">2908 Cash Offer Program</h3>
                 <div className="w-full bg-gradient-to-r from-sitedrkblu to-sitelteblu flex flex-col items-center">
                    <Image
                    className="rounded-full w-24 mt-1 mb-1 border-2 border-sitegrn mt-4 mb-4"
                    src={ourWay}
                    alt="money going right to you for your house the 2908 real estate way"
                    />
                    <h4 className="text-center text-white font-bold mb-4">Selling to 2908 Real Estate</h4>
                    <span className="text-white text-center mb-4">2908 will present you with a&nbsp;
                    <span className="font-bold">Fair All Cash Offer</span>&nbsp;
                    without all the hassles of listing
                    </span>
                 </div>
                  <ul className="w-full list-image-[url(/checkmark20.png)] flex flex-col items-center">
                    <li className="w-48
                     min-[360px]:w-64
                     text-white
                     mb-4
                     mt-4
                     min-[768px]:mb-10
                    ">
                        <span className="font-bold">Get a competitive cash offer in just 24 hours!</span> Share your house details, and our local market experts will assess it to present you with a fair, no-obligation offer.
                    </li>
                    <li className="w-48
                     min-[360px]:w-64
                     text-white
                     mb-4
                     min-[768px]:mb-10
                    ">
                        <span className="font-bold">Skip the showings and the hassles!</span> We purchase your house "as-is," meaning no open houses, no weekend showings, and no need for repairs.
                    </li>
                    <li className="w-48
                     min-[360px]:w-64
                     text-white
                     mb-4
                     min-[768px]:mb-10
                    ">
                        <span className="font-bold">Choose your ideal closing day!</span> When we extend an offer, expect quick closings in days, not months. Select the date that suits you best.
                    </li>
                    <li className="w-48
                     min-[360px]:w-64
                     text-white
                     mb-4
                     min-[768px]:mb-10
                    ">
                        <span className="font-bold">2908 has you covered – we pay ALL closing costs!</span> No need to worry about extra expenses or hidden fees
                    </li>
                    <li className="w-48
                     min-[360px]:w-64
                     text-white
                     mb-4
                     min-[768px]:mb-10
                    ">
                        <span className="font-bold">Absolutely no fees. No commissions either.</span> When 2908 buys your house, you keep the entire sales price in your pocket.
                    </li>
                    <li className="w-48
                     min-[360px]:w-64
                     text-white
                     mb-4
                    ">
                        <span className="font-bold">Leave the repairs to us!</span> If your house needs fixing, we've got it covered. You can also leave any unwanted items behind, and we'll take care of hauling them away at no extra charge.
                    </li>
                  </ul>
              </div>

              <div className="flex flex-col items-center bg-white w-full pt-4">
                <h3 className="text-center font-bold mb-4 text-2xl">Traditional method</h3>
                 <div className="w-full bg-slate-500 flex flex-col items-center">
                    <Image
                    className="rounded-full w-24 mt-1 mb-1 border-2 border-black mt-4 mb-4"
                    src={oldWay}
                    alt="money going right to you for your house the 2908 real estate way"
                    />
                    <h4 className="text-center text-white mb-4">Listing with an agent</h4>
                    <span className="text-white text-center mb-4">
                        Copious amounts of time, stress, energy, and money lost pave this way
                    </span>
                 </div>
                  <ul className="w-full list-image-[url(/checkmark20.png)] flex flex-col items-center">
                    <li className="w-48 min-[360px]:w-64 mb-4 mt-4"><span className="font-bold">minimum 90 days to sell</span> In 2023 the sellers boon has ended high interest rates have made 90 days a great outcome. Don't wait 90 days to sell if you're lucky– we offer a faster solution.</li>
                    <li className="w-48 min-[360px]:w-64 mb-4"><span className="font-bold">Tons of showings and extra work</span> No need to get your house ready for constant display. Sell hassle-free and stress-free with 2908!</li>
                    <li className="w-48 min-[360px]:w-64 mb-4"><span className="font-bold">30 to 60 days to close</span> It easily takes 30 to 60 days to close, and with todays rates chances of a deal falling through are high a qualified buyer this month could be a disqualified buyer next month. Our process ensures a quicker, smoother closing for you.</li>
                    <li className="w-48 min-[360px]:w-64 mb-4"><span className="font-bold">3% in closing costs paid by you, the seller!</span>, Avoid paying up to 3% of the sales price – we take care of it all.</li>
                    <li className="w-48 min-[360px]:w-64 mb-4"><span className="font-bold">stacking agent fees and commissions!</span> While high commissions might be great for agents and brokers they are not so great for you. On average, sellers pay 6% in commissions/fees, but with 2908, you pay none.</li>
                    <li className="w-48 min-[360px]:w-64 mb-4"><span className="font-bold">You are on the hook for improvements</span> During the inspection period, unforeseen issues may arise, leaving you on the hook for repairs. Sell to 2908 and leave those worries behind.</li>
                  </ul>
              </div>
         </section>
       </section>
    );
};

export default Compare;