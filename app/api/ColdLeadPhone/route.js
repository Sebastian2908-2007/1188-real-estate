import dbConnect from "@/db/config/connection";
import {ColdLead,ColdLeadPhone} from '@/db/models';
import { NextResponse } from "next/server";

/**this will delete a phone number from the ColdLead phone array used in admin dash*/

export async function DELETE(request) {
    const { coldLeadId, coldLeadPhoneId } = await request.json();
  console.log(coldLeadId);
  console.log(coldLeadPhoneId);
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing ColdLeadPhone document by ID
      const existingColdLeadPhone = await ColdLeadPhone.findById(coldLeadPhoneId);
  
      if (!existingColdLeadPhone) {
        return NextResponse.json({ error: 'ColdLeadPhone not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Remove the ColdLeadPhone document from the database
      await existingColdLeadPhone.deleteOne();
  
      // Find the corresponding ColdLead document by ID
      const existingColdLead = await ColdLead.findById(coldLeadId);
  
      if (!existingColdLead) {
        return NextResponse.json({ error: 'ColdLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Remove the ColdLeadPhone's ID from the phoneNumbers array in the ColdLead document
      existingColdLead.phone = existingColdLead.phone.filter(
        (phoneId) => phoneId.toString() !== coldLeadPhoneId
      );
  
      // Save the updated ColdLead document to the database
      await existingColdLead.save();
  
      return NextResponse.json(
        { message: 'ColdLeadPhone deleted and removed from ColdLead successfully.' },
        { status: 200 }
      ); // 200 OK
    } catch (error) {
        console.log(error);
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }