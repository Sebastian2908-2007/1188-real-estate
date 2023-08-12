import dbConnect from "@/db/config/connection";
import {ColdLead,ColdLeadEmail} from '@/db/models';
import { NextResponse } from "next/server";

/**this will delete an ColdLead email document as well as remove 
 * it from the ColdLead emailAddresses array used in admin dash*/

export async function DELETE(request) {
    const { coldLeadId, coldLeadEmailId } = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing ColdLeadEmail document by ID
      const existingColdLeadEmail = await ColdLeadEmail.findById(coldLeadEmailId);
  
      if (!existingColdLeadEmail) {
        return NextResponse.json({ error: 'ColdLeadEmail not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Remove the ColdLeadEmail document from the database
      await existingColdLeadEmail.deleteOne();
  
      // Find the corresponding ColdLead document by ID
      const existingColdLead = await ColdLead.findById(coldLeadId);
  
      if (existingColdLead) {
        // Remove the ColdLeadEmail's ID from the emailAddresses array in the ColdLead document
        existingColdLead.emailAddresses = existingColdLead.emailAddresses.filter(
          (emailId) => emailId.toString() !== coldLeadEmailId
        );
  
        // Save the updated ColdLead document to the database
        await existingColdLead.save();
      }
  
      return NextResponse.json({ message: 'ColdLeadEmail deleted successfully.' }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }