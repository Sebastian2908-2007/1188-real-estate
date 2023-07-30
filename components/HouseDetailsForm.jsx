'use client'
import FormSelect from "./FormSelect";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const HouseDetailsForm = ({setHouseDetSubmitted,params}) => {
    /**map a select component for each obj pass the object to the select to populate label and options as well
     * as informing it which field we will be updating
     */
    const selectElInfo =[
        {
            key:66,
            dataField:'garageType',
            labelTitle:'Garage',
            options:[
                "1 car attached",
                "2 car attached",
                "1 car detached",
                "2 car detached",
                "carport",
                "other",
            ]
        },
        {
            key:64,
            dataField:'atticType',
            labelTitle:'Attic',
            options:[
                "Finished Attic",
                "Unfinished Attic",
                "Knee wall Attic",
                "Devils Peak Attic",
                "Flat Roof Attic",
                "Scuttle Attic",
                "other"
            ]
        },
        {
            key:6,
            dataField:'occupiedStatus',
            labelTitle:'Is anyone living in the house?',
            options:["Yes-Owner Occupied","Yes-Tenant-Occupied","No-Vacant"]
        },
        {
            key:647,
            dataField:'basementType',
            labelTitle:'Basement',
            options:[
                "Finished",
                "Unfinished",
                "Partially finished",
                "Crawl space",
                "Other",
                "None",
            ]
        },
        {
            key:67,
            dataField:'listedStatus',
            labelTitle:'Is the property listed with an agent',
            options:["yes","no"]
        },
        {
            key:611,
            dataField:'propertyCondition',
            labelTitle:'What is the properties condition?',
            options:[
                "Excellent",
                "Good",
                "Fair",
                "Poor",
                "Terrible",
            ]
        },
    ];

    const [houseInfo,setHouseInfo] = useState({
        garageType:'',
        atticType:'',
        occupiedStatus:'',
        basementType:'',
        listedStatus:'',
        propertyCondition:'',
        lengthOwned:'',
        repairs:'',
        /*walkThroughVideo:''*/
         });
useEffect(() => {console.log(houseInfo)},[houseInfo]);
  
const handleChange = (event) => {
    const {name,value} = event.target;
    setHouseInfo({
        ...houseInfo,
        [name]:value
    });
};

const SubmitHouseDetails = async (event) => {
    event.preventDefault();
    const {
        garageType,atticType,
        occupiedStatus, basementType,
        listedStatus,propertyCondition,
        lengthOwned,repairs
    } = houseInfo;

    try{
   const response = await fetch(`/api/HouseInfo/${params.id}`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            garageType:garageType,atticType:atticType,
            occupiedStatus: occupiedStatus, basementType:basementType,
            listedStatus:listedStatus,propertyCondition:propertyCondition,
            lengthOwned:lengthOwned,repairs:repairs
        })
    });
if(response.ok) {
    const data = await response.json();
    const {hotLead} = data;
   console.log(hotLead);
 setHouseDetSubmitted(true);
 Cookies.set('HouseDetComplete', 'yes', { expires: 777 });
}
}catch(e) {
    console.log(e);
}
};

    return(
        <form onSubmit={SubmitHouseDetails}
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
        <h3 className="text-sitelteblu mb-8 font-extrabold text-center">Property Info</h3>
        <div className="flex flex-col items-center">        
            <label className="
            mb-1
             text-sitelteblu
             font-bold
             text-center
            " 
            htmlFor="lengthOwned"
            >
                How long have you owned the property?
        </label>
        <input onChange={handleChange}
        className="
         border
         border-black-4
         rounded-lg
         mb-1 w-48
         min-[768px]:w-64"
         type="text" name="lengthOwned" /> 
        </div>
        <div className="flex flex-col items-center">        
            <label className="
            mb-1
             text-sitelteblu
             font-bold
             text-center
            " 
            htmlFor="repairs"
            >
                What type of repairs does the property need?
        </label>
        <textarea onChange={handleChange}
        className="
         border
         border-black-4
         rounded-lg
         mb-1 w-48
         min-[768px]:w-64"
         type="text" name="repairs" /> 
        </div>
        {selectElInfo.map(dataObj => (
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
            <FormSelect 
            formInfo={houseInfo}
            setFormInfo={setHouseInfo}
            dataObj={dataObj}
            />
            
        </div>
        ))}
        <button type="submit" className="rounded-lg mb-2 bg-sitegrn p-2 text-white font-bold mt-4">Submit</button>
      </form>
    );
};
export default HouseDetailsForm;