'use client'
import { useState } from "react";
import Cookies from "js-cookie";

const NameForm = ({setNamesSubmitted,params}) => {
    const [names,setNames] = useState({firstName:'',lastName:''});

    const handleChange = (event) => {
        const {name,value} = event.target;
        setNames({
            ...names,
            [name]:value
        });
    };

    const SubmitNames = async (event) => {
        event.preventDefault();
        const {firstName,lastName} = names;
      
      
        try{
       const response = await fetch(`/api/HotLead/${params.id}`,{
            method:'PUT',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({firstName:firstName,lastName:lastName})
        });
    if(response.ok) {
        const data = await response.json();
        const {hotLead} = data;
       
     setNamesSubmitted(true);
     Cookies.set('nameFormComplete', 'yes', { expires: 777 })
    }
    }catch(e) {
        console.log(e);
    }
    };

    return(
        <form onSubmit={SubmitNames}
     className="hero-form
      flex flex-col
      items-center
      bg-sitedrkblu
      opacity-50
      p-2
      mb-[11%]
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
        htmlFor="firstName"
        >
            First Name
        </label>
        <input onChange={handleChange} className="border border-black-4 rounded-lg mb-1 w-48 min-[768px]:w-64" type="text" name="firstName" />
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
            last Name
        </label>
        <input onChange={handleChange} className="border border-black-4 rounded-lg mb-1 w-48 min-[768px]:w-64" type="text" name="lastName" />
    </div>
    <button type="submit" className="
    rounded-lg
     mb-2
     bg-sitegrn
     hover:bg-sitelteblu
     p-2
     text-white
     font-bold
     mt-4
    ">Submit</button>
      </form>
    );
};

export default NameForm;