import dbConnect from '@/db/config/connection';
import {Admin} from '@/db/models';
import { NextResponse } from 'next/server';
import jwt  from 'jsonwebtoken';

/**this route will delete an admin It is protected by a super super admin password that needs to be sent from front end
 * and compared with the env supersuperAdmin password stored in app
 *  can access is and delete admins */
export async function DELETE(request,{params}) {
    let deletedAdmin;
    try {
      // Get the Admin ID from the request parameters
      const { id } = params;
      // destructure supesuperAdmin pass from request
      const {superSuperAdmin} = await request.json();
    
      // Connect to the MongoDB database
      await dbConnect();
  
      // Find the Admin document by ID and delete it
      if(superSuperAdmin === process.env.SUPERSUPERADMINPASSWORD ) {

      deletedAdmin = await Admin.findByIdAndDelete(id);

      if (!deletedAdmin) {
        // If the Admin document doesn't exist, return a not found response
        return NextResponse.json({ message: 'Admin not found.' }, { status: 404 }); // 404 Not Found
       }
      }else{
        return NextResponse.json({ error: 'youre not in god mode' }, { status: 405 }); // method not allowed
      }
 
    
  
      // Return the deleted Admin ID in the response
      return NextResponse.json({ deletedAdminId: deletedAdmin._id }, { status: 200 }); // 200 OK
    } catch (error) {
      // If there's an error, return an error response
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }


  /**this will update an admin by id in the params a jwt token will need to be sent from front end in order to do this */
  export async function PUT(request,{params}) {
    try {
      // Get the Admin ID and data to be updated from the request params and body
      const { id } = params;
      const { firstName, lastName, email, role, password,token } = await request.json();
 
      // Verify and decode the JWT token from the request
      const { email: decodedEmail } = jwt.verify(token, process.env.JWT_SECRET);
  
      // Connect to the MongoDB database
      await dbConnect();
  
      // Find the Admin document by ID
      const adminToUpdate = await Admin.findById(id);
  
      // Check if the admin exists
      if (!adminToUpdate) {
        return NextResponse.json({ message: 'Admin not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Compare the email in the decoded token with the current admin's email
      if (adminToUpdate.email !== decodedEmail) {
        return NextResponse.json({ message: 'Unauthorized action.' }, { status: 401 }); // 401 Unauthorized
      }
  
      // Update the admin's data only if it's provided in the request
      if (firstName) adminToUpdate.firstName = firstName;
      if (lastName) adminToUpdate.lastName = lastName;
      if (email) adminToUpdate.email = email;
      if (role) adminToUpdate.role = role;
      if (password) adminToUpdate.password = password;
  
      // Save the updated admin document to the database
      const updatedAdmin = await adminToUpdate.save();
  
      // Return the updated admin data in the response
      return NextResponse.json({ admin: updatedAdmin }, { status: 200 }); // 200 OK
    } catch (error) {
      // If there's an error, return an error response
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }