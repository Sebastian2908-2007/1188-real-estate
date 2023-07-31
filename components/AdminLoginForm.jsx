'use client'
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/navigation";
const AdminLoginForm = () => {
    const [loginInfo,setLoginInfo] = useState({email:'',password:''});
    const router = useRouter();

    const handleChange = (event) => {
       const {name,value} = event.target;
      setLoginInfo({
        ...loginInfo,
        [name]:value 
      });
    };

    const submitLogin = async (event) => {
        event.preventDefault();
       try{
        const {password,email} = loginInfo;
        const response = await fetch('/api/Admin/Login',{
            method:'POST',
            headers:{
                'Content-Type':'Application/json'
            },
            body: JSON.stringify({password:password,email:email})
        });
        const {admin,token} = await response.json();
        console.log(admin);
        console.log(token);
        Cookies.set('adminToken',token,{expires: 3/24});
        router.push(`/admin/dashboard/${admin._id}`);
       }catch(e){
        console.log(e);
       }
    };

    return(
        <form onSubmit={submitLogin}
        className="hero-form
         flex flex-col
         items-center
         bg-sitedrkblu
         opacity-75
         mt-36
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
           htmlFor="password"
           >
               password
           </label>
           <input onChange={handleChange} className="rounded-lg mb-1 w-48 min-[768px]:w-64" type="password" name="password" />
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

export default AdminLoginForm;