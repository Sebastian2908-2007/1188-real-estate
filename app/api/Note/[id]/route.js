import dbConnect from "@/db/config/connection";
import {Note,HotLead} from '@/db/models';
import { NextResponse } from "next/server";

export async function POST(request,{params}) {
    const  hotLeadId  = params.id;
    const { noteText } = await request.json();
     console.log(hotLeadId);
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Create a new Note document
      const newNote = new Note({
        noteText,
      });
  
      // Save the new Note document to the database
      const savedNote = await newNote.save();
  
      // Find the existing HotLead document by ID
      const existingHotLead = await HotLead.findById(hotLeadId);
  
      if (!existingHotLead) {
        return NextResponse.json({ error: 'HotLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Push the Note's _id to the HotLead's notes array
      existingHotLead.notes.push(savedNote._id);
  
      // Save the updated HotLead document with the new Note in the notes array
      await existingHotLead.save();
  
      return NextResponse.json({ hotLead: existingHotLead }, { status: 201 }); // 201 Created
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }