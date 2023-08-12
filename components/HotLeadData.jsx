'use client'
const HotLeadData = ({hotLead}) => {
    const {houseInfo,situation} = hotLead;
    
   
    return(
  <div className="flex
   flex-col
   items-center
   border
   border-white-2
   mb-8
   min-[540px]:w-72
  ">
    <div className="flex flex-col items-center mb-4">
    <h2 className="text-center text-sitegrn">Basic Info</h2>
    <label className="text-white font-bold text-center">Seller Email</label>
    <span className="text-center text-white">{hotLead.email}</span>
    <label className="text-white font-bold text-center">Phone Number</label>
    <span className="text-center text-white">{hotLead.phone}</span>
    <label className="text-white font-bold text-center">Property Address</label>
    <span className="text-center text-white">{hotLead.address}</span>
    <label className="text-white font-bold text-center">First Name</label>
    <span className="text-center text-white">{hotLead.firstName}</span>
    <label className="text-white font-bold text-center">Last Name</label>
    <span className="text-center text-white">{hotLead.lastName}</span>
        
    </div>
    
    <div className="flex flex-col items-center mb-4">
    <h2 className="text-center text-sitegrn">House Info</h2>
    {houseInfo ? 
        <div className="flex flex-col items-center">
    <label className="text-center text-white">Garage Type</label>
    <span className="text-center text-white">{houseInfo ? houseInfo.garageType:null}</span>
    <label className="text-white font-bold text-center">Attic Type</label>
    <span className="text-center text-white">{houseInfo ? houseInfo.atticType:null}</span>
    <label className="text-white font-bold text-center">Occupied Status</label>
    <span className="text-center text-white">{houseInfo ? houseInfo.occupiedStatus:null}</span>
    <label className="text-white font-bold text-center">Basement type</label>
    <span className="text-center text-white">{houseInfo ? houseInfo.basementType:null}</span>
    <label className="text-white font-bold text-center">ownership length</label>
    <span className="text-center text-white">{houseInfo ? houseInfo.lengthOwned:null}</span>
    <label className="text-white font-bold text-center">Listed ?</label>
    <span className="text-center text-white">{houseInfo ? houseInfo.listedStatus:null}</span>
    <label className="text-white font-bold text-center">Condition</label>
    <span className="text-center text-white">{houseInfo ? houseInfo. propertyCondition:null}</span>
    <label className="text-white font-bold text-center">Repairs</label>
    <span className="text-center text-white">{houseInfo ? houseInfo.repairs:null}</span>
    </div>
:<div>no house info</div>}
    </div>
    

    <div className="flex flex-col items-center mb-4">
    <h2 className="text-center text-sitegrn">Situation Info</h2>
    {situation ? 
        <div className="flex flex-col items-center">
    <label className="text-white font-bold text-center">Sell Fast</label>
    <span className="text-center text-white">{situation ? situation.sellFastStatus:null}</span>
    <label className="text-white font-bold text-center">Open to payments</label>
    <span className="text-center text-white">{situation ? situation.openToPayments:null}</span>
    <label className="text-white font-bold text-center">sellers goal</label>
    <span className="text-center text-white">{situation ? situation.sellerGoal:null}</span>
    <label className="text-white font-bold text-center">best time to call</label>
    <span className="text-center text-white">{situation ? situation.bestCallTime:null}</span>
    </div>
    :<div>no situation info</div>}
    </div>
    
</div>
    );
};

export default HotLeadData;