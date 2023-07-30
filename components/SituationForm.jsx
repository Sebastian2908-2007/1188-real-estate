'use client'
import FormSelect from "./FormSelect";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
const SituationForm = ({setSituationSubmitted,params}) => {
    const [situationInfo,setSituationInfo] = useState({sellFastStatus:"",openToPayments:'',bestCallTime:'',sellerGoal:''});

    const selectInfo = [
        {  key:88,
            dataField:'sellFastStatus',
            labelTitle:'Do you need to Sell Quickly?',
            options:[
                "yes",
                "no",
                
            ]},
        {  key:7,
            dataField:'openToPayments',
            labelTitle:'If payments could make you more money are you open to them',
            options:[
                "yes",
                "no",
                "not sure",
                
            ]},
        {  key:6,
            dataField:'bestCallTime',
            labelTitle:'When is the best time to call you?',
            options:[
                "Anytime",
                "morning",
                "Afternoon",
                "Evening",
                
            ]},
    ];
    useEffect(() => {console.log(situationInfo)},[situationInfo]);

    const handleChange = (event) => {
        const {name,value} = event.target;
        setSituationInfo({
            ...situationInfo,
            [name]:value
        });
    };

    const submitSituation = async (event) => {
        event.preventDefault();
        const {
            sellFastStatus,openToPayments,bestCallTime,sellerGoal
        } = situationInfo;
    
        try{
       const response = await fetch(`/api/Situation/${params.id}`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                sellFastStatus:sellFastStatus,openToPayments:openToPayments,
                bestCallTime:bestCallTime,sellerGoal:sellerGoal
            })
        });
    if(response.ok) {
        const data = await response.json();
        const {hotLead} = data;
       console.log(hotLead);
     setSituationSubmitted(true);
     Cookies.set('situationSubmitted', 'yes', { expires: 777 })
    }
    }catch(e) {
        console.log(e);
    }
    };

    return(
        <form onSubmit={submitSituation}
     className="hero-form
      flex flex-col
      items-center
      bg-sitedrkblu
      opacity-50
      p-2
      rounded-lg
      min-[540px]:w-64
      min-[768px]:w-80
      ">
        <h3 className="text-sitelteblu mb-8 font-extrabold text-center">Your Situation</h3>
        {selectInfo.map(dataObj => (
            <div key={dataObj.key}  className="flex flex-col ">        
            <label className="
            mb-1
             text-sitelteblu
             font-bold
             text-center
            " 
            htmlFor="address"
            >
                {dataObj.labelTitle}
        </label> 
        <FormSelect  formInfo={situationInfo} setFormInfo={setSituationInfo} dataObj={dataObj}/>
        </div>
        ))}
          <div className="flex flex-col items-center">        
            <label className="
            mb-1
             text-sitelteblu
             font-bold
             text-center
            " 
            htmlFor="sellerGoal"
            >
                what is your ultimate goal with the property?
        </label>
        <textarea onChange={handleChange}
        className="
         border
         border-black-4
         rounded-lg
         mb-1 w-48
         min-[768px]:w-64"
         type="text" name="sellerGoal" /> 
        </div>
        <button type="submit" className="rounded-lg mb-2 bg-sitegrn p-2 text-white font-bold mt-4">Submit</button>
      </form>
    );
};
export default SituationForm;