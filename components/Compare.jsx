import Image from "next/image";
import ourWay from '../public/2908way1.jpg';
import oldWay from '../public/traditionalway1.jpg';
const Compare = () => {
    return(
        <section className="flex flex-col items-center mt-4">
        <h2 className="text-center
         text-white
         text-xl
         font-bold
         drop-shadow-3xl
         mt-4
         mb-4
        ">
         Compare 2908 selling with traditional selling
       </h2>
        <section className="
          flex 
          flex-col
          space-y-4
          p-4
          items-center
          min-[540px]:flex-row
          min-[540px]:w-full
          min-[540px]:space-x-2
         ">
              <div className="flex flex-col items-center bg-sitedrkblu w-full">
                <h3 className="text-center text-sitegrn font-bold">2908 Cash Offer Program</h3>
                 <div className="w-full bg-gradient-to-r from-sitedrkblu to-sitelteblu flex flex-col items-center">
                    <Image
                    className="rounded-full w-24 mt-1 mb-1 border-2 border-sitegrn"
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
                    <li className="w-48 text-white mb-4">some text</li>
                    <li className="w-48 text-white mb-4">some text</li>
                    <li className="w-48 text-white mb-4">some text</li>
                    <li className="w-48 text-white mb-4">some text</li>
                    <li className="w-48 text-white mb-4">some text</li>
                    <li className="w-48 text-white mb-4">some text</li>
                  </ul>
              </div>

              <div className="flex flex-col items-center bg-white w-full">
                <h3 className="text-center font-bold">Traditional method</h3>
                 <div className="w-full bg-slate-500 flex flex-col items-center">
                    <Image
                    className="rounded-full w-24 mt-1 mb-1 border-2 border-black"
                    src={oldWay}
                    alt="money going right to you for your house the 2908 real estate way"
                    />
                    <h4 className="text-center text-white mb-4">Listing with an agent</h4>
                    <span className="text-white text-center mb-4">
                        Copious amounts of time, stress, energy, and money hungry agents pave this way
                    </span>
                 </div>
                  <ul className="w-full list-image-[url(/checkmark20.png)] flex flex-col items-center">
                    <li className="w-48 mb-4">some text</li>
                    <li className="w-48 mb-4">some text</li>
                    <li className="w-48 mb-4">some text</li>
                    <li className="w-48 mb-4">some text</li>
                    <li className="w-48 mb-4">some text</li>
                    <li className="w-48 mb-4">some text</li>
                  </ul>
              </div>
         </section>
       </section>
    );
};

export default Compare;