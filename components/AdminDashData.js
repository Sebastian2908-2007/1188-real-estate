import HotLeadData from "./HotLeadData";
async function getHotLeads() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN }/api/HotLead`);
    const data = await response.json();
    return data;
};
const AdminDashData = async () => {
    const hotLeadData = await getHotLeads();
    const {hotLeads} = hotLeadData;
   
    return(
<section className="p-4 min-[540px]:flex min-[540px]:flex-col min-[540px]:items-center">
    {hotLeads.map(hotLead => (
    <HotLeadData key={hotLead._id} hotLead={hotLead}/>
))}</section>
    );
};

export default AdminDashData;