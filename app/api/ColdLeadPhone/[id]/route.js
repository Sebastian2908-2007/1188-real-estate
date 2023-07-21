import dbConnect from "@/db/config/connection";
import {ColdLead,ColdLeadPhone} from '@/db/models';
import { NextResponse } from "next/server";

export async function POST(request,{params}) {
    const  coldLeadId  = params.id;
    const { phone } = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing ColdLead document by ID
      const existingColdLead = await ColdLead.findById(coldLeadId);
  
      if (!existingColdLead) {
        return NextResponse.json({ error: 'ColdLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Create a new ColdLeadPhone document
      const newColdLeadPhone = new ColdLeadPhone({
        phone: phone,
      });
  
      // Save the new ColdLeadPhone document to the database
      const savedColdLeadPhone = await newColdLeadPhone.save();
  
      // Push the saved ColdLeadPhone to the phoneNumbers array in the ColdLead document
      existingColdLead.phone.push(savedColdLeadPhone);
  
      // Save the updated ColdLead document with the new phoneNumbers array
      await existingColdLead.save();
  
      return NextResponse.json({ coldLeadPhone: savedColdLeadPhone }, { status: 201 }); // 201 Created
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }