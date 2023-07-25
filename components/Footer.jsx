const Footer = () => {
    return(
        <footer className=" flex flex-col bg-sitedrkblu justify-between sticky bottom-0 pl-10 pr-10">
               <nav className="flex flex-row justify-between px-1 my-2">
            <span className="text-sitegrn text-sm">Process</span>
            <span className="text-sitegrn text-sm">Reviews</span>
            <span className="text-sitegrn text-sm">About</span>
            <span className="text-sitegrn text-sm">Sell now</span>
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