'use client'
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/navigation";
const CreateAdminForm = () => {
    const [adminInfo,setAdminInfo] = useState({});
    const handleChange = () => {
        const {name,value} = event.target;
        setAdminInfo({
          ...adminInfo,
          [name]:value 
        });
    };
    const submitCreate = () => {};
    return(
        <form onSubmit={submitCreate}
        className="hero-form
         flex flex-col
         items-center
         bg-sitedrkblu
         opacity-75
         mt-11
         p-2
         rounded-lg
         min-[540px]:w-64
         min-[768px]:w-80
         ">

        <div className="flex flex-col ">        
           <label className="
           mb-1
            text-sitelteblu
            font-bold
            text-center
           " 
           htmlFor="superAdmin"
           >
              Super Admin password
           </label>
           <input onChange={handleChange} className="rounded-lg mb-1 w-48 min-[768px]:w-64" type="password" name="superAdmin" />
       </div>

        <div className="flex flex-col ">        
           <label className="
           mb-1
            text-sitelteblu
            font-bold
            text-center
           " 
           htmlFor="password"
           >
               password
           </label>
           <input onChange={handleChange} className="rounded-lg mb-1 w-48 min-[768px]:w-64" type="password" name="password" />
       </div>

        <div className="flex flex-col ">        
           <label className="
           mb-1
            text-sitelteblu
            font-bold
            text-center
           " 
           htmlFor="firstName"
           >
               First Name
           </label>
           <input onChange={handleChange} className="rounded-lg mb-1 w-48 min-[768px]:w-64" type="text" name="firstName" />
       </div>
        <div className="flex flex-col ">        
           <label className="
           mb-1
            text-sitelteblu
            font-bold
            text-center
           " 
           htmlFor="lastName"
           >
               Last Name
           </label>
           <input onChange={handleChange} className="rounded-lg mb-1 w-48 min-[768px]:w-64" type="text" name="lastName" />
       </div>
        <div className="flex flex-col ">        
           <label className="
           mb-1
            text-sitelteblu
            font-bold
            text-center
           " 
           htmlFor="role"
           >
               Role
           </label>
           <input onChange={handleChange} className="rounded-lg mb-1 w-48 min-[768px]:w-64" type="text" name="role" />
       </div>
        <div className="flex flex-col">
           <label className="
           mb-1
            text-sitelteblu
            font-bold
            text-center
           " 
           htmlFor="email"
           >
               email
           </label>
           <input onChange={handleChange} className="rounded-lg mb-1 w-48 min-[768px]:w-64" type="text" name="email" />
        </div>
       
        <button type="submit" className="rounded-lg mb-2 bg-sitegrn p-2 text-white font-bold mt-4">Login</button>
        </form>
    );
};
export default CreateAdminForm;