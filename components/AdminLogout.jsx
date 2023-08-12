'use client'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const AdminLogout = () => {

    const router = useRouter();
    const logout = () => {
      Cookies.remove('adminToken');
      router.push('/');
    };

    return(
        <div className="p-8 flex flex-row justify-center">
        <button
        onClick={logout}
         className="bg-red-700
         text-white
         rounded-lg
         p-2
        ">
           Logout
       </button>
       </div>
    );
};

export default AdminLogout;