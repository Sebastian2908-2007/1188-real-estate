'use client'
import FormSelect from "./FormSelect";
import { useState, useEffect } from "react";


const HouseDetailsForm = () => {
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
       /* lengthOwned:'',
        repairs:'',
        walkThroughVideo:''*/
         });
useEffect(() => {console.log(houseInfo)},[houseInfo]);
    return(
        <form 
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
            houseInfo={houseInfo}
            setHouseInfo={setHouseInfo}
            dataObj={dataObj}
            />
            
        </div>
        ))}
      </form>
    );
};
export default HouseDetailsForm;