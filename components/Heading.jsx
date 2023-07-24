import Image from "next/image";
import logo from '../public/relogo (1).png';
import DrawerNav from "./DrawerNav";
const Heading = () => {
    return(
    <header className="bg-sitedrkblu flex flex-row justify-between">
        <div>
            <Image
            className="logo"
            src={logo}
            alt="2908 realestate logo"
            />
        </div>
    <DrawerNav/>
    </header>
    );
};

export default Heading;