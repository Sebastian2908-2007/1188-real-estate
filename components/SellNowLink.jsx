'use client'
import Cookies from 'js-cookie';
import Link from 'next/link';

const SellNowLink = () => {
    const userId = Cookies.get('userId');
    return(
        !userId ?
            <Link href='/sellnow'>
            <span className=' text-xs text-sitegrn min-[540px]:text-xl'>Sell Now</span>
              </Link>
              :
            <Link href= {`/sellnow/${userId}`}>
              <span className=' text-xs text-sitegrn min-[540px]:text-xl'>Sell Now</span>
            </Link>
                 
    );
};
export default SellNowLink;