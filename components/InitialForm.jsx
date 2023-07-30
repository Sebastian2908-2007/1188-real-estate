'use client'
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const InitialForm = () => {
    const initialSubmitted =  Cookies.get('initialFormComplete') === 'yes';
    const [submitted,setSubmitted] = useState(null);
    const [formData, setFormData] = useState({address:'',email:'',phone:''});
    const router = useRouter();
    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };

useEffect(()=>{if(initialSubmitted)setSubmitted(true)});

    const SubmitInitialHotLead = async (event) => {
        event.preventDefault();
        const {address,email,phone} = formData;
        try{
       const response = await fetch('/api/HotLead',{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({address:address,email:email,phone:phone})
        });
    if(response.ok) {
        const data = await response.json();
        const {hotLead} = data;
        const {_id} = hotLead;
        router.push(`/sellnow/${_id}`);
        Cookies.set('initialFormComplete', 'yes', { expires: 777 });
        Cookies.set('userId', _id, { expires: 777 });
    }
    }catch(e) {
        console.log(e);
    }
    };

    return(
        !submitted ? (
     <form onSubmit={SubmitInitialHotLead}
     className="hero-form
      flex flex-col
      items-center
      bg-sitedrkblu
      opacity-75
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
        htmlFor="address"
        >
            address
        </label>
        <input onChange={handleChange} className="rounded-lg mb-1 w-48 min-[768px]:w-64" type="text" name="address" />
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
     <div className="flex flex-col">
        <label className="
        mb-1
         text-sitelteblu
         font-bold
         text-center
        " 
        htmlFor="phone"
        >
            phone
        </label>
        <input onChange={handleChange} className="rounded-lg mb-2 w-48 min-[768px]:w-64" type="text" name="phone" />
     </div>
     <button type="submit" className="rounded-lg mb-2 bg-sitegrn p-2 text-white font-bold mt-4">Cash Offer</button>
     </form>):null
    );
};
export default InitialForm;