import dbConnect from "@/db/config/connection";
import {Note} from '@/db/models';
import { NextResponse } from "next/server";

/**this will update a note for a cold or hotlead we will sent the note id in the request*/
export async function PUT(request) {
    const { id, noteText } = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing Note document by ID
      const existingNote = await Note.findById(id);
  
      if (!existingNote) {
        return NextResponse.json({ error: 'Note not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Update the noteText field with the new value
      existingNote.noteText = noteText;
  
      // Save the updated Note document to the database
      const updatedNote = await existingNote.save();
  
      return NextResponse.json({ note: updatedNote }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }