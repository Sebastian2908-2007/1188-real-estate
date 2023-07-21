import dbConnect from "@/db/config/connection";
import {HotLead} from '@/db/models';
import { NextResponse } from "next/server";

export async function PUT(request,{params}) {
    const { id } = params;
    const { firstName, lastName } = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing HotLead document by ID
      const existingHotLead = await HotLead.findById(id);
  
      if (!existingHotLead) {
        return NextResponse.json({ error: 'HotLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Merge the existing data with the updated fields
      existingHotLead.firstName = firstName || existingHotLead.firstName;
      existingHotLead.lastName = lastName || existingHotLead.lastName;
  
      // Save the updated HotLead document to the database
      const updatedHotLead = await existingHotLead.save();
  
      return NextResponse.json({ hotLead: updatedHotLead }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }