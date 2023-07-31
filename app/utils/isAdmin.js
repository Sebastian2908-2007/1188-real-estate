import Cookies from "js-cookie";
import jwt from 'jsonwebtoken';
export const isAdmin = (paramId) => {
    const adminCookie = Cookies.get('adminToken');
    //console.log(adminCookie); 
    if(!adminCookie) {
        return false;
    }
    const decodedToken = jwt.decode(adminCookie);
   ///console.log(decodedToken.id,"ID");
   if(paramId === decodedToken.id) {
    return true;
   }else{
    return false;
   }
};