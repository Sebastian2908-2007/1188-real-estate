'use client'
import { isAdmin } from "@/app/utils/isAdmin";
import { useRouter } from "next/navigation";
const Auth = ({paramsId}) => {
    const router = useRouter();
    const admin = isAdmin(paramsId);
    if(!admin) {   
        router.push('/');
    }
   return admin ? <div></div>:null
};
export default Auth;