'use client'
const HotLeadData = ({hotLead}) => {
    const {houseInfo,situation} = hotLead;
    console.log(houseInfo);
    console.log(situation);
    return(
  <div>
    {hotLead.email}
    {houseInfo ? houseInfo.garageType:null}
    {situation ? situation.sellFastStatus:null}
</div>
    );
};

export default HotLeadData;