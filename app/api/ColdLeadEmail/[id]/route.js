import dbConnect from "@/db/config/connection";
import {ColdLead,ColdLeadEmail} from '@/db/models';
import { NextResponse } from "next/server";

/**create coldLeadEmail and push it to ColdLead data*/
export async function POST(request,{params}) {
    const  coldLeadId  = params.id;
    const { suspectedEmail } = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing ColdLead document by ID
      const existingColdLead = await ColdLead.findById(coldLeadId);
  
      if (!existingColdLead) {
        return NextResponse.json({ error: 'ColdLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Create a new ColdLeadEmail document
      const newColdLeadEmail = new ColdLeadEmail({
        suspectedEmail,
      });
  
      // Save the new ColdLeadEmail document to the database
      const savedColdLeadEmail = await newColdLeadEmail.save();
  
      // Push the saved ColdLeadEmail to the emailAddresses array in the ColdLead document
      existingColdLead.emailAddresses.push(savedColdLeadEmail);
  
      // Save the updated ColdLead document with the new emailAddresses array
      await existingColdLead.save();
  
      return NextResponse.json({ coldLeadEmail: savedColdLeadEmail }, { status: 201 }); // 201 Created
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }