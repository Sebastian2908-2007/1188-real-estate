import Cookies from "js-cookie";
import jwt from 'jsonwebtoken';
export const isAdmin = (paramId) => {
    const adminCookie = Cookies.get('adminToken');
 
    if(!adminCookie) {
        return false;
    }
    const decodedToken = jwt.decode(adminCookie);
  
   if(paramId === decodedToken._id) {
    return true;
   }else{
    return false;
   }
};