import Image from "next/image";
import logo from '../public/relogo (1).png';
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
        <nav className="flex flex-row justify-evenly">
            <span className="text-sitegrn text-sm">Process</span>
            <span className="text-sitegrn text-sm">Reviews</span>
            <span className="text-sitegrn text-sm">About</span>
            <span className="text-sitegrn text-sm">Sell now</span>
        </nav>
    </header>
    );
};

export default Heading;