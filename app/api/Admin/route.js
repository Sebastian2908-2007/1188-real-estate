import dbConnect from '@/db/config/connection';
import {Admin} from '@/db/models';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt  from 'jsonwebtoken';


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
  
      // Create a JWT token with first name, last name, and role as payload
      const tokenPayload = { firstName, lastName, role };
      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Set the token in a cookie (for the browser)
     
  
      // Respond with success message and admin data
      return NextResponse.json({ message: 'Admin signed up successfully.', admin: savedAdmin, token:token }, { status: 201 }); // 201 Created
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }