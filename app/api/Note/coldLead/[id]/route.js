import dbConnect from "@/db/config/connection";
import {Note,ColdLead} from '@/db/models';
import { NextResponse } from "next/server";

/**this will create a note using the cold lead id in the query params and push it to cold lead notes array */

export async function POST(request,{params}) {
    const  coldLeadId  = params.id;
    const noteData = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Create a new Note document
      const newNote = new Note(noteData);
  
      // Save the new Note document to the database
      const savedNote = await newNote.save();
  
      // Find the existing ColdLead document by ID
      const existingColdLead = await ColdLead.findById(coldLeadId);
  
      if (!existingColdLead) {
        return NextResponse.json({ error: 'ColdLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Push the ID of the newly created Note to the notes array of the ColdLead
      existingColdLead.notes.push(savedNote._id);
  
      // Save the updated ColdLead document with the new Note
      await existingColdLead.save();
  
      return NextResponse.json({ note: savedNote }, { status: 201 }); // 201 Created
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }