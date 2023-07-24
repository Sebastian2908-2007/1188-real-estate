const Footer = () => {
    return(
        <footer className=" flex flex-col bg-sitedrkblu justify-between sticky bottom-0">
            <div className="flex flex-row justify-between px-1">
            <span className='text-sitelteblu text-xs'>
                &copy; 2908RealEstate{new Date().getFullYear()}
            </span>   
            <a className="text-xs text-sitelteblu" href='https://topdev.tech/' target='_blank'  rel="noopener noreferrer">
                Powered by TopDev.tech
                </a>
            </div>
        <nav className="flex flex-row justify-between px-1">
            <span className="text-sitegrn text-sm">Process</span>
            <span className="text-sitegrn text-sm">Reviews</span>
            <span className="text-sitegrn text-sm">About</span>
            <span className="text-sitegrn text-sm">Sell now</span>
        </nav>
        </footer>
    );
};

export default Footer;