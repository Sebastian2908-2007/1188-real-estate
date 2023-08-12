'use client'
import Link from "next/link";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
const SellNowLink = dynamic(() =>import('@/components/SellNowLink'),{ssr: false});
const Footer = () => {
    const userId = Cookies.get('userId');
    return(
        <footer className="
         flex flex-col
         bg-sitedrkblu
         justify-between
         bottom-0
         min-[360px]:pl-10
         min-[360px]:pr-10
         ">
               <nav className="flex flex-row justify-between px-1 my-2">
               <Link href='/process'>
            <span className="text-sitegrn text-sm">Process</span>
            </Link>
            <Link href='/qualify'>
            <span className="text-sitegrn text-sm">Qualify</span>
            </Link>
            <Link href='/about'>
            <span className="text-sitegrn text-sm">About</span>
            </Link>
          <SellNowLink/>
        </nav>
            <div className="flex flex-row justify-between px-1 mb-2">
            <span className='text-sitelteblu text-xs'>
                &copy; 2908RealEstate{new Date().getFullYear()}
            </span>   
            <a className="text-xs text-sitelteblu" href='https://topdev.tech/' target='_blank'  rel="noopener noreferrer">
                Powered by TopDev.tech
                </a>
            </div>
        </footer>
    );
};

export default Footer;