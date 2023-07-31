import dbConnect from '@/db/config/connection';
import {Admin} from '@/db/models';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt  from 'jsonwebtoken';
  /**admin login */
  export async function POST(request) {
    let token;
    const {email,password} = await request.json();
    try {
      // Connect to the MongoDB database
      await dbConnect();
  
      // Fetch all Admin data from the database
      const admin = await Admin.findOne({email});
      if(admin) {
         token = jwt.sign(
          {
            _id: admin._id,
            firstName: admin.firstName,
            email: admin.email
          },
          process.env.JWT_SECRET,
          {expiresIn:'3h'}
        );
      }
      console.log(password,"user");
      console.log(admin.password,"STOREEd");
  const match = await bcrypt.compare(admin.password,password);
  console.log(match);

  if(match){
    return NextResponse.json({ admin: admin, token: token }, { status: 200 }); // 200 OK
  }else{
    return NextResponse.json({ error: 'improper credentials sorry try again' }, { status: 403 }); //forbidden
  }
      // Return the data as JSON in the response
     
    } catch (error) {
      // If there's an error, return an error response
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }