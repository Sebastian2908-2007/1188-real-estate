import dbConnect from "@/db/config/connection";
import {Situation,ColdLead} from '@/db/models';
import { NextResponse } from "next/server";

/**here we create a situation document and add it to a coldLead whos id is coming from the query params
 * this will be used in the admin dash
 */
export async function POST(request,{params}) {
    const  coldLeadId  = params.id;
    const situationData = await request.json();

    console.log(coldLeadId);
    console.log(situationData);
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Create a new Situation document
      const newSituation = new Situation(situationData);
  
      // Save the new Situation document to the database
      const savedSituation = await newSituation.save();
  
      // Find the existing ColdLead document by ID
      const existingColdLead = await ColdLead.findById(coldLeadId);
  
      if (!existingColdLead) {
        return NextResponse.json({ error: 'ColdLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Add the ID of the newly created Situation document to the situation field of the ColdLead
      existingColdLead.situation = savedSituation._id;
  
      // Save the updated ColdLead document with the new situation
      await existingColdLead.save();
  
      return NextResponse.json({ situation: savedSituation }, { status: 201 }); // 201 Created
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }

