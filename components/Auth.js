'use client'
import { isAdmin } from "@/app/utils/isAdmin";
import { useRouter } from "next/navigation";
const Auth = ({paramsId}) => {
    console.log(paramsId,"from params Adm,in comp");
    const router = useRouter();
    const admin = isAdmin(paramsId);
    console.log(admin);
    if(!admin) {   
        router.push('/');
    }
   return admin ? <div></div>:null
};
export default Auth;