import dbConnect from "@/db/config/connection";
import {HotLead} from '@/db/models';
import { NextResponse } from "next/server";

/**this will be used in admin dash to update hot lead status*/
export async function PUT(request,{params}) {
    const  hotLeadId  = params.id;
    const { status } = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing HotLead document by ID
      const existingHotLead = await HotLead.findById(hotLeadId);
  
      if (!existingHotLead) {
        return NextResponse.json({ error: 'HotLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Update the status field of the HotLead
      existingHotLead.status = status;
  
      // Save the updated HotLead document
      const updatedHotLead = await existingHotLead.save();
  
      return NextResponse.json({ hotLead: updatedHotLead }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }