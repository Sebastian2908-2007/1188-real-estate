import dbConnect from '@/db/config/connection';
import {Admin} from '@/db/models';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt  from 'jsonwebtoken';


/**this route will create an admin and a token to send to the front end we will need to know 
 * our secret superAdmin password for this it is stored in app and needs to be
 * sent from front end also when we send the token back it will need to be stored in localStorage or cookie*/
export async function POST(request, response) {
    const { firstName, lastName, email, role, password, superAdmin } = await request.json();
  
    try {
      // Check if superAdmin is true and matches the SUPERADMINPASSWORD environment variable
      const isSuperAdmin = superAdmin && superAdmin === process.env.SUPERADMINPASSWORD;
  
      // If superAdmin is not true or does not match the password, return an error
      if (!isSuperAdmin) {
        return NextResponse.json({ error: 'Unauthorized access.' }, { status: 401 }); // 401 Unauthorized
      }
  
      await dbConnect(); // Connect to MongoDB
  
      // Check if the email is already registered
      const existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
        return NextResponse.json({ error: 'Email already registered.' }, { status: 400 }); // 400 Bad Request
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new Admin document
      const newAdmin = new Admin({
        firstName,
        lastName,
        email,
        role,
        password: hashedPassword,
      });
  
      // Save the new Admin document to the database
      const savedAdmin = await newAdmin.save();
  
      // Create a JWT token with first name, last name,email and role as payload
      const tokenPayload = { firstName, lastName, role,email };
      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Set the token in a cookie (for the browser)
     
  
      // Respond with success message and admin data
      return NextResponse.json({ message: 'Admin signed up successfully.', admin: savedAdmin, token:token }, { status: 201 }); // 201 Created
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }

 
/**this route gets all admins*/

  export async function GET(request) {
    try {
      // Connect to the MongoDB database
      await dbConnect();
  
      // Fetch all Admin data from the database
      const allAdmins = await Admin.find({});
  
      // Return the data as JSON in the response
      return NextResponse.json({ admins: allAdmins }, { status: 200 }); // 200 OK
    } catch (error) {
      // If there's an error, return an error response
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }