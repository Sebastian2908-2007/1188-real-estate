'use client'
const InitialForm = () => {
    return(
     <form className="hero-form flex flex-col  items-center">
     <div className="flex flex-col">        
        <label className="mb-1 text-sitelteblu font-bold text-center" htmlFor="address">address</label>
        <input className="rounded-lg mb-1 w-48" type="text" name="address" />
    </div>
     <div className="flex flex-col">
        <label className="mb-1 text-sitelteblu font-bold text-center" htmlFor="email">email</label>
        <input className="rounded-lg mb-1 w-48" type="text" name="email" />
     </div>
     <div className="flex flex-col">
        <label className="mb-1 text-sitelteblu font-bold text-center" htmlFor="phone">phone</label>
        <input className="rounded-lg mb-2 w-48" type="text" name="phone" />
     </div>
     <button className="rounded-lg mb-2 bg-sitegrn p-2 text-white font-bold">Cash Offer</button>
     </form>
    );
};
export default InitialForm;