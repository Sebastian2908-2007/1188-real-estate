import dynamic from 'next/dynamic'
const AdminLogout = dynamic(() =>import("@/components/AdminLogout"), {ssr: false});
import AdminDashData from "@/components/AdminDashData";
const  Auth = dynamic(() =>import  ("@/components/Auth"),{ssr:false});


/**I need to put the admin Id in the cookie when creating one as I did for logging in
 * that way I can compare the id in the cookie with the params id if they match its an admin if not
 * block access to this page
 */
const AdminDash =  ({params}) => {   
    return(
        <div>
            <AdminLogout/>
            <Auth paramsId={params.id}/>
            <AdminDashData/>
        </div>
    );
};

export default AdminDash;