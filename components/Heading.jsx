import Image from "next/image";
import Link from 'next/link';
import logo from '../public/relogo (5).png';
import DrawerNav from "./DrawerNav";
const Heading = () => {
    return(
    <header className="bg-sitedrkblu flex flex-row justify-between">
        <div>
        <Link href='/'>
            <Image
            className="logo"
            src={logo}
            alt="2908 realestate logo"
            />
            </Link>
        </div>
        <DrawerNav/>
    </header>
    );
};

export default Heading;