import AdminDashData from "@/components/AdminDashData";



const AdminDash = async ({params}) => {
   
    return(
        <div>
            hello you are admin {params.id} !!!
            <AdminDashData/>
        </div>
    );
};

export default AdminDash;